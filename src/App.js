import 'bootstrap/dist/css/bootstrap.min.css';
import MainApp from "./Component/MainApp";
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import { createContext, useEffect, useState } from 'react';

export const setStatusContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [currentUserNum, setCurrentUserNum] = useState();
  
  const value = {
    isLogin, setIsLogin,
    isSignUp, setIsSignUp,
    currentUserNum, setCurrentUserNum
  }

  return (
    <>
    <setStatusContext.Provider value={value}>
      {isLogin && <MainApp />}
      {isLogin || (
        <>
          {isSignUp ? <SignUp /> : <Login />}
        </>
      )}
    </setStatusContext.Provider>
    </>
  );
}

export default App;