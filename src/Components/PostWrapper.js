import React from 'react'
import styled from 'styled-components'
import Comment from '@material-ui/icons/Comment'

const CommentsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 3vh
`
const ArrowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LikeAndCommentWrapper = styled.div`
    display: flex;
`

class PostWrapper extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div onClick={this.props.seeDetails}>
            <div><h3>{this.props.post.username}</h3></div>
            <div><p>{this.props.post.text}</p></div>
        </div>
        <div>
            <LikeAndCommentWrapper>
            <ArrowWrapper>
        <div 
          onClick={this.props.votePlus}>
          {this.props.arrowUp}
          {this.props.post.votesCount}
        </div>
        <div 
          onClick={this.props.voteMinus}>
          {this.props.arrowDown}
          {this.props.post.userVoteDirection}
        </div>
          </ArrowWrapper>
        <div>
        </div>
          </LikeAndCommentWrapper>
          <CommentsWrapper>
          <Comment onClick={this.props.seeDetails} />
          {this.props.post.commentsNumber}
          </CommentsWrapper>
        </div>
      </div>
    )
  }
}



export default PostWrapper