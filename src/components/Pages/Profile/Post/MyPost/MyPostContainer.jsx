import React from 'react';
import Posts from '../Posts';
import MyPost from './MyPost';
import { connect } from 'react-redux';

const MyPostContainer = (props) => {
    return (
        <MyPost {...props} />
    )
}
let mapStateToProps = (state) => {
    let post = state.profilePage.postsArr.map(m => <Posts message={m.message} likes={m.likes} key={m.id} />);
    return {
        posts: post
    }
};
export default connect(mapStateToProps)(MyPostContainer);
