import React, { Component } from 'react'
import Header from '../../Components/Header'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router/index'
import PostWrapper from '../../Components/PostWrapper'
import { createComment } from '../../Actions/index'

const LabelButton = styled.p`
  font-size: 12px;
  margin: -5px;
  padding: 0;
`

class PostPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newComment: ''
    }
  }

  setLogout = () => {
    this.props.goToLogin()
    localStorage.clear()
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token')
    if (token === null) {
      this.props.goToLogin()
      console.log(token)
    }
  }

  saveComment = (e) => {
    this.setState({
      newComment: e.target.value
    })
    console.log(this.state.newComment)
  }

  sendComment = () => {
    this.props.createNewComment(this.state.newComment, this.props.postData.post.id)
    this.setState({newComment: ''})
  }

  render() {
    let postDetails = ""
    if (this.props.postData) {
      postDetails = <div>
        <PostWrapper post={this.props.postData.post} /><textarea value={this.state.newComment} onChange={this.saveComment} />
        <button onClick={this.sendComment}>Enviar</button>
        {this.props.postData.post.comments.map((element, index) => {
          return (
            <div key={index}>
              <p><b>{element.username}</b></p>
              <p>{element.text}</p>
            </div>
          )
        })}
      </div>
    }
    else {
      this.props.goToPostFeed()
    }
    return (
      <div>
        <Header
          logOutButton={<IconButton
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
    goToLogin: () => dispatch(push(routes.root)),
    goToPostFeed: () => dispatch(push(routes.postFeed)),
    createNewComment: (comment, postId) => dispatch(createComment(comment, postId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
