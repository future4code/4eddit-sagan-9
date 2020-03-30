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
const LabelButton = styled.p`
  font-size: 12px;
  margin: -5px;
  padding: 0;
`
const logoUrl = 'https://user-images.githubusercontent.com/56808066/77929693-58d5ac00-7280-11ea-88df-ff8e6a32f424.jpg'

class PrimarySearchAppBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <DivWrapper>
              <Logo onClick={this.props.goToHomePage} src={logoUrl}></Logo>

              <ButtonBar>
                <IconButton
                  onClick={this.props.goToTripsList}
                  color="inherit"
                >
                  <div>
                    <AccountCircle />
                    <LabelButton>login</LabelButton>
                  </div>
                </IconButton>
              </ButtonBar>

            </DivWrapper>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    goToHomePage: () => dispatch(push(routes.root)),
  };
}

export default connect(null, mapDispatchToProps)(PrimarySearchAppBar);


