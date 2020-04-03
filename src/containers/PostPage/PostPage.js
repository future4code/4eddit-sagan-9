import React, { Component } from 'react'
import Header from '../../Components/Header'
import PostWrapper from '../../Components/PostWrapper'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router/index'
import { createComment, voteForComment, voteForPostFromDetails } from '../../Actions/index'
import { IconButton, Paper, Typography, Button, TextField } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  margin-top: 20px;
`
const LabelButton = styled.div`
  font-size: 12px;
  margin: -5px;
  padding: 0;
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-image: url(https://previews.123rf.com/images/krekdm/krekdm1605/krekdm160500006/59277013-social-media-seamless-pattern-can-be-used-for-wallpaper-website-background-doodles-hand-drawn-vector.jpg)
  // background-image= url('')
  background-color: #e5e9ed
`
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
  color: #4f4f50;
`
const PaperWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 15px;
  width: 100%;
`
const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;

`
const VoteArrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 30px;
`
const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  width: 100%;
  border: 1px #ff7828 dotted;
`

class PostPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newComment: '',
      arrows: {
        up: '',
        down: ''
      },
      arrowsPost: {
        up: '',
        down: ''
      }
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
    }
    console.log(this.props.postData)
  }

  saveComment = (e) => {
    this.setState({
      newComment: e.target.value
    })
  }

  sendComment = () => {
    this.props.createNewComment(this.state.newComment, this.props.postData.post.id)
    this.setState({ newComment: '' })
  }

  voteUser = (vote, postId, voteDirection) => {
    if (vote === 'vote +1') {
      if (voteDirection === 1) {
        vote = 0
        this.setState({
          arrowsPost: {up: '', down: ''}
        })
      }
      else if (voteDirection === 0 || voteDirection === -1) {
        vote = 1
        this.setState({
          arrowsPost: {up: postId, down: ''}
        })
      }
      this.props.voteUserDirection(vote, postId)
    }
    else {
      if (voteDirection === -1) {
        vote = 0
        this.setState({
          arrowsPost: {up: '', down: ''}
        })
      }
      else if (voteDirection === 0 || voteDirection === 1) {
        vote = -1
        this.setState({
          arrowsPost: {up: '', down: postId}
        })
      }
      this.props.voteUserDirection(vote, postId)
    }
  }

  voteUserComment = (vote, postId, commentId, voteDirection) => {
    if (vote === 'vote +1') {
      console.log(commentId)
      if (voteDirection === 1) {
        vote = 0
        this.setState({
          arrows: { up: '', down: '' }
        })
      }
      else if (voteDirection === 0 || voteDirection === -1) {
        vote = 1
        this.setState({
          arrows: { up: commentId, down: '' }
        })
      }
      console.log(vote)
      this.props.commentVoteUserDirection(vote, postId, commentId)
    }
    else {
      if (voteDirection === -1) {
        vote = 0
        this.setState({
          arrows: { up: '', down: '' }
        })
      }
      else if (voteDirection === 0 || voteDirection === 1) {
        vote = -1
        this.setState({
          arrows: { up: '', down: commentId }
        })
      }
      this.props.commentVoteUserDirection(vote, postId, commentId)
    }
  }


  render() {
    let postDetails = ""
    if (this.props.postData) {
      let arrowUp = this.state.arrowsPost.up === this.props.postData.post.id ?
              <ArrowDropUpIcon color='primary'/> : <ArrowDropUpIcon/>

      let arrowDown = this.state.arrowsPost.down === this.props.postData.post.id ?
              <ArrowDropDownIcon color='primary' /> : <ArrowDropDownIcon/>
      postDetails =
        <PageWrapper>
          <PostCard>
            <PostWrapper
              post={this.props.postData.post}
              arrowUp={arrowUp}
              arrowDown={arrowDown}
              votePlus={() => this.voteUser('vote +1', this.props.postData.post.id, this.props.postData.post.userVoteDirection)}
              voteMinus={() => this.voteUser('vote -1', this.props.postData.post.id, this.props.postData.post.userVoteDirection)}
            />
          </PostCard>

          <PaperWrapper elevation={10}>
            <FormWrapper onSubmit={this.sendComment}>
              <TextField
                label="Comentar"
                style={{ margin: 12 }}
                onChange={this.saveComment}
                value={this.state.newComment}
                name='text'
                type='text'
                required
                multiline={true}
                variant='outlined'
              />
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type={onsubmit}
                >
                  enviar
                </Button>
              </div>
            </FormWrapper>
          </PaperWrapper>

          {this.props.postData.post.comments.map((element, index) => {
            console.log(element)
            let arrowUp = this.state.arrows.up === element.id ?
              <ArrowDropUpIcon color='primary' onClick={() => this.voteUserComment('vote +1', this.props.postData.post.id, element.id, element.userVoteDirection)} /> : <ArrowDropUpIcon onClick={() => this.voteUserComment('vote +1', this.props.postData.post.id, element.id, element.userVoteDirection)} />

            let arrowDown = this.state.arrows.down === element.id ?
              <ArrowDropDownIcon color='primary' onClick={() => this.voteUserComment('vote -1', this.props.postData.post.id, element.id, element.userVoteDirection)} /> : <ArrowDropDownIcon onClick={() => this.voteUserComment('vote -1', this.props.postData.post.id, element.id, element.userVoteDirection)} />

            return (
              <PaperWrapper key={index} elevation={10}>
                <div>
                  <Typography display='inline' variant="body2"  >
                    <Typography gutterBottom variant="h6" color='primary' display='inline'>{`${element.username} `}</Typography>
                      respondeu:
                    </Typography>
                </div>
                <CommentWrapper>
                  <VoteArrowWrapper>

                    {arrowUp}
                    {element.votesCount}
                    {arrowDown}

                    {/* <PostWrapper
                      arrowUp={arrowUp}
                      arrowDown={arrowDown}
                      // seeDetails={() => this.goToPostDetails(element.id)} post={element}
                      votePlus={() => this.voteUserComment('vote +1', element.id, element.userVoteDirection)}
                      voteMinus={() => this.voteUserComment('vote -1', element.id, element.userVoteDirection)}

                    /> */}

                    {/* <ArrowDropUpIcon onClick={() => this.voteUserComment('vote +1', this.props.postData.post.id, element.id, element.userVoteDirection)} />
                    <p>{element.votesCount}</p>
                    <ArrowDropDownIcon onClick={() => this.voteUserComment('vote -1', this.props.postData.post.id, element.id, element.userVoteDirection)} /> */}


                  </VoteArrowWrapper>
                  <div>{element.text}</div>
                </CommentWrapper>

              </PaperWrapper>
            )
          })}
        </PageWrapper>
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
    voteUserDirection: (vote, postId) => dispatch(voteForPostFromDetails(vote, postId)),
    commentVoteUserDirection: (vote, postId, commentId) => dispatch(voteForComment(vote, postId, commentId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
