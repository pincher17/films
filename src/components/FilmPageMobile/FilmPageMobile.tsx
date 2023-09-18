import React, { createRef, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getFilmById } from "../../store/filmInfoSlice";
import LayoutFilm from "../layoutFilm/LayoutFilm";
import SwiperFilms from "../SwiperFilms/SwiperFilms";
import s from "./FilmPageMobile.module.css";
import {
  ButtonWatch,
  Description,
  SwiperWrapperSimilar,
  TitleDescription,
  Wrapper,
  WrapperInfo,
  WrapperWatchFilm,
} from "./FilmPageMobile.styles";
import FilmInfoText from "../FilmInfoText/FilmInfoText";
import MobileWatchFilm from "../MobileWatchFilm/MobileWatchFilm";
import { Helmet } from "react-helmet-async";

const FilmPageMobile: React.FC = (props) => {
  const dispatch = useAppDispatch();
  let { id }: any = useParams();
  const filmInfoId = useAppSelector((state) => state.filmInfo.info);
  const [isLoaded, setIsLoaded] = useState(false);
  const { preview, countries, genres, ratingKinopoisk } = useAppSelector(
    (state) => state.filmInfo
  );
  /* const refDataFilm = useRef<HTMLInputElement | null>(null); */
  const [resolution, setResolution] = React.useState<any>({
    width: 0,
    height: 0,
  });
  const [watchFilm, setWatchFilm] = React.useState<boolean>(false);

  useEffect(() => {
    // Устанавливаем свойство YandexRotorSettings
    (window as any).YandexRotorSettings = {
      WaiterEnabled: true,
      IsLoaded: function() {
        return document.title.length > 7;
      }
    };
    
    // Проверяем загруженность контента в элементе title
    const checkTitleLoaded = () => {
      if (document.title.length > 7) {
        setIsLoaded(true);
      }
    };

    // Вызываем функцию проверки при монтировании компонента
    checkTitleLoaded();

    // Добавляем слушателя события, чтобы отслеживать изменения заголовка
    document.addEventListener('DOMSubtreeModified', checkTitleLoaded);

    // Удаляем слушателя события при размонтировании компонента
    return () => {
      document.removeEventListener('DOMSubtreeModified', checkTitleLoaded);
    };
  }, []);

  useEffect(() => {
    dispatch(getFilmById(id));
  }, [id]);

  const watchFilmStart = () => setWatchFilm(true);

  return (
    <Wrapper>
       <Helmet>
        {filmInfoId?.name && filmInfoId?.year ? (
          <title>{`${filmInfoId.name} ${filmInfoId.year} г. - смотреть онлайн на Filmhub`}</title>
        ):<title>Filmhub</title>
        }
        { filmInfoId?.description ?
          <meta name="description" content={`${filmInfoId.description}`}/>
          : ''
        } 
        {
          <meta property="og:image" content={`${preview}`}/>
        } 
      </Helmet>
      {watchFilm && <MobileWatchFilm id={id} setWatchFilm={setWatchFilm} />}
      <LayoutFilm>
        <WrapperInfo>
          <WrapperWatchFilm>
            <div>
              <img className={s.img} src={preview} alt="" />
            </div>
            <FilmInfoText
              countries={countries}
              filmInfoId={filmInfoId}
              genres={genres}
              ratingKinopoisk={ratingKinopoisk}
              resolution={resolution}
            />
          </WrapperWatchFilm>
        </WrapperInfo>
        <ButtonWatch onClick={watchFilmStart}>Смотреть</ButtonWatch>
        <TitleDescription>Описание:</TitleDescription>
        <Description>{filmInfoId?.description}</Description>

        <SwiperWrapperSimilar>
          {filmInfoId?.similarMovies.length ? (
            <>
              <TitleDescription>Похожие</TitleDescription>
              <SwiperFilms cards={filmInfoId?.similarMovies} />
            </>
          ) : (
            ""
          )}
        </SwiperWrapperSimilar>
      </LayoutFilm>
    </Wrapper>
  );
};

export default FilmPageMobile;
