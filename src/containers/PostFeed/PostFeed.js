import React, { Component } from 'react'
import Header from '../../Components/Header'
import { connect } from 'react-redux'
import { getPostList, getPostDetails } from '../../Actions/'

const array = [1, 2, 3, 4, 5, 6]

class PostFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
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

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.funcaoTeste}>teste</button>
        {this.props.getMyPosts.map(element => {
          return ( 
            <div onClick={() => this.goToPostDetails(element.id)} key={element.id} >
              <p>{element.text}</p>
            </div>
          )
        })}
          
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPostList()),
    goToPostInfo:(postId) => dispatch(getPostDetails(postId))
  };
}

function mapStateToProps(state) {
  return {
    getMyPosts: state.posts.postList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed)