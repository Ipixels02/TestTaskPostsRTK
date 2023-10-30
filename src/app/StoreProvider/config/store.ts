import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {postAPI} from "../../../features/QueryPosts/model/services/PostsService";

const rootReducer = combineReducers({
    [postAPI.reducerPath]: postAPI.reducer
})

export function createReduxStore () {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']

