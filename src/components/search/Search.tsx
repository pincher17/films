import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Router, useRoutes, useNavigate, useParams } from 'react-router-dom';
import { getFilmSearch } from '../../store/searchSlice';
import SearchIcon from '@mui/icons-material/Search';
import s from './SearchInput.module.css';
import { useAppDispatch, useAppSelector } from '../../hook';


const Search: React.FC = () => {

  const [text, setText] = useState('');
  const [searchList, setSearchList] = useState(false);
  const dispatch = useAppDispatch()
  const resultSearch = useAppSelector(state => state.search.resultSearch)
  const navigate = useNavigate();

  useEffect(() => {
    
    dispatch(getFilmSearch(text))
  
    }, [text]);

  const submitForm = () => {
      navigate(`/search/${text}`)
  }


  return (
    <div className={s.search}>
    <input className={s.search_input} 
            placeholder='Поиск' 
            type='search'
            onChange={(e) => setText(e.target.value)}
            onFocus={() => setSearchList(true)}
            onBlur={() => setSearchList(false)}></input>
   
    {searchList && 
      <div className={s.search_list}>
        {resultSearch.map((i)=>
         <div key={i.id} className={s.card}>
            <div onMouseDown={()=> navigate('../film/' + i.id, { replace: true })}>
            <div className={s.img_wrapper}>
            <img className={s.img} src={i.poster?.previewUrl} alt="poster" />
            
            <div className={s.rating}>
                <div className={s.name}>{i.name}</div>
                <div className={s.year}>{i.year}, {i.movieLength}мин</div>
                <div className={s.rating_num}>{i.rating.kp}</div>
            </div>
            </div>
            </div>
         </div>
        )}
      </div>}
      <div className={s.wrapper_btn_search}>
        {/* <NavLink to={'/search'} > */}
        <div onClick={submitForm} className={s.btn_search}><SearchIcon sx={{ fontSize: 28 }}/></div>
        {/* </NavLink> */}
     </div>
    </div>
  );
}

export default Search;