import React from 'react'
import axios from 'axios'
import { routes } from '../containers/Router/index';
import { push } from "connected-react-router";

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/fourEddit'

export const showPosts = (posts) => {
	return {
		type: 'GET_ POSTS',
		payload: {
			posts
				}
	}
}

export const sendID = (postInfo) => {
  return {
    type: 'SEND_ID',
      payload: {
        postInfo
      }
  }
}


export const newUser = (userData) => async (dispatch) => {
  console.log(userData)
  try {
    const result = await axios.post(`${baseUrl}/signup`,
      userData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    console.log(result.data)
    dispatch(push(routes.postFeed))
  } catch (error) {
    console.log(error)
  }
}

export const setLogin = (userInfo) => async (dispatch) => {
  console.log(userInfo)
  try {
    const result = await axios.post(`${baseUrl}/login`,
      userInfo,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    console.log(result.data)

    const token = result.data.token
    console.log(token)
    window.localStorage.setItem("token", token)    

    dispatch(push(routes.postFeed))
  } catch (error) {
    console.log(error)
  }
}

export const getPostList = () => async (dispatch) => {
  console.log('teste')
  const token = window.localStorage.getItem('token')
  try {
    const result = await axios.get(`${baseUrl}/posts`,
      {
        headers: {
          'Content-Type': 'application/json',
          auth: token
        }
      }      
    )
    console.log(result.data.posts)
    dispatch(showPosts(result.data.posts))
  } catch (error) {
    console.log(error)
  }
}

export const getPostDetails = (postId) => async (dispatch) => {
  console.log('teste')
  const token = window.localStorage.getItem('token')
  try{
    const result = await axios.get(`${baseUrl}/posts/${postId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          auth: token
        }
      }      
    )

    console.log(result.data)
    dispatch (sendID(result.data))
    dispatch(push(routes.postDetails))
  }catch (error) {
    console.log(error)
  }
}




