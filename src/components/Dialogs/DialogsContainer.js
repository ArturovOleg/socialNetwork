import Dialogs from './Dialogs'
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPageData.dialogsData,
    messages: state.dialogPageData.messages,
    defaultMessageText: state.dialogPageData.defauleMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (text) => {
      dispatch(updateMessageTextActionCreator(text))
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;