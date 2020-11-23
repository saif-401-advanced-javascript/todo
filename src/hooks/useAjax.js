import React, { useState } from 'react';
import axios from 'axios';

function useAjax(URL, cb, list) {
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
        cb([...list], res.data);
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
  return {
    getItems: getTodoItems,
    addItem: addItem,
    toggleComplete: toggleComplete
  };
}

export default useAjax;
