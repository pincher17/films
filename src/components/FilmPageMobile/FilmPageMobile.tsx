import React, { useEffect } from "react";
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
  TrailerButtonWatch,
  Wrapper,
  WrapperInfo,
  WrapperWatchFilm,
} from "./FilmPageMobile.styles";
import FilmInfoText from "../FilmInfoText/FilmInfoText";
import MobileWatchFilm from "../MobileWatchFilm/MobileWatchFilm";
import { Helmet } from "react-helmet-async";
import TrailerMobileWatch from "../TrailerMobileWatch/TrailerMobileWatch";
import translateCategory from "../../helpers/translateCategory";
import roundNumber from "../../helpers/rounding";
import SkeletonImage from "../SkeletonImage/SkeletonImage";

const FilmPageMobile: React.FC = (props) => {
  const dispatch = useAppDispatch();
  let { id }: any = useParams();
  const filmInfoId = useAppSelector((state) => state.filmInfo.info);
  const loading = useAppSelector(state => state.loading.loading);
  const { preview, countries, genres, ratingKinopoisk } = useAppSelector(
    (state) => state.filmInfo
  );
  /* const refDataFilm = useRef<HTMLInputElement | null>(null); */
  const [resolution, setResolution] = React.useState<any>({
    width: 0,
    height: 0,
  });
  const [watchFilm, setWatchFilm] = React.useState<boolean>(false);
  const [watchTrailer, setWatchTrailer] = React.useState<boolean>(false);

  useEffect(() => {
    dispatch(getFilmById(id));
  }, [id]);

  const watchFilmStart = () => setWatchFilm(true);
  const watchTrailerStart = () => setWatchTrailer(true);

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
      {watchFilm && <MobileWatchFilm id={id} setWatchFilm={setWatchFilm} />}
      {watchTrailer && <TrailerMobileWatch id={id} setWatchTrailer={setWatchTrailer} src={`${filmInfoId?.videos.trailers[0].url}`} />}
      <LayoutFilm>
        <WrapperInfo>
          <WrapperWatchFilm>
            <div>
              {loading ? <SkeletonImage /> : <img className={s.img} src={preview} alt={filmInfoId?.name} />}
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
        {filmInfoId?.videos && filmInfoId?.videos.trailers[0] ? <TrailerButtonWatch onClick={watchTrailerStart}>Трейлер</TrailerButtonWatch> : ''}
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
