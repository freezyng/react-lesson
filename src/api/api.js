import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "4d82148f-be0d-4efa-958f-b7c919a9c62e"
    }
}
)

const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true,})
    .then(response => response.data);
}

const followedDelete = (id) => {
    return instance.delete(`follow/${id}`)
    .then(response => response.data);
}

const followedPost = (id) => {
    return instance.post(`follow/${id}`)
    .then(response => response.data);
}




export {getUsers, followedDelete, followedPost};