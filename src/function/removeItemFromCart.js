import { toast } from 'react-toastify';

const removeItemFromCart = (item) => {
  let login = JSON.parse(localStorage.getItem('loginUser'));
  let Cart = JSON.parse(localStorage.getItem('cart'));

  for (let i = 0; i < Cart.length; i++) {
    let listName = Cart[i][0];
    if (listName === login.email) {
      for (let j = 1; j < Cart[i].length; j++) {
        if (Cart[i][j].id === item.id) {
          Cart[i].splice(j, 1);
        }
      }
    }
  }
  localStorage.setItem('cart', JSON.stringify(Cart));
  return toast.success('item is removed successful');
};
export default removeItemFromCart;
