import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'bd5c94b0-d797-4410-aa88-27c2a38017e9'
    }
})

export const userApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    followOnUser(userId: string) {
        return instance.post(`follow/${userId}`)
    },

    unfollowOnUser(userId: string) {
        return instance.delete(`follow/${userId}`)
    },
}

export const profileApi = {
    setProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photoFile: File) {
        const formData =  new FormData()
        formData.append('image', photoFile)

        return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'} })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}


