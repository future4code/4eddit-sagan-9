import { CardActions } from "@material-ui/core"

const initialState = {
  postList: [],
  postChoose: ""
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ POSTS':
      console.log(action.payload.posts)
      return {
        ...state, postList: action.payload.posts
      }
    case 'SEND_ID':
      console.log(action.payload.postInfo)
      return {
        ...state, postChoose: action.payload.postInfo
      }
    // case 'GET_ TRIPS_DETAILS':
    //   return {
    //     ...state, tripDetails: action.payload.tripDetails
    //   }
    default:
      return state
  }
}

export default posts
