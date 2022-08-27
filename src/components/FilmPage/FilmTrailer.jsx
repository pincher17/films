import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrailerThunk } from '../../store/youtubeSlice';
import Layout from '../layout/Layout';
import s from './FilmPage.module.css';

const FilmTrailer = ({name}) =>{
    const dispatch = useDispatch()
    const trailer = useSelector(state => state.trailer.trailer)
    
    
    useEffect(() => {
		dispatch(getTrailerThunk(`${name} официальный трейлер`))
    }, [name]);
    
   //console.log(trailer[0].id.videoId)

    
    const videoSrc = `https://www.youtube.com/embed/`
    
    if(!trailer[0]) return <div>loading...</div>

    return (
        <div className={s.wrapper}>
          <Layout>
          <iframe 
              src={videoSrc + trailer[0].id.videoId} 
              /* src='https://youtu.be/L0h0cydG3iI' */
              allowFullScreen 
              title="Video player" />
          </Layout>
            
        </div>
    
    )
}

export default FilmTrailer;