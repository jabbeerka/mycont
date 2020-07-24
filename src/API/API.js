import * as axios from 'axios';

let request =  axios.create ({
    baseURL : "https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers: {"API-KEY": "91d62374-c2f1-4539-a2e2-f40791faea06"}

})
export const getRequestAPI = (currentPage , pageSize) => {
    return request.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {return response.data})
}
export const followRequest = (userId) => {
    return request.post(`follow/${userId}`).then(response => {
            return response.data
        })
}
export const unfollowRequest = (userId) => {
    return request.delete(`follow/${userId}`).then(response => {
            return response.data
        })
}
export const authRequestAPI = () => {
    return request.get(`auth/me`).then(response => {return response.data})
}
export const getProfileRequestAPI = (userId) => {
    return request.get(`profile/${userId}`).then(response => {return response.data})
}