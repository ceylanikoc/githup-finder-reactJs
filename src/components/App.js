import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.state = {
      loading: false,
      users: [],
    };
  }
  // Component Load Update
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
  render() {
    return (
      <Fragment>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <Search searchUsers={this.searchUsers} />
        <Users users={this.state.users} loading={this.state.loading} />
      </Fragment>
    );
  }
}

export default App;
