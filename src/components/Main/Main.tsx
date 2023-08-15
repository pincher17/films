import React from 'react';
import NewFilms from '../NewFilms/NewFilms';
import { H1, MainTag } from './Main.styles';


const Main: React.FC = () =>{

    return (
    <MainTag>
        <NewFilms />
        <H1>Смотрите новинки кино и сериалов в онлайн кинотеатре Filmhub</H1>
        <p>Добро пожаловать на Filmhub – ваш персональный онлайн кинотеатр новинок кино и сериалов! 
            Мы предлагаем широкий выбор фильмов в высоком качестве, чтобы вы могли насладиться увлекательными 
            историями и захватывающими приключениями. Filmhub - ваш путь к захватывающему миру кино развлечений.</p>
    </MainTag>
    )
}

export default Main;