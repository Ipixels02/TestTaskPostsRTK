import React, {FC} from 'react';
import {PostSchema} from "features/QueryPosts/model/types/PostSchema";
import cls from './Post.module.scss';
import {NavigateFunction, useNavigate} from "react-router-dom";


interface PostItemProps {
    post: PostSchema
}

export const Post:FC<PostItemProps> = ({post}) => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className={cls.post}>
            <h3 className={cls.title}>
                {post.id + ' '}
                {post.title}
            </h3>
            <div className={cls.text}>
                {post.body + ' '}
                    <div>
                        <button onClick={() => navigate(`/posts/${post.id}`, { replace: true })}>Посмотреть</button>
                    </div>
            </div>
        </div>
    );
};