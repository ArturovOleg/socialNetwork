import NewPost from "./NewPost";
import {
  addPostActionCreator,
  updatePostTextActionCreator
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePageData.postsData,
    newPostText: state.profilePageData.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addPostActionCreator())
    },

    onPostUpdate: (text) => {
      dispatch(updatePostTextActionCreator(text))
    }
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;
