import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import FilmWatch from './components/FilmPage/FilmWatch';
import FilmTrailer from './components/FilmPage/FilmTrailer';
import FilmInfo from './components/FilmPage/FilmInfo';
import FilmTrailerYandex from './components/FilmPage/FilmTrailerYandex';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/film/:id' element={<FilmInfo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
