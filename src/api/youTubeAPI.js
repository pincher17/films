import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCSWNoyP9wZPduchpRinILVy7zLgmd34xY',
    }
})

export const youtube = {
    getTrailer(nameFilm){
        return instance.get('/search',{
            params: {
                q: nameFilm
            }
        }).then(response =>{
            return response;
        })
    },
} 

