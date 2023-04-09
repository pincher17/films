import * as axios from 'axios';

const TOKEN = "XR49Z74-EYEMXHC-K3763BK-VPTYA9M"


const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1/',
    headers: {
        'accept': 'application/json',
        'X-API-KEY': 'XR49Z74-EYEMXHC-K3763BK-VPTYA9M',
      }
})

export const filmsApi = {
    getNewFilms(limit){
        return instance.get(`movie?field=rating.kp&search=6.5-10&field=year&search=2022&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1`).then(response =>{
            return response;
        })
    },
    getFilmById(id){
        return instance.get(`movie?search=${id}&field=id`).then(response =>{
            return response;
        })
    },
    getFilmSearch(query, page = 1){
        /* return instance.get(`movie?search=${query}&field=name&limit=10&isStrict=false&sortField=votes.imdb&sortType=-1&token=${TOKEN}`) */
        return instance.get(`movie?search=${query}&field=name&page=${page}&limit=10&isStrict=false&sortField[]=votes.kp&sortField[]=premiere.world&sortType[]=-1&sortType[]=-1`)
        .then(response =>{
            return response;
        })
    },
    getFilms(filters, page){
        return instance.get(`movie?${filters.selectedTypeOfMovies.map((item)=>`field[]=typeNumber&search[]=${item}&`).join('')}${filters.genre.length ? filters.genre.map((item)=>`field[]=genres.name&search[]=${item.value}&`).join(''):''}&field[]=year&search[]=${filters.year[0]}-${filters.year[1]}&field=rating.kp&search[]=${filters.rating[0]}-${filters.rating[1]}&sortField[]=year&sortType[]=${filters.sortByRelease}&limit=40&page=${page}&field=poster&search=!null`)
        /* return instance.get(`movie?field[]=genres.name&search[]=драма&field[]=year&search[]=${filters.year}&field=rating.kp&search[]=${filters.rating}&field[]=typeNumber&search[]=1&field[]=votes.kp&search[]=!null&sortField[]=year&sortType[]=${filters.sortByRelease}&limit=30&page=${page}&field=poster&search=!null&token=${TOKEN}`) */
        /* return instance.get(`movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=30&page=${page}&token=${TOKEN}`) */
        .then(response =>{
            return response;
        })
    },
    
} 

/* 
   https://api.kinopoisk.dev/movie?field[]=genres.name&search[]=драма&field[]=year&search[]=1960-2022&field=rating.kp&search[]=1-10&field=typeNumber&search=1&field=votes.kp&search=!null&sortField=year&sortType=-1&limit=30&page=1&token=XR49Z74-EYEMXHC-K3763BK-VPTYA9M
   https://api.kinopoisk.dev/movie?field[]=genres.name&search[]=драма&field[]=year&search[]=1960-2022&field=rating.kp&search[]=1-10&field[]=typeNumber&search[]=1&field[]=votes.kp&search[]=!null&sortField[]=year&sortType[]=-1&limit=30&page=1&token=XR49Z74-EYEMXHC-K3763BK-VPTYA9M 
   https://api.kinopoisk.dev/movie?field[]=genres.name&search[]=драма&field[]=year&search[]=1960-2022&field=rating.kp&search[]=5-10&limit=30&page=1&token=XR49Z74-EYEMXHC-K3763BK-VPTYA9M

   */
