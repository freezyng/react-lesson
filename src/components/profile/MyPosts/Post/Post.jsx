import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className="my_posts__item-wrap">
            <div className="my_posts__item">
                <img src="https://crazymemas.ru/wp-content/uploads/2019/05/29.png" alt="avatar" />
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