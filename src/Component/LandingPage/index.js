import './style.css';
import logo from '../../asset/landingPagePic.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigation = useNavigate();
  function registration() {
    navigation('/registration');
  }

  function singIn() {
    if (localStorage.getItem('users')) {
      navigation('/login');
    } else {
      navigation('/registration');
    }
  }

  return (
    <div className="ladingPageContainer">
      <div className="ladingPageContainerLeft">
        <motion.h1
          className="shopName"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          MeShop<span>.</span>
        </motion.h1>
        <div className="btnSection">
          <motion.button
            className="Reg-btn"
            onClick={registration}
            initial={{ opacity: 0, translateX: -150 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Sign Up
          </motion.button>
          <motion.button
            className="Reg-btn"
            onClick={singIn}
            initial={{ opacity: 0, translateX: 150 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Login
          </motion.button>
        </div>
      </div>
      <div className="ladingPageContainerRight">
        <img className="imageSection" src={logo} alt="image" />
      </div>
    </div>
  );
};

export default LandingPage;
