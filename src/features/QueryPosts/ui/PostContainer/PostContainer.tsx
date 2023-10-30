import React from 'react';
import {postAPI} from "../../../../features/QueryPosts/model/services/PostsService";
import {Post} from "../../../../entities/Post/ui/Post";

export const PostContainer = () => {
    const {data, isLoading, error} = postAPI.useFetchAllPostsQuery(5)
    return (
        <div>
            <div className="post__list">
                {isLoading && <h3>Идет загрузка...</h3>}
                {error && <h3>Произошла ошибка при загрузке</h3>}
                {data && data.map(post =>
                    <Post key={post.id} post={post}/>
                )}
            </div>
        </div>
    );
};
