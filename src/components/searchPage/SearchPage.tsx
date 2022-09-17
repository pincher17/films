import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { addLimit, getnewFilmsThunk } from '../../store/newFilmsSlice';
import {  getFilmSearchPage, refreshResultSearchPage } from '../../store/searchSlice';
import Card from '../Card/Card';
import Layout from '../layout/Layout';
import s from './SearchPage.module.css';


const SearchPage: React.FC = () =>{

  const limit = useAppSelector(state => state.newFilms.limit);
  const resultSearch = useAppSelector(state => state.search.resultSearchPage)
  const totalFilms = useAppSelector(state => state.search.resultSearchTotal)
  const {currentPage, totalPages} = useAppSelector(state => state.search)
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


    return (
    <Layout>
    <div className={s.wrapper}>
        <div className={s.wrapper_name_block}>
            <div><p className={s.name_block}>{`Поиск по запросу "${searchQuery}"`}</p></div>
            <div><p className={s.total_block}>{`Найдено: ${totalFilms}шт.`}</p></div>
        </div>
    <Card cards={resultSearch} />
    {totalPages === page ? <></> : <div className={s.wrapper_btn_show_more}><button onClick={showMore} className={s.btn}>Показать еще</button></div>}
    </div>
    </Layout>
    )
}

export default SearchPage;