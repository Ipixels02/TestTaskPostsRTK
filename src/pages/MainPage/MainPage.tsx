import React, {FC} from "react";
import cls from './mainPage.module.scss';
import {PostContainer} from "../../features/QueryPosts/ui/PostContainer/PostContainer";

export const MainPage: FC = () => {

    return (
        <>
            <div className={cls.Page}>
                <PostContainer />
            </div>
        </>
    )
}