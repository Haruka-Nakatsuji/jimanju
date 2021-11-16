import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import logo from '../images/logo.png';
import UserData from "../data.json";
import { useContext, useEffect, useState } from "react";
import { setStatusContext } from "../App";

const Login = () => {

  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [warning, setWarning] = useState("");
  
  const {
    isLogin,
    setIsLogin,
    isSignUp,
    setIsSignUp,
    currentUserNum,
    setCurrentUserNum
  } = useContext(setStatusContext);

  const checkLogin = () => {
    UserData.users.map((users, index) => {
      if(users.id === id && users.pass === pass) {
        setIsLogin(true);
        setCurrentUserNum(Number(index));
      } else {
        setWarning("IDもしくはパスワードが違います。");
      }
    });
  }

  return (
    <div className="login-wrapper">
      <h1><img src={logo} /></h1>
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" value={id} onChange={e => setId(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your ID with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={checkLogin} type="submit">
          ログイン
        </Button>
        <p>新規登録はまだですか？<button onClick={() => setIsSignUp(true)}>こちら</button>からどうぞ。</p>
        <p>{warning}</p>
      </Form>
    </div>
  )
}

export default Login;