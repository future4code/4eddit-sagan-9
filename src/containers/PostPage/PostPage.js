import React, { Component } from 'react'
import Header from '../../Components/Header'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router/index'
import PostWrapper from '../../Components/PostWrapper'
import { createComment, voteForPost, voteForComment } from '../../Actions/index'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const LabelButton = styled.p`
  font-size: 12px;
  margin: -5px;
  padding: 0;
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    console.log(this.props.postData)
    this.props.createNewComment(this.state.newComment, this.props.postData.post.id)
    this.setState({newComment: ''})
  }

  voteUser = (vote, postId, voteDirection) => {
    if (vote === 'vote +1') {
        console.log(voteDirection)
        if(voteDirection === 1){
          console.log('true')
          vote = 0
        }
        else if(voteDirection === 0 || voteDirection === -1){
          console.log('false')
          vote = 1
        }
      console.log(vote)
      this.props.voteUserDirection(vote, postId)
      /* arrowUp: <ArrowDropUpIcon /> */
    } 
    else {
        console.log(voteDirection)
        if(voteDirection === -1){
          console.log('true')
          vote = 0
        }
        else if(voteDirection === 0 || voteDirection === 1){
          console.log('false')
          vote = -1
        }
        console.log(vote)
        this.props.voteUserDirection(vote, postId)
        /* arrowDown: <ArrowDropDownIcon /> */
    }
  }

  voteUserComment = (vote, postId, commentId, voteDirection) => {
    console.log(vote, postId, commentId, voteDirection)
    if (vote === 'vote +1') {
        console.log(voteDirection)
        if(voteDirection === 1){
          console.log('true')
          vote = 0
        }
        else if(voteDirection === 0 || voteDirection === -1){
          console.log('false')
          vote = 1
        }
      console.log(vote)
      this.props.commentVoteUserDirection(vote, postId, commentId)
      /* arrowUp: <ArrowDropUpIcon /> */
    } 
    // else {
    //     console.log(voteDirection)
    //     if(voteDirection === -1){
    //       console.log('true')
    //       vote = 0
    //     }
    //     else if(voteDirection === 0 || voteDirection === 1){
    //       console.log('false')
    //       vote = -1
    //     }
    //     console.log(vote)
    //     this.props.voteUserDirection(vote, postId)
    //     /* arrowDown: <ArrowDropDownIcon /> */
    // }
  }

  render() {
    let postDetails = ""
    if (this.props.postData) {
      postDetails = <div>
        <PostWrapper 
        post={this.props.postData.post}
        arrowUp= {<ArrowDropUpIcon/>}
        arrowDown= {<ArrowDropDownIcon />}
        votePlus={() => this.voteUser('vote +1', this.props.postData.post.id, this.props.postData.post.userVoteDirection)}
        voteMinus={() => this.voteUser('vote -1', this.props.postData.post.id, this.props.postData.post.userVoteDirection)} 
        />
        <textarea value={this.state.newComment} onChange={this.saveComment} />
        <button onClick={this.sendComment}>Enviar</button>
        {this.props.postData.post.comments.map((element, index) => {
          return (
            <div key={index}>
              <p><b>{element.username}</b></p>
              <p>{element.text}</p>
              <div>
              <ArrowDropUpIcon onClick={() => this.voteUserComment('vote +1', this.props.postData.post.id, element.id, element.userVoteDirection)}/>}
              <ArrowDropDownIcon onClick={() => this.voteUserComment('vote -1', this.props.postData.post.id, element.id, element.userVoteDirection)} />
            <p>{element.votesCount}</p>
            <p>{element.userVoteDirection}</p>
        </div>
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
        <InfoWrapper>
          {postDetails}
        </InfoWrapper>
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
    createNewComment: (comment, postId) => dispatch(createComment(comment, postId)),
    voteUserDirection: (vote, postId) => dispatch(voteForPost(vote, postId)),
    commentVoteUserDirection: (vote, postId, commentId) => dispatch(voteForComment(vote, postId, commentId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
