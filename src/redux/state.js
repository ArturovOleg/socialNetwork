import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
  _state: {
    dialogPageData: {
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
    },
    profilePageData: {
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
  },

  getState() {
    return this._state;
  },

  _callSubsriber() {},

  dispatch(action) {
    this._state.profilePageData = profileReducer(this._state.profilePageData, action);
    this._state.dialogPageData = dialogsReducer(this._state.dialogPageData, action);
    this._callSubsriber(this._state);
  },

  subscribe(observer) {
    this._callSubsriber = observer;
  }
};

window.store = store;

export default store;
