import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getFilmById } from '../../store/filmInfoSlice';
import { getTrailerThunk } from '../../store/youtubeSlice';
import Layout from '../layout/Layout';
import LayoutFilm from '../layoutFilm/LayoutFilm';
import s from './FilmPage.module.css';

const FilmTrailer2 = (props) =>{
  const dispatch = useDispatch()
  let { id } = useParams();
  /* const navigate = useNavigate() */
  const filmInfoId = useSelector(state => state.filmInfo.info)
  const {preview, countries, genres, ratingKinopoisk} = useSelector(state => state.filmInfo)
  /* const countries = useSelector(state => state.filmInfo.countries) */
  /* const dataKinopoisk = {'data-kinopoisk': `${id}`} */
  const refDataFilm = useRef(null);
  useEffect(() => {
  dispatch(getFilmById(id))
  }, [id]);

  useEffect(() => {
    refDataFilm.current.setAttribute("data-kinopoisk", `${id}`);
  }, [id]);

/* let videos = props.videos.trailers */

/* const getYouTubeId = (videos) => {
  const regex =
    /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/;

  return videos?.map((video) => {
    return {
      ...video,
      embedUrl: `https://www.youtube.com/embed/${regex.exec(video.url)?.[1]}`,
    };
  });
}; */

 console.log(countries)


/* useEffect(() => {
  navigate(`../film/${id}`, { replace: true })
  },[id]) */

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//yohoho.cc/yo.js";
    document.body.appendChild(script);
  
    return () => {
      script.remove();
    };
    }, [id]);


/* 
console.log(getYouTubeId(videos))
let link = getYouTubeId(videos) */
    return (
        <div className={s.wrapper}>
          <LayoutFilm>
          {/* <iframe 
              src={link[1].embedUrl}
              src='https://www.yandex.ru'
              allowFullScreen 
              title="Video player" /> */}

          {/* <div id="yohoho" data-kinopoisk="435"></div> */}
          {/* <script src="//yohoho.cc/yo.js"></script> */}
          <div className={s.name} >{filmInfoId.name} {`(${filmInfoId.year} г.)`}</div>
          <div className={s.part_encyclopedia}>
          <p className={s.encyclopedia_name +' '+ s.encyclopedia_title}>Страна:&nbsp;</p>
          {countries.map((i, index, arr)=>
            <>
            <p className={s.encyclopedia_name}>
              {i.name}
              {index===arr.length - 1
                ?<></>
                :<span className={s.encyclopedia_name}>,&nbsp;</span>}</p>
            
            </>
          )}
          </div>
          <div className={s.part_encyclopedia}>
          <p className={s.encyclopedia_name +' '+ s.encyclopedia_title + ' ' + s.margin_top_encyclopedia}>Жанр:&nbsp;</p>
          {genres.map((i, index, arr)=>
            <>
            <p className={s.encyclopedia_name + ' ' + s.margin_top_encyclopedia}>
              {i.name}
              {index===arr.length - 1
                ?<></>
                :<span className={s.encyclopedia_name}>,&nbsp;</span>}</p>
            
            </>
          )}
          </div>
          <div className={s.part_encyclopedia}>
          <p className={s.encyclopedia_name +' '+ s.encyclopedia_title + ' ' + s.margin_top_encyclopedia}>Рейтинг Кинопоиска:&nbsp;</p>
            <>
            <p className={s.encyclopedia_name + ' ' + s.margin_top_encyclopedia}>
              {ratingKinopoisk}</p>
            </>
          
          </div>
          <div className={s.wrapper_watch_film}>
            <div>
              <img className={s.img} src={preview} alt="" />
            </div>
            <div className={s.wrapper.film} key={id}>
              <div className={s.film} ref={refDataFilm} id="yohoho" data-tv="1" ></div>
            </div>
          </div>

          
          </LayoutFilm>
            
        </div>
    
    )
}

export default FilmTrailer2;


/* {...dataKinopoisk } */