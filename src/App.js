import React, { useState } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import {Button, Form} from 'react-bootstrap';
import { auth , db } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth"
import Login from "./components/Login/Login";



function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {

    setUser(currentUser);

  })


  const register = async () => { 

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);

    } catch(err) {
      console.log(err.message);
    }
  }

  const login = async () => { 

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);

    } catch(err) {
      console.log(err.message);
    }

  }

  const logout = async () => { 

    await signOut(auth);

  }
  

  return (


    <div className="main-wrapper-login">
            

      <Login />
      <div className="text-center">
        <h1>Register</h1>
        <input type="text" placeholder="Email..."
          onChange={(e) => { setRegisterEmail(e.target.value) }}
        />
        <input type="text" placeholder="Password..."
          onChange={(e) => { setRegisterPassword(e.target.value) }}
        />
        <div>
          <button onClick={register}>Register User</button>
        </div>
        <br />
      </div>
      
      <div className="text-center">
        <h1>Login</h1>
        <input type="text" placeholder="Email..."
          onChange={(e) => { setLoginEmail(e.target.value) }}
        />
        <input type="text" placeholder="Password..."
          onChange={(e) => { setLoginPassword(e.target.value) }}
        />

        <div>
          <button onClick={login}>Login User</button>
        </div>
        
      </div>

      <br />

      <h4>User Logged In: 
        {user ? user.email : " No User"}
      </h4>

      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

export default App;
