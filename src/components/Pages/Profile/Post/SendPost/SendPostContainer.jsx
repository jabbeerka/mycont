import {addPostActionCreator, changeNewInputActionCreator} from '../../../../../Redux/profile-page-reducer';
import SendPost from './SendPost';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    newTextArea: state.profilePage.inputArea
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    newInput: (text) => {
      let action = changeNewInputActionCreator(text)
      dispatch(action);
    },
    newPost: ()=> {
      let action = addPostActionCreator();
      dispatch(action)
    }
  }
}
const SendPostContainer = connect(mapStateToProps, mapDispatchToProps)(SendPost);

export default SendPostContainer;