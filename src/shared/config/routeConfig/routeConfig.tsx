import { type RouteProps } from 'react-router-dom'
import { MainPage } from '../../../pages/MainPage/MainPage'
import {PostPage} from "../../../pages/PostPage/PostPage";

export enum AppRoutes {
    MAIN = 'main',
    POST = 'post'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.POST]: '/posts/:id',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.POST]: {
        path: RoutePath.post,
        element: <PostPage/>
    }
}
