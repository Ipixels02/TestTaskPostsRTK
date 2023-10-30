import React from 'react';
import {NavigateFunction, useNavigate, useParams} from "react-router-dom";
import {postAPI} from "../../features/QueryPosts/model/services/PostsService";

import cls from './postPage.module.scss';
import {RoutePath} from "../../shared/config/routeConfig/routeConfig";

export const PostPage = () => {
    const navigate: NavigateFunction = useNavigate();
    const params = useParams()

    const {data, isLoading, error} = postAPI.useFetchPostQuery(params.id!)

    const onClickBack = (()=> {
        navigate(RoutePath.main)
    })
    return (
        <div>
            {isLoading && <h3>Идет загрузка...</h3>}
            {error && <h3>Произошла ошибка при загрузке</h3>}
            <button onClick={onClickBack}>Назад</button>
            {data &&
                <>
                    <h1 className={cls.tit}>{data.title}</h1>
                    <p>{data.body}</p>
                </>
            }
        </div>
    );
};

