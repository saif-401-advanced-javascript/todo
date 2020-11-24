import axios from 'axios';
export default function usePagination(URL, cb, list) {
  const getItemsP = (number, page) => {
    let begin = (page - 1) * number;
    number = page * number;
    axios({
      url: URL,
      method: 'get',
      mode: 'core'
    })
      .then((res) => {
        let requiredItems = res.data.results.slice(begin, number);
        cb(requiredItems);
      })
      .catch(console.error);
  };
  return {
    getItemsP: getItemsP
  };
}
