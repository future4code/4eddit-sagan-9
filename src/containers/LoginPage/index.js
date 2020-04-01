import React, { Component } from "react";
import Header from '../../Components/Header'
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { routes } from '../Router/index'
import {setLogin} from '../../Actions/index'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  border: 1px solid black;
  margin: 0 auto
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  backgroun-color: white;
  background-image: url('https://lh3.googleusercontent.com/proxy/fa_V2f-co32B7rI-px1q-FfSdclHUXn3p_DDnSeCKsA0PiS1VdHQ7wr1PkdG1ihXMNohTAxg6B3CPCZw3Un5EOsiD8IJ45ddiUFhKnFUq0LJ7tgDJIqyvipxwA');
  background-repeat: no-repeat;
  background-position: center left;
  background-attachment: fixed;
  height: 90vh;
`
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 20%;
  height: 25vh;
  border: 1px dotted grey;
  margin: 40px;
  padding: 20px
`
const TitleWrapper = styled.h2`
  color: #ff9800;
`

const ButtonWrapper = styled(Button)`
  margin-top: 10px;
  margin-bottom: 30px
`
const GoToSingUpButton = styled.p`
    &:hover {
        color: #ff7828
    }
`
class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {}
    }
  }

  goToRegistration = () => {
    this.props.goToSignUp()
  }
  saveInfo = (event) => {
    const { name, value } = event.target
    this.setState({ userInfo: { ...this.state.userInfo, [name]: value } })
  }
  submitLogin = (event) => {
    event.preventDefault();
    this.props.sendDataToApi(this.state.userInfo)
  }

  render() {
    return (
        <PageWrapper>
          <Header/>
          <ContentWrapper>
            <FormWrapper onSubmit={this.submitLogin}>
              <TitleWrapper>Bem Vindo, usuário!</TitleWrapper>
              <label><b>E-mail</b></label>
              <Input 
              type='text' 
              name='email' 
              onChange={this.saveInfo}
              >
              </Input>
              <label><b>Senha</b></label>
              <Input 
              type="password" 
              name='password' 
              onChange={this.saveInfo}
              >
              </Input>
              <ButtonWrapper
              type={onsubmit}
              variant="contained"
              >
              Entrar
              </ButtonWrapper>
            </FormWrapper>
            <GoToSingUpButton 
            onClick={this.goToRegistration}
            >
              <u>Ainda não tem cadastro? Clique aqui para cadastrar</u>
            </GoToSingUpButton>
          </ContentWrapper>
        </PageWrapper>
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

