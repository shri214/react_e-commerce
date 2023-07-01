import { useNavigate } from 'react-router-dom';
import './style.css';
import Button from '../Button';
const Modal = () => {
  let navigation = useNavigate();

  const no = () => {
    navigation('/registration');
  };

  const yes = () => {
    navigation('/login');
  };
  return (
    <div className="outer-modal">
      <div className="modal">
        <h1>You are successfully Register</h1>
        <div>
          <Button clName={'Reg-btn no-btn'} btn={'No'} clickEvent={no} />
          <Button clName={'Reg-btn yes-btn'} btn={'Yes'} clickEvent={yes} />
        </div>
      </div>
    </div>
  );
};
export default Modal;
