import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Login from "./components/Login";
import Volunteer from './routes/Volunteer';
import { createGlobalStyle } from 'styled-components';
import { useEffect } from 'react';

const axios = require('axios');


const GlobalStyle = createGlobalStyle
  `body{
        background: #e9ecef;
      }`;

function App() {

  useEffect(() => {
    axios.get("/api")
    .then(function (response) {console.log(response); })
    .catch(function (error) {console.log(error);})
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/Volunteer" element={<Volunteer/>}>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;

