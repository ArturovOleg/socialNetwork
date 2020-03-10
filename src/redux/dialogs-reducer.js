const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Andrew"
    },
    {
      id: 2,
      name: "Kirill"
    },
    {
      id: 3,
      name: "Maksim"
    },
    {
      id: 4,
      name: "Ignat"
    },
    {
      id: 5,
      name: "Valera"
    },
    {
      id: 6,
      name: "Andrew"
    }
  ],
  messages: [
    {
      id: 1,
      message: "Some text 1"
    },
    {
      id: 2,
      message: "Some text 2"
    },
    {
      id: 3,
      message: "Some text 3"
    },
    {
      id: 4,
      message: "Some text 4"
    }
  ],
  defauleMessageText: "Hello"
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.defauleMessageText
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
        defauleMessageText: ''
      }
    case UPDATE_MESSAGE_TEXT: 
      return {
        ...state,
        defauleMessageText: action.text
      }
    default :
    return state;
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  text: text
})

export default dialogsReducer;