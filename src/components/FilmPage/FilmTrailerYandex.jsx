import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrailerThunk } from '../../store/youtubeSlice.ts';
import Layout from '../layout/Layout';
import s from './FilmPage.module.css';

const FilmTrailerYandex = ({name}) =>{

const link = "https://widgets.kinopoisk.ru/discovery/trailer/167560?onlyPlayer=1&autoplay=1&cover=1"

    return (
        <div className={s.wrapper}>
          <Layout>
              <iframe
              id="x-frame-bypass" 
              src={link}
              width="500" height="500"
              title="Video player" />
          </Layout>
            
        </div>
    
    )
}

export default FilmTrailerYandex;