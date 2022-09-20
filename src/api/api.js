import * as axios from 'axios';

const TOKEN = "XR49Z74-EYEMXHC-K3763BK-VPTYA9M"


const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/',
})

export const filmsApi = {
    getNewFilms(limit){
        return instance.get(`movie?field=rating.kp&search=1-10&field=year&search=2022&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${TOKEN}`).then(response =>{
            return response;
        })
    },
    getFilmById(id){
        return instance.get(`movie?search=${id}&field=id&token=${TOKEN}`).then(response =>{
            return response;
        })
    },
    getFilmSearch(query, page = 1){
        /* return instance.get(`movie?search=${query}&field=name&limit=10&isStrict=false&sortField=votes.imdb&sortType=-1&token=${TOKEN}`) */
        return instance.get(`movie?search=${query}&field=name&page=${page}&limit=10&isStrict=false&sortField[]=votes.kp&sortField[]=premiere.world&sortType[]=-1&sortType[]=-1&token=${TOKEN}`)
        .then(response =>{
            return response;
        })
    },
    getFilms(filters, page){
        return instance.get(`movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=30&page=${page}&token=${TOKEN}`)
        .then(response =>{
            return response;
        })
    },
    
} 

