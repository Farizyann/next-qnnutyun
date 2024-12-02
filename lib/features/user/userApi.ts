import axios from "axios"

export const getUsersApi = async () => {
    const { data } = await axios.get('https://dummyjson.com/users');
    return data.users;
}

export const getUserByIdApi = async (id: number) => {
    const { data } = await axios.get('https://dummyjson.com/users/' + id)
    return data
}

export const createUserApi = async (obj: IUser) => {
    const { data } = await axios.post('https://dummyjson.com/users/add', obj)
    return data
}

export const updateUserApi = async ({ id, obj }: { id: number, obj: IUser }) => {
    const data = await axios.put('https://dummyjson.com/users/' + id, obj)
    return data
}

export const deleteUserApi = async (id: number) => {
    const { data } = await axios.delete('https://dummyjson.com/users/' + id)
    return data
}