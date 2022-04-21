import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import Alert from "./Alert";
import About from './About'
import UserDetails from './UserDetails'
import { BrowserRouter,Route,Switch,Link,NavLink } from "react-router-dom";
import Githubstate from '../context/github/githubState'
import Alertstate from '../context/alert/alertState'

const App = () => {
  
  return (
    <Githubstate>
        <Alertstate>
            <BrowserRouter>
                <Navbar title="Github Finder" icon="fab fa-github" />
                <Alert />
                <Switch>
                    <Route exact path="/" render={
                        props => (
                            <>
                            <Search/>
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
        </Alertstate> 
    </Githubstate> 
  );
}

export default App;
