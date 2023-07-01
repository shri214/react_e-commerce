import { addToCart } from '../../function/addToCart';
import removeItemFromCart from '../../function/removeItemFromCart';
import { ToastContainer } from 'react-toastify';
import Button from '../Button';
import './style.css';

export const ListingItem = ({ ele, ind, settingData }) => {
  //   --------------------

  const addingCart = (item) => {
    addToCart(item);
  };

  //removeFromCart

  const removeFromCart = (item) => {
    removeItemFromCart(item);
    settingData(item.id);
  };

  //   redirecting at new page

  const redirectToNextPage = (item) => {
    // console.log(item);
    let arr = [];
    arr.push(item);

    // localStorage.setItem('itemDetails', JSON.stringify(arr));
    // navigation('/itemDetail');
    console.log('successfully done');
  };
  return (
    <div key={ele.id} className="item-box">
      <ToastContainer />
      <div className="image" onClick={() => redirectToNextPage(ele)}>
        <img src={ele.image} alt={`image${ind}`} />
      </div>
      <div className="detail">
        <p>{ele.title}</p>
        <p className="color">
          Color :
          {ind % 2 === 0 ? (
            <>
              <span className="red"></span>
              <span className="blue"></span>
              <span className="green"></span>
            </>
          ) : (
            <>
              <span className="black"></span>
              <span className="yellow"></span>
              <span className="coral"></span>
            </>
          )}
        </p>
        <div className="prices">
          <span>Price : ${ele.price}</span>
          <span>Rating : {ele.rating.rate}</span>
        </div>
      </div>
      {ele.isAdd === true ? (
        <Button
          btn={'Add To Cart'}
          clickEvent={() => addingCart(ele)}
          clName={'adding-btn'}
        />
      ) : (
        <Button
          btn={'Remove To Cart'}
          clickEvent={() => removeFromCart(ele)}
          clName={'adding-btn'}
        />
      )}
    </div>
  );
};
