import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import FilmPage from './components/FilmPage/FilmPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/film/:id' element={<FilmPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
