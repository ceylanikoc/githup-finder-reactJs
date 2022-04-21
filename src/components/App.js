import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import axios from "axios";
import Alert from "./Alert";
import About from './About'
import UserDetails from './UserDetails'
import { BrowserRouter,Route,Switch,Link,NavLink } from "react-router-dom";
import Githubstate from '../context/githubState'

const App = () => {
  
  const [alert,setAlert] = useState(null)  
  const [repos,setRepos] = useState([])
  

  const showAlert = (msg, type) => {
    setAlert({msg,type})
    setTimeout(() => {
        setAlert({ alert: null })
    }, 3000);
  }
  return (
    <Githubstate> 
        <BrowserRouter>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <Alert alert={alert} />
        <Switch>
            <Route exact path="/" render={
                props => (
                    <>
                    <Search
                    setAlert={showAlert}
                    />
                    <Users />
                    </>
                )
            } />
            <Route path="/about" component= { About }/>
            <Route path="/user/:login" render = {props => (
                <UserDetails 
                {...props} 
                />
            )}/>
        </Switch>
        </BrowserRouter>
    </Githubstate> 
  );
}

export default App;
