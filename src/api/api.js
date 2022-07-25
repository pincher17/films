import * as axios from 'axios';

const TOKEN = "XR49Z74-EYEMXHC-K3763BK-VPTYA9M"


const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/',
})

export const filmsApi = {
    getNewFilms(limit){
        return instance.get(`/movie?field=rating.kp&search=1-10&field=year&search=2022&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${TOKEN}`).then(response =>{
            return response;
        })
    },
    getUser(userId){
        return instance.get(`users/${userId}`).then(response =>{
           return response;
        })
    },
    getPosts(){
        return instance.get(`posts`).then(response =>{
            return response;
        })
    },
    getPostUser(userId){
        return instance.get(`posts?userId=${userId}`).then(response =>{
            return response;
        })
    },
} 

