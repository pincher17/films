import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import FilmPage from './components/FilmPage/FilmPage';
import SearchPage from './components/searchPage/SearchPage';
import AllFilmsPage from './components/allFilmsPage/AllFilmsPage';
import Test from './Containers/Test/Test';
import { useAppDispatch } from './hook';
import { setWidthDevice } from './store/widthDeviceSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const updateScreenResolution = () => {
      dispatch(setWidthDevice(window.innerWidth));
    };

    // Обновляем разрешение при изменении размеров окна
    window.addEventListener('resize', updateScreenResolution);

    // Инициализируем разрешение при первоначальной загрузке
    updateScreenResolution();

    // Отписываемся от события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateScreenResolution);
    };
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/test' element={<Test />}/>
        <Route path='/film/:id' element={<FilmPage />}/>
        <Route path='/search/:searchQuery' element={<SearchPage />}/>
        <Route path='/films' element={<AllFilmsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
