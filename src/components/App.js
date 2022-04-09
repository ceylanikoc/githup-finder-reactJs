import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
    this.state = {
      loading: false,
      users: [],
    };
  }
  // Component Load Updates
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
  render() {
    return (
      <Fragment>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClearButton={this.state.users.length > 0}
        />
        <Users users={this.state.users} loading={this.state.loading} />
      </Fragment>
    );
  }
}

export default App;
