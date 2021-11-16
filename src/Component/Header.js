import { Dropdown } from 'react-bootstrap';
import logo from '../images/logo.png';
import userIcon from '../images/sample.jpg';
import UserData from "../data.json";
import { useContext } from 'react';
import { setStatusContext } from '../App';

const Header = () => {

  const {isLogin, setIsLogin, currentUserNum, setCurrentUserNum} = useContext(setStatusContext);

  return (
    <header>
      <div className="top-header-inner">
        <h1><img src={logo} alt="jimanju" /></h1>
        <div className="top-header-right">
          <span>{UserData.users[currentUserNum].name}</span>
          <Dropdown>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
            <div className="top-user-icon"><img src={userIcon} alt="サンプルの画像です。" /></div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>プロフィール</Dropdown.Item>
              <Dropdown.Item onClick={() => setIsLogin(false)}>ログアウト</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </header>
  )
}

export default Header;