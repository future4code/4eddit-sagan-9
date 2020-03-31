import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from 'styled-components'
import { routes } from '../containers/Router'

const Logo = styled.img`
height: 80px;
`
const DivWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100vw;
height: auto;
`
const ButtonBar = styled.div`
  display: flex;
  margin: 10px;
`
const logoUrl = 'https://user-images.githubusercontent.com/56808066/77929693-58d5ac00-7280-11ea-88df-ff8e6a32f424.jpg'

class PrimarySearchAppBar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <DivWrapper>
              <Logo src={logoUrl}></Logo>
              <ButtonBar>
                {this.props.logOutButton}
              </ButtonBar>
            </DivWrapper>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default PrimarySearchAppBar;


