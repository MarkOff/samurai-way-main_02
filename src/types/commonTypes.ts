export type PhotosType ={
    small: string, large: string
}

export type PostType = {
    id: string
    message: string
    counterLike: string
}

export type UserProfileType = {
    userId: number,
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        facebook: null | string,
        website: null | string,
        vk: null | string,
        twitter: null | string,
        instagram: null | string,
        youtube: null | string,
        github: null | string,
        mainLink: null | string
    },
    photos: PhotosType
}

export type DialogType = {
    id: string
    name: string
    ava: string
}

export type MessageType = {
    id: string
    message: string
}

export type UserType = {
    id: string
    name: string
    status: string
    photos: PhotosType
    uniqueUrlName: string
    followed: boolean
    location: { city: string, country: string }
}

export type FriendsType = {
    id: string
    name: string
    ava: string
}