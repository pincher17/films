import React, { useEffect, useRef } from "react";
import { CrossIconFilm, Wrapper } from "./MobileWatchFilm.styles";
import { getFilmById } from "../../store/filmInfoSlice";
import { useAppDispatch } from "../../hook";
import { MobileWatchFilmProps } from "./MobileWatchFilm.types";
import s from './MobileWatchFilm.module.css';
import { CrossIcon, Line1, Line2 } from "../allFilmsPage/AllFilmsPage.styles";

const MobileWatchFilm: React.FC<MobileWatchFilmProps> = ({id, setWatchFilm}) => {
  const dispatch = useAppDispatch()
  const refDataFilm = useRef<HTMLInputElement | null>(null);

  const toggleWatchFilm = () => setWatchFilm(false)

  useEffect(() => {
    dispatch(getFilmById(id))
    }, [id]);
  
    useEffect(() => {
      refDataFilm.current?.setAttribute("data-kinopoisk", `${id}`);
    }, [id]);

    useEffect(() => {
      const script = document.createElement("script");
      script.src = "//yohoho.cc/yo.js";
      document.body.appendChild(script);
    
      return () => {
        script.remove();
      };
      }, [id]);

  return (
    <Wrapper>
    <CrossIconFilm sidebar={true} onClick={toggleWatchFilm}>
          <Line1 />
          <Line2 />
        </CrossIconFilm>
      <div key={id.toString()}>
              <div key={id + id} className={s.film} ref={refDataFilm} id="yohoho" data-tv="1" ></div>
            </div>
    </Wrapper>
  )
};

export default MobileWatchFilm;
