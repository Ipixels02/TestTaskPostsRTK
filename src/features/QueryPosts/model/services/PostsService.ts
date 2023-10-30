import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PostSchema} from "features/QueryPosts/model/types/PostSchema";


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<PostSchema[], number>({
            query: (limit: number = 5) => ({
                url: `/posts`,
                params: {
                    limit: limit
                }
            })
        }),
        fetchPost: build.query<PostSchema, string>({
            query: (postId) => ({
                url: `/posts/${postId}`,
            })
        }),
    })
})