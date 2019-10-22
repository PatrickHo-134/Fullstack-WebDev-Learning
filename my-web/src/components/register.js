import React, { Component } from "react";

class UserRegister extends Component {
  render() {
    return (
      <div>
        <h1>Introduction to Node and MongoDB</h1>
        <form method="post" action="/addname">
          <label>Enter Your Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name..."
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name..."
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Enter email..."
            required
          />
          <input type="submit" value="Add Name" />
        </form>
      </div>
    );
  }
}

export default UserRegister;
