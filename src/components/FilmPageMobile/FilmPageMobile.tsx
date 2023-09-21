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
    dispatch(getFilmById(id));
  }, [id]);

  const watchFilmStart = () => setWatchFilm(true);

  return (
    <Wrapper>
       <Helmet>
        {filmInfoId?.name && filmInfoId?.year ? (
          <title>{`${filmInfoId.name} ${filmInfoId.year} г. - смотреть онлайн на Filmhub`}</title>
        ):<title>Filmhub - смотреть фильмы бесплатно онлайн в хорошем качестве</title>
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
