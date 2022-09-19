import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { getAllFilmsThunk } from '../../store/allFilmsSlice';
import { initialStateFiltersType } from '../../store/filtersSlice';
import { addLimit, getnewFilmsThunk } from '../../store/newFilmsSlice';
import Card from '../Card/Card';
import Layout from '../layout/Layout';
import s from './AllFilmsPage.module.css';


const AllFilmsPage: React.FC = () =>{

  const films = useAppSelector(state => state.allFilms.films);
  const filtres = useAppSelector(state => state.filters)
  const page = useAppSelector(state => state.allFilms.page);
  const dispatch = useAppDispatch()

  const showMore = () => dispatch(addLimit())

  const filtersInitial: initialStateFiltersType = {
    year: `1960-2022`,
    rating: '1-10',
    sortByRelease: '-1',
    genre: ''
}
  
  useEffect(() => {

    dispatch(getAllFilmsThunk(filtersInitial, 1))

    }, [])

  useEffect(() => {

    dispatch(getAllFilmsThunk(filtres, page))

    }, [filtres, page])

  
    return (
    <Layout>
    <div className={s.wrapper}>
        <div className={s.wrapper_name_block}>
            <div><p className={s.name_block}>Все фильмы</p></div>

        </div>
    <Card cards={films} />
    <div className={s.wrapper_btn_show_more}><button onClick={showMore} className={s.btn}>Показать еще</button></div>
    </div>
    </Layout>
    )
}

export default AllFilmsPage;