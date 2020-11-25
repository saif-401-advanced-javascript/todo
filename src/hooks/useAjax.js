import axios from 'axios';
import { useContext } from 'react';
import { SettingContext } from '../context/setting';

function useAjax(URL, cb, list) {
  const { sorted } = useContext(SettingContext);

  const getTodoItems = () => {
    axios({
      url: URL,
      method: 'get',
      mode: 'core'
    })
      .then((res) => {
        cb(res.data.results);
      })
      .catch(console.error);
  };

  const addItem = (item) => {
    // Set a date for the item
    item.due = new Date();
    axios({
      url: URL,
      method: 'post',
      data: item
    })
      .then((res) => {
        let addingArray = [...list, res.data];
        console.log(sorted);
        if (sorted === 'difficulty') {
          addingArray = addingArray.sort((a, b) => a.difficulty - b.difficulty);
        }
        cb(addingArray);
      })
      .catch('This is the errror', console.error);
  };

  const toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let url = `${URL}/${id}`;
      axios({
        url: url,
        method: 'put',
        data: item
      })
        .then((res) => {
          cb(
            list.map((listItem) =>
              listItem._id === item._id ? res.data : listItem
            )
          );
        })
        .catch(console.error);
    }
  };

  const deleteItem = (itemId) => {
    let url = `${URL}/${itemId}`;
    axios({
      url: url,
      method: 'delete'
    }).then((res) => {
      let items = list.filter((item) => item._id !== itemId);
      cb(items);
    });
  };
  return {
    getItems: getTodoItems,
    addItem: addItem,
    toggleComplete: toggleComplete,
    deleteItem: deleteItem
  };
}

export default useAjax;
