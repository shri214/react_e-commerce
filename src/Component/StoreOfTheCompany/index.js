import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gettingItems } from '../../function/gettingItem';

import Button from '../Button';
import Navbar from '../Navbar';
import Loader from '../Loader';
import { ListingItem } from '../ListingItem';

import './style.css';

// --------------------------

const StoreOfTheCompany = () => {
  const [item, setItem] = useState([]);

  let [searchVal, setSearchVal] = useState('');

  const getSearch = (e) => {
    setSearchVal(e.target.value.toLowerCase());
  };
  let navigation = useNavigate();
  useEffect(() => {
    if (
      !localStorage.getItem('loginUser') &&
      window.location.pathname === '/store'
    ) {
      navigation('/login');
    }
  }, [window.location.pathname]);

  useEffect(() => {
    gettingStoreItems();
    console.log('use effect called');
  }, []);

  async function gettingStoreItems() {
    let data = await gettingItems();
    data.forEach((element) => {
      if (element['isAdd'] === undefined) {
        element['isAdd'] = true;
      }
    });
    setItem(data);
  }

  const changeMen = () => {
    setSearchVal('men');
  };
  const changeWomen = () => {
    setSearchVal('women');
  };
  const changeJewellers = () => {
    setSearchVal('jeweler');
  };
  const changeElectrical = () => {
    setSearchVal('electronic');
  };
  const All = () => {
    setSearchVal('');
  };

  return (
    <div className="big-container">
      <Navbar />
      <div className="searchBar">
        <input
          type="search"
          placeholder="search"
          id="search"
          value={searchVal}
          onChange={(e) => getSearch(e)}
        />

        <div className="filters">
          <Button clName={'Reg-btn filter-btn'} btn={'All'} clickEvent={All} />
          <Button
            clName={'Reg-btn filter-btn'}
            btn={"Men's"}
            clickEvent={changeMen}
          />
          <Button
            clName={'Reg-btn filter-btn'}
            btn={"Women's"}
            clickEvent={changeWomen}
          />
          <Button
            clName={'Reg-btn filter-btn'}
            btn={'Jeweler'}
            clickEvent={changeJewellers}
          />
          <Button
            clName={'Reg-btn filter-btn'}
            btn={'Electronic'}
            clickEvent={changeElectrical}
          />
        </div>
      </div>
      <div className="container">
        {item.length <= 0 ? (
          <Loader />
        ) : (
          <div className="main-box">
            {item
              .filter((value) =>
                value.category.toLowerCase().includes(searchVal)
              )
              .map((ele, ind) => {
                return <ListingItem ele={ele} ind={ind} />;
              })}
          </div>
        )}
      </div>
    </div>
  );
};
export default StoreOfTheCompany;
