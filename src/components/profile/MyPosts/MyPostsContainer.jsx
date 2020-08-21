import MyPosts from './MyPosts.jsx';
import { addPostCreator, upDateNewMyPostTextCreator } from '../../../redux/profile-reducer.js';
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
        addPost: () => {
            dispatch(addPostCreator());
        },
        upDateNewMyPostText: (text) => {
            dispatch(upDateNewMyPostTextCreator(text));
        }
    }
}


let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;