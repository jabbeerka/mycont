import React from 'react';
import Posts from '../Posts';
import MyPost from './MyPost';
// import store from '../../../../../Redux/redux-store';
import storeContext from '../../../../../Redux/store-context';
// import { connect } from 'react-redux';


const MyPostContainer = () => {
    return (
        <storeContext.Consumer>
            {(store)=> {
                let state = store.getState();
                let post = state.profilePage.postsArr.map(m => 
                    <Posts message={m.message} likes={m.likes}
                    />
                )
                return (
                    <MyPost posts={post}/>
                )
            }}
            
        </storeContext.Consumer>
    )
}
// let mapStateToProps = (state) => {
//     // let state = store.getState();
//     let post = state.profilePage.postsArr.map(m => <Posts message={m.message} likes={m.likes}/>);
//     return {
//         posts: {post}
//     }
// };
// const MyPostContainer = connect(mapStateToProps)(MyPost)
export default MyPostContainer;
