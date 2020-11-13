import MyPosts from './MyPosts.jsx';
import { addPostCreator } from '../../../redux/profile-reducer.js';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        myPostsMessages: state.profilePage.myPostsMessages,
        newPostText: state.profilePage.newPostText,
        myAvatarURL: state.profilePage.myAvatarURL
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newMyPost) => {
            dispatch(addPostCreator(newMyPost));
        }
    }
}


let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;