import { createAppSlice } from "@/lib/createAppSlice";

import { createPostApi, deletePostApi, getPostApi, getPostByIdApi, getPostByUserIdApi, searchPostApi, updatePostApi } from "./postApi";

interface IState {
    posts: IPost[]
    post: IPost
}
const initialState: IState = {
    posts: [],
    post: {} as IPost
}
export const postSlice = createAppSlice({
    name: 'post',
    initialState,
    reducers: (create) => ({
        getPostData: create.asyncThunk(
            async () => {
                return await getPostApi()
            }, {
            fulfilled: (state, action) => {
                state.posts = action.payload
            }
        }
        ),
        getPostByIdData: create.asyncThunk(
            async (id: number) => {
                return await getPostByIdApi(id)
            }, {
            fulfilled: (state, action) => {
                state.post = action.payload
            }
        }
        ),
        getPostByUserIdData: create.asyncThunk(
            async (id: number) => {
                return await getPostByUserIdApi(id)
            }, {
            fulfilled: (state, action) => {
                state.posts = action.payload
            }
        }
        ),
        createPostData: create.asyncThunk(
            async ( obj : IPost ) => {
                return await createPostApi( obj )
            }, {
            fulfilled: (state, action: any) => {
                state.post = action.payload
            }
        }
        ),
        updatePostData: create.asyncThunk(
            async ( { id, obj }: { id: number, obj: IPost }) => {
                return await updatePostApi({id, obj})
            }, {
            fulfilled: (state, action: any) => {
                state.post   = action.payload
            }
        }
        ),
        deletePostData: create.asyncThunk(
            async (id: number) => {
                return await deletePostApi(id)
            }
        ),
        searchPostData: create.asyncThunk(
            async (query: string) => {
                return await searchPostApi(query);
            }, {
            fulfilled: (state, action) => {
                state.post = action.payload;

            },
        })
    }),
    selectors:{
        selectPosts: (app) => app.posts,
        selectPost: (app) => app.post
    }
})

export const {getPostByIdData, getPostByUserIdData,getPostData,createPostData,updatePostData,deletePostData} =postSlice.actions
export const {selectPosts,selectPost} =postSlice.selectors
