import React, { Component }  from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    if (!this.state.email) {
      return this.setState({ error: 'Email is required' });
    }
    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    return this.setState({ error: '' });
  }
  handleUserChange = (evt) => {
    return this.setState({ email: evt.target.value });
  }
  handlePasswordChange = (evt) => {
    return this.setState({ password: evt.target.value });
  }
  render(){
    return(
      <div className="container">
        <form className="loginHolder" onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
             <button
              onClick={this.dismissError}>✖</button>
             {this.state.error}
            </h3>
          }
          <label>User Name</label>
          <input className="loginInput"
            type="email" 
            data-test="email"
            value={this.state.email}
            onChange={this.handleUserChange} 
          />
          <label>Email</label>
          <input className="loginInput"
            type="password" 
            data-test="password" 
            value={this.state.password} 
            onChange={this.handlePasswordChange} 
          />
          <Link href={'/test'} to={'/test'}>
            <button className="Submit-btn"
              type="submit" 
              text="" 
              data-test="submit"
            > Begin Test </button>
          </Link>
        </form>
    </div>
    );
  } 
}
export default Login;