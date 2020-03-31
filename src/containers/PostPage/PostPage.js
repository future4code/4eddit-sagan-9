import React, { Component } from 'react'
import Header from '../../Components/Header'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'
import {routes} from '../Router/index' 

const LabelButton = styled.p`
  font-size: 12px;
  margin: -5px;
  padding: 0;
`

class PostPage extends Component {

  setLogout = () => {
    this.props.goToLogin()
    localStorage.clear()
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token')
        if(token === null){
            this.props.goToLogin()
            console.log(token)
        }
    console.log(this.props.postData.post)
  }

  render() {
    let postDetails = ""
    if (this.props.postData){
      postDetails = <div>
                      <p>{this.props.postData.post.text}</p><textarea/>
                    </div>
    }
    else{
      postDetails = "Por favor selecione um post"
    }
    return (
      <div>
        <Header
          logOutButton = {<IconButton
            onClick={this.setLogout}
            color="inherit"
          >
            <div>
              <AccountCircle />
              <LabelButton>Logout</LabelButton>
            </div>
          </IconButton>}
        />
        {postDetails}
      </div>
  )
}
}

function mapStateToProps(state) {
  return {
    postData: state.posts.postChoose
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goToLogin: () => dispatch(push(routes.root))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
