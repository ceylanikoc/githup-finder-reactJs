import React, { Component } from "react";

class User extends Component {
  render() {
    const { id, name, login, avatar_url, html_url, followers, blog } =
      this.props.user;
    return (
      <div className="col-lg-3 col-md-6 mb-3 mb-lg-4">
        <div className="card">
          <img src={avatar_url} alt="" className="img-fluid" />
          <div className="card-body">
            <h5 className="card-title">{login}</h5>
            <a href={html_url} className="btn btn-primary" target="_blank">
              Go Profile
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
