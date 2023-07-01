import axios from 'axios';

export const gettingItems = () => {
  let item = axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log('error occurs, ', err));
  return item;
};
