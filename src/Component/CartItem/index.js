import { useEffect, useState } from 'react';
import { ListingItem } from '../ListingItem';
import { gettingItems } from '../../function/gettingItem';
import Loader from '../Loader';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './style.css';

const CartItem = () => {
  const [item, setItem] = useState([]);
  const [data, setData] = useState([]);
  const [dummy, setDummy] = useState('');

  const navigator = useNavigate();

  useEffect(() => {
    if (
      !localStorage.getItem('loginUser') &&
      window.location.pathname === '/cart'
    ) {
      navigator('/login');
    } else {
      let Cart = JSON.parse(localStorage.getItem('cart'));
      console.log('use effect is called');
      for (let i = 0; i < Cart.length; i++) {
        let listName = Cart[i][0];
        if (listName === login.email) {
          let arr = [];
          for (let j = 1; j < Cart[i].length; j++) {
            arr.push(Cart[i][j].id);
          }
          setData(arr);
        }
      }

      gettingStoreItems();
      console.log('use effect called');
    }
  }, [dummy]);

  let login = JSON.parse(localStorage.getItem('loginUser'));
  async function gettingStoreItems() {
    let data = await gettingItems();
    data.forEach((element) => {
      if (element['isAdd'] === undefined) {
        element['isAdd'] = false;
      }
    });
    setItem(data);
  }

  useEffect(() => {}, [dummy]);

  return (
    <>
      <Navbar />

      <div className="container">
        {item.length <= 0 ? (
          <Loader />
        ) : (
          <div className="main-box">
            {item.filter((value) => data.includes(value.id)).length <= 0 ? (
              <div className="cartEmpty">
                <h1>Welcome</h1>
                <motion.b
                  initial={{ opacity: 1, translateX: -20 }}
                  animate={{ opacity: 1, translateX: 20 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    type: 'smooth',
                  }}
                >
                  {login.name}
                </motion.b>
                <p>Your Cart is Empty</p>
                <button className="Reg-btn" onClick={() => navigator('/store')}>
                  Goto Store
                </button>
              </div>
            ) : (
              item
                .filter((value) => data.includes(value.id))
                .map((ele, ind) => {
                  return (
                    <ListingItem ele={ele} ind={ind} settingData={setDummy} />
                  );
                })
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default CartItem;
