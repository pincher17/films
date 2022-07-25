import React from 'react';
import NewFilms from '../NewFilms/NewFilms';
import s from './Main.module.css';


const Main = (props) =>{


  
    return (
    <main className={s.main}>
        <NewFilms />
    </main>
    )
}

export default Main;