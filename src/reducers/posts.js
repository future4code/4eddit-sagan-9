const initialState = {
  postList: []
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ POSTS':
      console.log(action.payload.posts)
      return {
        ...state, postList: action.payload.posts
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
