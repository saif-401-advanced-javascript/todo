export default function usePagination(URL, cb, list) {
  const getItemsP = (number, page, total) => {
    let begin = (page - 1) * number;
    number = page * number;
    let requiredItems = total.slice(begin, number);
    cb(requiredItems);
  };
  return {
    getItemsP: getItemsP
  };
}
