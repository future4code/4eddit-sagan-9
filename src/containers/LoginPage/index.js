import React, { Component } from "react";
import Header from '../../Components/Header'
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { routes } from '../Router/index'
import {setLogin} from '../../Actions/index'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {}
    }
  }

  goToRegistration = () => {
    this.props.goToSignUp()
    console.log('oi')
  }
  saveInfo = (event) => {
    const { name, value } = event.target
    this.setState({ userInfo: { ...this.state.userInfo, [name]: value } })
    console.log(this.state.userInfo)
  }
  submitLogin = (event) => {
    event.preventDefault();
    this.props.sendDataToApi(this.state.userInfo)
  }

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.submitLogin}>
          <label>E-mail</label>
          <input name='email' onChange={this.saveInfo}></input>
          <label>Senha</label>
          <input name='password' onChange={this.saveInfo}></input>
          <button type={onsubmit}>Entrar</button>
        </form>
        <p onClick={this.goToRegistration}><u>Ainda não tem cadastro?Clique aqui para cadastrar</u></p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToSignUp: () => dispatch(push(routes.registrationPage)),
    sendDataToApi: (userInfo) => dispatch(setLogin(userInfo))
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);

