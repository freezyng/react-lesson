import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className="my_posts__item-wrap">
            <div className="my_posts__item">
                <div className="my_posts__avatar">
                    <img src={props.myAvatarURL} alt="avatar" />
                </div>
                <div className="post_message">
                    {props.message}
                </div>
            </div>
            <div className="post_likes">
                <div className="likes">
                    нравится {props.likes}
                </div>
            </div>
        </div>
    );
}

export default Post;