import { toast } from 'react-toastify';
export const addToCart = (item) => {
  let login = JSON.parse(localStorage.getItem('loginUser'));
  let Cart = JSON.parse(localStorage.getItem('cart'));
  let obj = { id: item.id };
  for (let i = 0; i < Cart.length; i++) {
    let listName = Cart[i][0];
    if (listName === login.email) {
      if (Cart[i].length > 1) {
        let flag = true;
        for (let j = 1; j < Cart[i].length; j++) {
          if (Cart[i][j].id === item.id) {
            flag = false;
            return toast.warn('Item is already added ');
          }
        }
        if (flag === true) {
          Cart[i].push(obj);
          localStorage.setItem('cart', JSON.stringify(Cart));
        } else {
          console.log('already done');
        }
      } else {
        Cart[i].push(obj);
        localStorage.setItem('cart', JSON.stringify(Cart));
      }
    }
  }
  return toast.success('Item added ');
};
