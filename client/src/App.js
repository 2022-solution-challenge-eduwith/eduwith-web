import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Login from "./components/Login";
import Volunteer from './routes/Volunteer';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';


const GlobalStyle = createGlobalStyle
  `body{
        background: #e9ecef;
      }`;

function App() {

  return (
    <Volunteer/>
    /*<Router>
      <Routes>
        <Route path="/" element={<Main/>}>
        </Route>
        <Route path="/Volunteer" element={<Volunteer/>}>
        </Route>
      </Routes>
    </Router>*/
  );
}
export default App;
{/* <Main>
      <div onClick={onLoginToggle}>로그인</div>
      {loginToggle && <Login onLoginToggle={onLoginToggle} />}
    </Main> */}
