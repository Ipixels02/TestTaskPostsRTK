import React from 'react';
import {NavigateFunction, useNavigate, useParams} from "react-router-dom";
import {postAPI} from "../../features/QueryPosts/model/services/PostsService";

import cls from './postPage.module.scss';

export const PostPage = () => {
    const navigate: NavigateFunction = useNavigate();
    const params = useParams()
    console.log(params)

    const {data, isLoading, error} = postAPI.useFetchPostQuery(params.id!)
    console.log(data)
    return (
        <div>
            <button onClick={() => navigate('/')}>Назад</button>
            {data &&
                <>
                    <h1 className={cls.tit}>{data.title}</h1>
                    <p>{data.body}</p>
                </>
            }
        </div>
    );
};

