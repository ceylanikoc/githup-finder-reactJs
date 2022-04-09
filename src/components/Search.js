import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.onchange = this.onchange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      keyword: "",
    };
  }
  onchange(e) {
    this.setState({
      keyword: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.keyword === "") {
      this.props.setAlert("Lütfen bir anahtar kelime giriniz.", "danger");
    } else {
      this.props.searchUsers(this.state.keyword);
      this.setState({
        keyword: "",
      });
    }
  }
  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={this.state.keyword}
              onChange={this.onchange}
              className="form-control"
              placeholder="Search User..."
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
        {this.props.showClearButton && (
          <button
            onClick={this.props.clearUsers}
            className="btn btn-secondary btn-sm btn-block mt-2"
          >
            Clear Result
          </button>
        )}
      </div>
    );
  }
}

export default Search;
