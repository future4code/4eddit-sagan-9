import React from 'react'
import styled from 'styled-components'
import Comment from '@material-ui/icons/Comment'

const CommentsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 3vh
`

class PostWrapper extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div><h3>{this.props.post.username}</h3></div>
                <div><p>{this.props.post.text}</p></div>
                <div>
                    <div>
                    {this.props.post.votesCount}
                    <br/>
                    {this.props.post.userVoteDirection}
                    </div>
                    <CommentsWrapper>
                    <Comment/>
                    {this.props.post.commentsNumber}
                    </CommentsWrapper>
                </div>
            </div>
        )
    }
}

export default PostWrapper;