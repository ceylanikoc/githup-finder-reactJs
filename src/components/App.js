import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import axios from "axios";
import Alert from "./Alert";

export class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.state = {
      loading: false,
      users: [],
      alert: null,
    };
  }
  // Component Loading
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      axios.get("https://api.github.com/users").then((res) =>
        this.setState({
          users: res.data,
          loading: false,
        })
      );
    }, 500);
  }

  searchUsers(keyword) {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) =>
          this.setState({
            users: res.data.items,
            loading: false,
          })
        );
    }, 500);
  }

  clearUsers() {
    this.setState({
      users: [],
    });
  }

  setAlert(msg, type) {
    this.setState({
      alert: { msg: msg, type: type },
    });
    setTimeout(() => {
      this.setState({
        alert: null,
      });
    }, 3000);
  }
  render() {
    return (
      <Fragment>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClearButton={this.state.users.length > 0}
          setAlert={this.setAlert}
        />
        <Users users={this.state.users} loading={this.state.loading} />
      </Fragment>
    );
  }
}

export default App;
