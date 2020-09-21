import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "9edd4cba-6199-4437-97ac-0c592ce7685a"
    }
}
)

const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
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