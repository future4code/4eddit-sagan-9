import React, { Component } from 'react'
import Header from '../../Components/Header'
import { connect } from 'react-redux'
import { getPostList, getPostDetails } from '../../Actions/'
import {routes} from '../Router/index'
import {push} from 'connected-react-router'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from 'styled-components'
import PostWrapper from '../../Components/PostWrapper'

const LabelButton = styled.p`
  font-size: 12px;
  margin: -5px;
  padding: 0;
`

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black
`

class PostFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token')
        if(token === null){
            this.props.goToLogin()
            console.log(token)
        }
        this.props.getPosts()
    console.log(this.props.getMyPosts)
  }

  funcaoTeste = () => {
    console.log(this.props.getMyPosts)
  }

  goToPostDetails = (postId) => {
    this.props.goToPostInfo(postId)
    console.log('oi')
  }

  setLogout = () => {
    this.props.goToLogin()
    localStorage.clear()
  }

  render() {
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
        </IconButton>} />
        <button onClick={this.funcaoTeste}>teste</button>
        {this.props.getMyPosts.map(element => {
          return ( 
            <PostCard onClick={() => this.goToPostDetails(element.id)} key={element.id} >
              <PostWrapper post={element}/>
            </PostCard>
          )
        })}
          
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPostList()),
    goToPostInfo:(postId) => dispatch(getPostDetails(postId)),
    goToLogin: () => dispatch(push(routes.root))
  };
}

function mapStateToProps(state) {
  return {
    getMyPosts: state.posts.postList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed)