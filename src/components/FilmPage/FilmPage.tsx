import React, { createRef, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { getFilmById } from '../../store/filmInfoSlice';
import LayoutFilm from '../layoutFilm/LayoutFilm';
import SwiperFilms from '../SwiperFilms/SwiperFilms';
import s from './FilmPage.module.css';
import { Description, Flex, Img, MarginTopTitle, MarginTopValue, Name, NameTitle, PositionAbsolute, SwiperWrapperSimilar, TextValue, TitleDescription, ValueTextSpan, Wrapper, WrapperInfo, WrapperWatchFilm } from './FilmPage.styles';
import FilmInfoText from '../FilmInfoText/FilmInfoText';
import FilmPageMobile from '../FilmPageMobile/FilmPageMobile';

const FilmPage: React.FC = (props) =>{
  const dispatch = useAppDispatch()
  let { id }: any = useParams();
  const filmInfoId = useAppSelector(state => state.filmInfo.info)
  const {preview, countries, genres, ratingKinopoisk} = useAppSelector(state => state.filmInfo)
  const refDataFilm = useRef<HTMLInputElement | null>(null);
  const [resolution, setResolution] = React.useState<any>({ width: 0, height: 0 });

  /* useEffect(() => {
    const iframeContainer = document.getElementById('yohoho-iframe');

    const handleIframeCreation = (event: MutationRecord) => {
      const addedNodes = Array.from(event.addedNodes);
      for (const node of addedNodes) {
        if (node instanceof HTMLIFrameElement) {
          // Предотвращение добавления новых iframe внутри yohoho-iframe
          node.remove();
        }
      }
    };

    if (iframeContainer) {
      // Наблюдение за изменениями в дочерних элементах
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          handleIframeCreation(mutation);
        }
      });

      // Запуск наблюдения за добавлением новых элементов
      observer.observe(iframeContainer, { childList: true });

      return () => {
        // Отмена наблюдения при размонтировании компонента
        observer.disconnect();
      };
    }
  }, []); */

    
      useEffect(() => {
        const updateScreenResolution = () => {
          setResolution({ width: window.innerWidth, height: window.innerHeight });
        };
    
        // Обновляем разрешение при изменении размеров окна
        window.addEventListener('resize', updateScreenResolution);
    
        // Инициализируем разрешение при первоначальной загрузке
        updateScreenResolution();
    
        // Отписываемся от события при размонтировании компонента
        return () => {
          window.removeEventListener('resize', updateScreenResolution);
        };
      }, []);

  useEffect(() => {
  dispatch(getFilmById(id))
  }, [id]);

  useEffect(() => {
    refDataFilm.current?.setAttribute("data-kinopoisk", `${id}`);
  }, [id, resolution.width]);

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

    if(resolution.width < 850){
      
      return <FilmPageMobile />
    }

/* 
console.log(getYouTubeId(videos))
let link = getYouTubeId(videos) */
    return (
        <Wrapper>
          <LayoutFilm>
          {/* <iframe 
              src={link[1].embedUrl}
              src='https://www.site.ru'
              allowFullScreen 
              title="Video player" /> */}

          {/* <div id="yohoho" data-kinopoisk="435"></div> */}
          {/* <script src="//yohoho.cc/yo.js"></script> */}
          <WrapperInfo>
              {resolution.width > 850
              ? <FilmInfoText 
                countries={countries} 
                filmInfoId={filmInfoId} 
                genres={genres} 
                ratingKinopoisk={ratingKinopoisk}
                resolution={resolution}
               />
              : ''
              }
          <WrapperWatchFilm>
            <div>
              <img className={s.img} src={preview} alt="" />
            </div>
            {resolution.width < 850
              ? <FilmInfoText 
                countries={countries} 
                filmInfoId={filmInfoId} 
                genres={genres} 
                ratingKinopoisk={ratingKinopoisk}
                resolution={resolution}
               />
              : ''
              }
            <div key={id.toString()}>
              <div key={id + id} className={s.film} ref={refDataFilm} id="yohoho" data-tv="1" ></div>
            </div>
          </WrapperWatchFilm>
          </WrapperInfo>

          {resolution.width > 1150 || resolution.width < 850
          ?<>
          <TitleDescription>Описание:</TitleDescription>
          <Description>{filmInfoId?.description}</Description>
          </>
          :''
          }

          <SwiperWrapperSimilar>
          {filmInfoId?.similarMovies.length ? <><TitleDescription>Похожие</TitleDescription><SwiperFilms cards={filmInfoId?.similarMovies} /></> : ''}
          </SwiperWrapperSimilar>
          </LayoutFilm>
            
        </Wrapper>
    
    )
}

export default FilmPage;

