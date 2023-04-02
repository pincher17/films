import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { getAllFilmsFiltersThunk, getAllFilmsThunk, nextPage, setPage } from '../../store/allFilmsSlice';
import Cards from '../Cards';
import Filters from '../Filters';
import Layout from '../layout/Layout';
import s from './AllFilmsPage.module.css';


const AllFilmsPage: React.FC = () =>{

  const films = useAppSelector(state => state.allFilms.films);
  const filtres = useAppSelector(state => state.filters)
  const page = useAppSelector(state => state.allFilms.page);
  const dispatch = useAppDispatch()
  const didMountFiltres = React.useRef(false);
  const didMountPage= React.useRef(false);
  const showMore = () => dispatch(nextPage())

  console.log(films)
  useEffect(() => {
    if(films.length) return
    console.log('1')
    dispatch(getAllFilmsThunk(filtres, 1))
    dispatch(setPage(1))
    }, [])

    useEffect(() => {
      
        if (!didMountFiltres.current) {
            didMountFiltres.current = true;
            return;
          }
          console.log('getAllFilmsFiltersThunk')
        dispatch(getAllFilmsFiltersThunk(filtres, 1))
        dispatch(setPage(1))
        }, [filtres])

  useEffect(() => {
    if (!didMountPage.current) {
        didMountPage.current = true;
        return;
      }
      console.log('3')
      if(page === 1) return
    dispatch(getAllFilmsThunk(filtres, page))

    }, [page])

  
    return (
    <Layout>
    <div className={s.wrapper}>
      <div className={s.wrapper_name_block}>
        <div>
          <p className={s.name_block}>Все фильмы</p>
        </div>
      </div>
      <Filters />
      <Cards cards={films} />
      <div className={s.wrapper_btn_show_more}>
        <button onClick={showMore} className={s.btn}>Показать еще</button>
      </div>
    </div>
    </Layout>
    )
}

export default AllFilmsPage;