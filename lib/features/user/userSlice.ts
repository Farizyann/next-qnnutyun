import { createAppSlice } from "@/lib/createAppSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { create } from "domain";
import { createUserApi, deleteUserApi, getUserByIdApi, getUsersApi, updateUserApi } from "./userApi";

interface IState {
    users: IUser[]
    user: IUser
}
const initialState: IState = {
    users: [],
    user: {} as IUser
}
export const userSlice = createAppSlice({
    name: 'user',
    initialState,
    reducers: (create) => ({
        getUsersData: create.asyncThunk(
            async () => {
                return await getUsersApi()
            }, {
            fulfilled: (state, action) => {
                state.users = action.payload
            }
        }
        ),
        getUserByIdData: create.asyncThunk(
            async (id: number) => {
                return await getUserByIdApi(id)
            }, {
            fulfilled: (state, action) => {
                state.user = action.payload
            }
        }
        ),
        createUserData: create.asyncThunk(
            async (obj: IUser) => {
                return await createUserApi(obj)
            }, {
            fulfilled: (state, action) => {
                state.users = action.payload
            }
        }
        ),
        updateUserData: create.asyncThunk(
            async ({ id, obj }: { id: number, obj: IUser }) => {
                return await updateUserApi({ id, obj })
            }, {
            fulfilled: (state, action: any) => {
                state.user = action.payload
            }
        }
        ),
        deleteUserData: create.asyncThunk(
            async (id: number) => {
                return await deleteUserApi(id)
            }
        )
    }),
    selectors:{
        selectUsers: (app) => app.users,
        selectUser: (app) => app.user
    }
})

export const {getUserByIdData, getUsersData,createUserData,updateUserData,deleteUserData} =userSlice.actions
export const {selectUser,selectUsers} =userSlice.selectors
