import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Countdown from "./components/Countdown";
import Uploader from "./components/Uploader";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Route exact path='/' component={Home}/>
    <Route exact path='/Countdown' component={Countdown}/>
    <Route exact path='/Uploader' component={Uploader}/>
    </BrowserRouter>
  );
}

export default App;