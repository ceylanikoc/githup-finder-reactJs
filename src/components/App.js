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
  
  const [users,setUsers] = useState([])  
  const [user,setUser] = useState({})  
  const [loading,setLoading] = useState(false)  
  const [alert,setAlert] = useState(null)  
  const [repos,setRepos] = useState([])
  
  // Component Loading
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        axios.get("https://api.github.com/users").then((res) => {
          setUsers(res.data)
          setLoading(false)
      });
      }, 500);
  },[])

  const getUser= (username) => {
        setLoading(true)
        setTimeout(() => {
            axios.get(`https://api.github.com/users/${username}`).then((res) => 
            {
                setUser(res.data)
                setLoading(false)
            });
        }, 1000);
  }

  const getUserRepos = (username) => {
    setLoading(true)
    setTimeout(() => {
        axios.get(`https://api.github.com/users/${username}/repos`).then((res) => {
                setRepos(res.data)
                setLoading(false)
            });
    }, 1000);
}

  

  const clearUsers = () => {
    setUsers([])
  }

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
                    clearUsers={clearUsers}
                    showClearButton={users.length > 0}
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
                getUser={getUser} 
                getUserRepos={getUserRepos}
                user={user} 
                repos = {repos}
                loading={loading}
                />
            )}/>
        </Switch>
        </BrowserRouter>
    </Githubstate> 
  );
}

export default App;
