import React from 'react';
import Posts from '../Posts';
import MyPost from './MyPost';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    let post = state.profilePage.postsArr.map(m => <Posts message={m.message} likes={m.likes} id={m.id}/>);
    return {
        posts: post
    }
};
const MyPostContainer = connect(mapStateToProps)(MyPost)
export default MyPostContainer;
