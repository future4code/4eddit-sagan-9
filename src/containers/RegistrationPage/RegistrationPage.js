import React, { Component } from 'react'
import Header from '../../Components/Header'
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'
import {newUser} from '../../Actions/index'

class RegistrationPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: {}
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ userData: { ...this.state.userData, [name]: value } })
    console.log(this.state.userData)
  }
  sendData = (event) => {
    this.props.sendDataToApi(this.state.userData)
    event.preventDefault();
    console.log('sendData')
  }

  render() {
    return (
      <div>
        <Header/>
                RegistrationPage
        <form onSubmit={this.sendData}>
          <label>Email</label>
          <input type='text' name='email' onChange={this.handleInputChange}></input>
          <label>Senha</label>
          <input type='password' name='password' onChange={this.handleInputChange}></input>
          <label>Nome de usuário</label>
          <input type='text' name='username' onChange={this.handleInputChange}></input>
          <button type={onsubmit}>Cadastrar</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToSignUp: () => dispatch(push(routes.registrationPage)),
    sendDataToApi: (userData) => dispatch(newUser(userData))
  };
}


export default connect(null, mapDispatchToProps)(RegistrationPage);
