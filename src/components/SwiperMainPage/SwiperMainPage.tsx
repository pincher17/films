import React, { Suspense, useEffect, useRef, useState } from "react";
import { SwiperMainPageProps } from "./SwiperMainPage.types";
import { NameGenre, SwiperWrapper } from "./SwiperMainPage.styles";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getBoevik, getComedy, getDrama, getFilmsThunk, getFilmsTop10, getSeries, getThriller, setIsVisible } from "../../store/FilmsMainPageSlice";
import { Wrapper } from "../Cards";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
const SwiperFilms = React.lazy(() => import('../SwiperFilms/SwiperFilms'));

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
  <Suspense>
  <SwiperFilms cards={top10} title="Топ 10"/>
    </Suspense>
  </SwiperWrapper>

  <SwiperWrapper>
  <Suspense>
  <SwiperFilms cards={films} title="Фильмы" />
  </Suspense>
  </SwiperWrapper>
 

  {isVisible && 
  <>

  <SwiperWrapper>
  <Suspense>
  <SwiperFilms cards={series} title="Сериалы" />
  </Suspense>
  </SwiperWrapper>

  <SwiperWrapper ref={elementRef}>
  <Suspense>
  <SwiperFilms cards={thriller} title="Триллеры"/>
  </Suspense>
  
  </SwiperWrapper>

  <SwiperWrapper>
  <Suspense>
  <SwiperFilms cards={comedy} title="Комедии"/>
  </Suspense>
  
  </SwiperWrapper>

  <SwiperWrapper>
  <Suspense>
  <SwiperFilms cards={drama} title="Драма"/>
  </Suspense>
  
  </SwiperWrapper>

  <SwiperWrapper>
  <Suspense>
  <SwiperFilms cards={boevik} title="Боевики"/>
  </Suspense>
  </SwiperWrapper>
  </>
}
  </>

  )
  }
export default SwiperMainPage;
