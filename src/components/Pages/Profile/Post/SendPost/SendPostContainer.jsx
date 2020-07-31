import { addPost } from '../../../../../Redux/profile-page-reducer';
import SendPost from './SendPost';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    newTextArea: state.profilePage.inputArea
  }
};
const SendPostContainer = connect(mapStateToProps, {addPost})(SendPost);

export default SendPostContainer;