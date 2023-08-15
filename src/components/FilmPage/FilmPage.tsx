/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getFilmById } from "../../store/filmInfoSlice";
import LayoutFilm from "../layoutFilm/LayoutFilm";
import SwiperFilms from "../SwiperFilms/SwiperFilms";
import s from "./FilmPage.module.css";
import {
  Description,
  Iframe,
  SwiperWrapperSimilar,
  TitleDescription,
  Wrapper,
  WrapperInfo,
  WrapperWatchFilm,
} from "./FilmPage.styles";
import FilmInfoText from "../FilmInfoText/FilmInfoText";
import FilmPageMobile from "../FilmPageMobile/FilmPageMobile";
import { Helmet } from "react-helmet-async";

const FilmPage: React.FC = (props) => {
  const dispatch = useAppDispatch();
  let { id }: any = useParams();
  const filmInfoId = useAppSelector((state) => state.filmInfo.info);
  const { preview, countries, genres, ratingKinopoisk } = useAppSelector(
    (state) => state.filmInfo
  );
  const refDataFilm = useRef<HTMLInputElement | null>(null);
  const [resolution, setResolution] = React.useState<any>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateScreenResolution = () => {
      setResolution({ width: window.innerWidth, height: window.innerHeight });
    };

    // Обновляем разрешение при изменении размеров окна
    window.addEventListener("resize", updateScreenResolution);

    // Инициализируем разрешение при первоначальной загрузке
    updateScreenResolution();

    // Отписываемся от события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", updateScreenResolution);
    };
  }, []);

  useEffect(() => {
    dispatch(getFilmById(id));
  }, [id]);

  useEffect(() => {
    refDataFilm.current?.setAttribute("data-kinopoisk", `${id}`);
  }, [id, resolution.width]);

  /*   useEffect(() => {
    const script = document.createElement("script");
    //script.src = "//yohoho.cc/yo.js";
    script.src = "https://v1687693103.bazon.site/js/bazon.js";
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
    }, [id]); */

  if (resolution.width && resolution.width < 850) {
    return <FilmPageMobile />;
  }

  return (
    <Wrapper>
      <Helmet>
        {filmInfoId?.name && filmInfoId?.year ? (
          <title>{`${filmInfoId.name} ${filmInfoId.year} г. - смотреть онлайн на Filmhub`}</title>
        ):<title>Filmhub</title>
        }
        { filmInfoId?.description ?
          <meta name="description" content={`${filmInfoId?.description}`}/>
          : <meta name="description" content="Смотрите новинки кино и сериалов в онлайн кинотеатре Filmhub. 
          Большой выбор фильмов, высокое качество видео и звука." />
        } 
      </Helmet>
      <LayoutFilm>
        <WrapperInfo>
          <FilmInfoText
            countries={countries}
            filmInfoId={filmInfoId}
            genres={genres}
            ratingKinopoisk={ratingKinopoisk}
            resolution={resolution}
          />
          <WrapperWatchFilm>
            <div>
              <img itemProp= "image" className={s.img} src={preview} alt={filmInfoId?.name} />
            </div>
            <div key={id.toString()}>
              {/* <div key={id + id} className={s.film} ref={refDataFilm} id="yohoho" data-tv="1" ></div> */}
              {/* <div key={id} ref={refDataFilm} id='bazon' data-width='600' data-height='400'></div> */}
              <Iframe
                src={`https://v1687699810.bazon.site/kp/${id}?noads=1`}
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                referrerPolicy="origin"
                width="500"
                height="352"
              ></Iframe>
            </div>
          </WrapperWatchFilm>
        </WrapperInfo>

        {resolution.width > 1150 || resolution.width < 850 ? (
          <>
            <TitleDescription>Описание:</TitleDescription>
            <Description>{filmInfoId?.description}</Description>
          </>
        ) : (
          ""
        )}

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

export default FilmPage;
