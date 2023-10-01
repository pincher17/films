/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef, useState } from "react";
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
  TrailerWrapper,
  Wrapper,
  WrapperInfo,
  WrapperWatchFilm,
} from "./FilmPage.styles";
import FilmInfoText from "../FilmInfoText/FilmInfoText";
import FilmPageMobile from "../FilmPageMobile/FilmPageMobile";
import { Helmet } from "react-helmet-async";
import Trailer from "../Trailer/Trailer";
import translateCategory from "../../helpers/translateCategory";
import roundNumber from "../../helpers/rounding";

const FilmPage: React.FC = (props) => {
  const dispatch = useAppDispatch();
  let { id }: any = useParams();
  const filmInfoId = useAppSelector((state) => state.filmInfo.info);
  const [isLoaded, setIsLoaded] = useState(false);
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
        ):<title>Filmhub - смотреть фильмы бесплатно онлайн в хорошем качестве</title>
        }
        { filmInfoId?.name && filmInfoId?.year ?
          <meta name="description" content={`Смотрите онлайн ${translateCategory(filmInfoId.type)} ${filmInfoId.name} (${filmInfoId.year}) года в хорошем качестве HD, рейтинг кинопоиска: ${roundNumber(ratingKinopoisk, 1)}`}/>
          : ''
        }
        
        {filmInfoId?.name && filmInfoId?.year ? (
          <meta name="keywords" content={`${filmInfoId.name}, ${filmInfoId.year}, ${filmInfoId.alternativeName || filmInfoId.enName}, ${translateCategory(filmInfoId.type)}, смотреть, онлайн, бесплатно, hd`}></meta>
        ): <meta name="keywords" content={`смотреть, онлайн, бесплатно, hd`}></meta>}
        {
          <meta property="og:image" content={`${preview}`}/>
        }
        {filmInfoId?.name && filmInfoId?.year ? (
          <meta property="og:title" content={`${filmInfoId.name} ${filmInfoId.year} г. - смотреть онлайн на Filmhub`}></meta>
        ): ''
        } 
        { filmInfoId?.description ?
          <meta property="og:description" content={`${filmInfoId.description}`}/>
          : ''
        }
        {filmInfoId?.name && filmInfoId?.year ? (
          <meta property="twitter:title" content={`${filmInfoId.name} ${filmInfoId.year} г. - смотреть онлайн на Filmhub`}></meta>
        ): ''
        } 
        { filmInfoId?.description ?
          <meta property="twitter:description" content={`${filmInfoId.description}`}/>
          : ''
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
          {filmInfoId?.videos && filmInfoId?.videos.trailers[0] ? <Trailer src={`${filmInfoId?.videos.trailers[0].url}`}/>  : ''}
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
