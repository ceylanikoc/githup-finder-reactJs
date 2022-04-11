import React, { Component } from 'react'

class UserDetails extends Component {
  componentDidMount() {
      this.props.getUser(this.props.match.params.login)
  }
  render() {
    console.log(this.props);
    return (
      <div>
          User Details
      </div>
    )
  }
}

export default UserDetails