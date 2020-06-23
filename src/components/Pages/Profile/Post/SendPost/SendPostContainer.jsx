import React from 'react';
import {addPostActionCreator, changeNewInputActionCreator} from '../../../../../Redux/profile-page-reducer';
import SendPost from './SendPost';
import storeContext from '../../../../../Redux/store-context';
// import { connect } from 'react-redux';



const SendPostContainer = () => {
    return (
      <storeContext.Consumer>
      {(store) => {
        let state = store.getState(),
          newTextArea = state.profilePage.inputArea;
    
        let addNewPost = () => {
          store.dispatch(addPostActionCreator());
        }
        let changeInput = (text) =>  {
        store.dispatch(changeNewInputActionCreator(text));
        }
          return (
            <SendPost 
              addPostActionCreator= {addNewPost} 
              changeNewInput={changeInput} 
              newTextArea={newTextArea} 
            />
        )
      }
    }
      
      </storeContext.Consumer>
    )
    
}
// let mapStateToProps = (state) => {
//       newTextArea = state.profilePage.inputArea;
//   return {
//     newTextArea: {newTextArea}
//   }
// };
// let mapDispatchToProps = (dispatch) => {
//   let addNewPost = () => {
//     dispatch(addPostActionCreator());
//   };
//   let changeInput = (text) =>  {
//     dispatch(changeNewInputActionCreator(text));
//   };
//   return {
//     addPostActionCreator: {addNewPost},
//     changeNewInput: {changeInput}
//   }
// }
// const SendPostContainer = connect(mapStateToProps, mapDispatchToProps)(SendPost);

export default SendPostContainer;