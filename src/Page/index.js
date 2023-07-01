import LandingPage from '../Component/LandingPage';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Registration from '../Component/Registration';
import Modal from '../Component/Modal';
import Login from '../Component/Login';
import Profile from '../Component/Profile';
import StoreOfTheCompany from '../Component/StoreOfTheCompany';
import CartItem from '../Component/CartItem';

const Page = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/store" element={<StoreOfTheCompany />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
};
export default Page;
