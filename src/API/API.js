import * as axios from 'axios';

let request =  axios.create ({
    baseURL : "https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers: {"API-KEY": "91d62374-c2f1-4539-a2e2-f40791faea06"}

})
export const profileAPI = {
    usersAPI (currentPage , pageSize) {
        return request.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
            return response.data
            })
        },
        getProfile  (userId) {
            return request.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
        },
        unfollowRequest (userId) {
            return request.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
        },
        followRequest (userId) {
            return request.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
        },
        getStatus (userId) {
            return request.get(`profile/status/${userId}`)
        },
        updateStatus (status) {
            return request.put(`profile/status`, {status: status})
        },
        userLogin (email, password, rememberMe = false) {
            return request.post(`/auth/login`, {email, password, rememberMe})
        },
        userLogout () {
            return request.delete(`/auth/login`)
        },
        sendPhoto (file) {
            const formData = new FormData();
            formData.append("Image", file);
            return request.put(`/profile/photo`, formData, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            })
        }
}
export const authRequestAPI = () => {
    return request.get(`auth/me`)
    .then(response => {
        return response.data
        })
    }