import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import {  getFilmSearchPage, refreshResultSearchPage } from '../../store/searchSlice';
import Cards from '../Cards/Cards';
import s from './SearchPage.module.css';
import { MainTag } from '../Main/Main.styles';


const SearchPage: React.FC = () =>{

  const resultSearch = useAppSelector(state => state.search.resultSearchPage)
  const totalFilms = useAppSelector(state => state.search.resultSearchTotal)
  const totalPages = useAppSelector(state => state.search.totalPages)
  const dispatch = useAppDispatch()
  const { searchQuery }: any = useParams();
  const [page, setPage] = useState(1);
  const didMount = React.useRef(false);
  
  useEffect(() => {
    dispatch(refreshResultSearchPage())
    dispatch(getFilmSearchPage(searchQuery, 1))
  
    }, [searchQuery]);

    useEffect(() => {
        if (!didMount.current) {
            didMount.current = true;
            return;
          }
          dispatch(getFilmSearchPage(searchQuery, page))
      
        }, [page]);

    const showMore = () => setPage(page + 1)

console.log(page)
    return (
    <MainTag>
    <div className={s.wrapper}>
        <div className={s.wrapper_search_group}>
            <div className={s.search_group}>
            <div><p className={s.search_text}>{`Поиск по запросу: `}</p></div>
            <div><p className={s.search_text_query}>{`${searchQuery}`}</p></div>
            </div>
            <div><p className={s.total_films}>{`Найдено: ${totalFilms}шт.`}</p></div>
        </div>
    <Cards cards={resultSearch} />
    {totalPages === page ? <></> : <div className={s.wrapper_btn_show_more}><button onClick={showMore} className={s.btn}>Показать еще</button></div>}
    </div>
    </MainTag>
    )
}

export default SearchPage;