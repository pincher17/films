import React, { useEffect, useRef } from "react";
import { SwiperMainPageProps } from "./SwiperMainPage.types";
import { SwiperWrapper } from "./SwiperMainPage.styles";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getBoevik, getComedy, getDrama, getFilmsThunk, getFilmsTop10, getSeries, getThriller, setIsVisible } from "../../store/FilmsMainPageSlice";
import SwiperFilms from "../SwiperFilms/SwiperFilms";


const SwiperMainPage: React.FC<SwiperMainPageProps> = () => {
  const dispatch = useAppDispatch()
  const widthDevice = useAppSelector(state => state.widthDevice.width)
  const isVisible = useAppSelector(state => state.filmsMainPage.isVisible)

  const films = useAppSelector(state => state.filmsMainPage.films)
  const series = useAppSelector(state => state.filmsMainPage.series)
  const top10 = useAppSelector(state => state.filmsMainPage.top10)
  const thriller = useAppSelector(state => state.filmsMainPage.thriller)
  const comedy = useAppSelector(state => state.filmsMainPage.comedy)
  const drama = useAppSelector(state => state.filmsMainPage.drama)
  const boevik = useAppSelector(state => state.filmsMainPage.boevik)

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(widthDevice > 1030){
      dispatch(setIsVisible(true))
    }

    }, [widthDevice])

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        dispatch(setIsVisible(true))
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {

    dispatch(getFilmsThunk())
    dispatch(getSeries())
    
    dispatch(getThriller())
    dispatch(getComedy())
    dispatch(getDrama())
    dispatch(getBoevik())
    dispatch(getFilmsTop10())
    }, [])
    
  return (
    <>
  <SwiperWrapper>
  <SwiperFilms cards={top10} title="Топ 10"/>
  </SwiperWrapper>

  <SwiperWrapper>
  <SwiperFilms cards={films} title="Фильмы" />
  </SwiperWrapper>
 

  {isVisible && 
  <>

  <SwiperWrapper>
  <SwiperFilms cards={series} title="Сериалы" />
  </SwiperWrapper>

  <SwiperWrapper ref={elementRef}>
  <SwiperFilms cards={thriller} title="Триллеры"/>
  </SwiperWrapper>

  <SwiperWrapper>
  <SwiperFilms cards={comedy} title="Комедии"/>
  </SwiperWrapper>

  <SwiperWrapper>
  <SwiperFilms cards={drama} title="Драма"/>
  </SwiperWrapper>

  <SwiperWrapper>
  <SwiperFilms cards={boevik} title="Боевики"/>
  </SwiperWrapper>
  </>
}
  </>

  )
  }
export default SwiperMainPage;
