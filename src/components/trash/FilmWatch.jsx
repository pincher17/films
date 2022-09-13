import React, { useEffect } from 'react';
import s from './FilmPage.module.css';

const FilmWatch = (props) =>{

    useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://kinobd.ru/js/player_.js";
		document.body.appendChild(script);

		return () => {
			script.remove();
		};
    }, []);
    
    return (
        <div className={s.wrapper}>
            hello
            <div id="kinobd" data-kinopoisk="435"></div>

        </div>
    
    )
}

export default FilmWatch;