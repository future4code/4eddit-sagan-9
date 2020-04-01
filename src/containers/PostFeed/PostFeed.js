import React, { Component } from 'react'
import Header from '../../Components/Header'
import { connect } from 'react-redux'
import { getPostList, getPostDetails, voteForPost } from '../../Actions/'
import { routes } from '../Router/index'
import { push } from 'connected-react-router'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from 'styled-components'
import PostWrapper from '../../Components/PostWrapper'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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
      arrowUp: <ArrowDropUpIcon/>,
      arrowDown: <ArrowDropDownIcon />
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token')
    if (token === null) {
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

  render() {

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
          </IconButton>} />
        <button onClick={this.funcaoTeste}>teste</button>
        {this.props.getMyPosts.map(element => {
          return (
            <PostCard key={element.id} >
              <PostWrapper
                arrowUp= {<ArrowDropUpIcon/>}
                arrowDown= {<ArrowDropDownIcon />}
                seeDetails={() => this.goToPostDetails(element.id)} post={element}
                votePlus={() => this.voteUser('vote +1', element.id, element.userVoteDirection)}
                voteMinus={() => this.voteUser('vote -1', element.id, element.userVoteDirection)}
              />
            </PostCard>
          )
        })}

      </div>
    )
  }
}
{/* <ArrowDropUpIcon/>
<ArrowDropDownIcon /> */}
function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPostList()),
    goToPostInfo: (postId) => dispatch(getPostDetails(postId)),
    goToLogin: () => dispatch(push(routes.root)),
    voteUserDirection: (vote, postId) => dispatch(voteForPost(vote, postId))
  };
}

function mapStateToProps(state) {
  return {
    getMyPosts: state.posts.postList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed)