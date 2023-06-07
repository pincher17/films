import React from 'react';
import NewFilms from '../NewFilms/NewFilms';
import { MainTag } from './Main.styles';


const Main: React.FC = () =>{

    return (
    <MainTag>
        <NewFilms />
    </MainTag>
    )
}

export default Main;