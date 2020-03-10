const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
  postsData: [
    {
      id: 1,
      post: "Some Text 1",
      likesCount: 2
    },
    {
      id: 2,
      post: "Some Text 2",
      likesCount: 1
    },
    {
      id: 3,
      post: "Some Text 3",
      likesCount: 2
    },
    {
      id: 4,
      post: "Some Text 4",
      likesCount: 5
    }
  ],
  newPostText: "Your post message"
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: 
      let newPost = {
        id: 5,
        post: state.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        postsData: [newPost,...state.postsData],
        newPostText: ''
      };
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      };
    default: 
      return state;  
  }

}

export const addPostActionCreator = () => ({type: ADD_POST}) 

export const updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text: text
})

export default profileReducer;