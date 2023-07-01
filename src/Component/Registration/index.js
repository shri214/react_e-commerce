import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { delay, motion } from 'framer-motion';
import Navbar from '../Navbar/index';
import Input from '../Input';
import './style.css';
import { validation } from '../../function/validation';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [cnf, setCnf] = useState('');

  const navigation = useNavigate();

  function gettingName(e) {
    setName(e.target.value);
  }
  function gettingEmail(e) {
    setEmail(e.target.value);
  }
  function onPass(e) {
    setPass(e.target.value);
  }
  function onCnfPass(e) {
    setCnf(e.target.value);
  }

  console.log(name);

  function saveUserCredential() {
    console.log('save data', name, email, password);
    let flag = validation(name, email, password, cnf);
    if (flag === true) {
      console.log('flag is ', flag);
      setTimeout(() => {
        navigation('/modal');
      }, 1500);
    }
  }
  return (
    <>
      <Navbar />
      <div className="registration-container">
        <ToastContainer />
        <motion.h1
          className="sign"
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Sign Up
        </motion.h1>
        <div className="box-container">
          <Input
            id={'name'}
            type={'text'}
            onchange={(e) => gettingName(e)}
            place={'userName'}
            value={name}
          />
          <Input
            id={'email'}
            type={'email'}
            onchange={(e) => gettingEmail(e)}
            place={'Email'}
            value={email}
          />
          <Input
            id={'pass'}
            type={'password'}
            onchange={(e) => onPass(e)}
            place={'Password'}
            value={password}
          />
          <Input
            id={'cnfPass'}
            type={'password'}
            onchange={(e) => onCnfPass(e)}
            place={'Confirm Pass'}
            value={cnf}
          />
        </div>
        <button className="Reg-btn" onClick={saveUserCredential}>
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Registration;
