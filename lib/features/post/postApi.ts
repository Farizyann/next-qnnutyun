import axios from "axios"

export const getPostApi = async () => {
    const { data } = await axios.get('https://dummyjson.com/posts')
    return data.posts
}

export const getPostByIdApi = async (id: number) => {
    const { data } = await axios.get('https://dummyjson.com/posts/' + id)
    return data
}

export const getPostByUserIdApi = async (id: number) => {
    const { data } = await axios.get('https://dummyjson.com/posts/user/' + id)
    return data.posts
}

export const createPostApi = async (obj: IPost) => {
    const { data } = await axios.post('https://dummyjson.com/posts/add', obj)
    return data
}

export const searchPostApi = async (query: string) => {
    const { data } = await axios.get(`https://dummyjson.com/posts/search?q=${query}`)
    return data.posts
}

export const updatePostApi = async ({ id, obj }: { id: number, obj: IPost }) => {
    const { data } = await axios.put('https://dummyjson.com/posts/' + id, obj)
}

export const deletePostApi = async (id: number) => {
    const { data } = await axios.delete('https://dummyjson.com/posts/' + id)
}