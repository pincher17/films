import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { getAllFilmsFiltersThunk, getAllFilmsThunk, nextPage, setPage } from '../../store/allFilmsSlice';
import Cards from '../Cards';
import Filters from '../Filters';
import Filtericon from '../../assets/icons/Filtericon.svg'
import { MainTag } from '../Main/Main.styles';
import { Button, CrossIcon, FilterIcon, Line1, Line2, NameBlock, Wrapper, WrapperButtonShowMore, WrapperNameBlock } from './AllFilmsPage.styles';
import Sidebar from '../Sidebar/Sidebar';


const AllFilmsPage: React.FC = () =>{

  const films = useAppSelector(state => state.allFilms.films);
  const filtres = useAppSelector(state => state.filters)
  const page = useAppSelector(state => state.allFilms.page);
  const dispatch = useAppDispatch()
  const didMountFiltres = React.useRef(false);
  const didMountPage= React.useRef(false);
  const showMore = () => dispatch(nextPage())
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const [resolution, setResolution] = React.useState<any>({ width: 0, height: 0 });
    
      useEffect(() => {
        const updateScreenResolution = () => {
          setResolution({ width: window.innerWidth, height: window.innerHeight });
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

    const toggleSidebar = () => {
      setIsOpenSidebar(!isOpenSidebar);
    };
  
    return (
    <MainTag>
    <Wrapper>
      <WrapperNameBlock>
        <div>
          <NameBlock>Все фильмы</NameBlock>
        </div>
        <div>
        <FilterIcon url={Filtericon} onClick={toggleSidebar} />
        </div>
      </WrapperNameBlock>
      {resolution.width > 1150 ? <Filters /> : ''}
      <Sidebar toggleSidebar={toggleSidebar} isOpenSidebar={isOpenSidebar}>
      <CrossIcon sidebar={true} onClick={toggleSidebar}>
          <Line1 />
          <Line2 />
        </CrossIcon>
      <Filters mobile={true} setIsOpenSidebar={setIsOpenSidebar} />
      </Sidebar>
      <Cards cards={films} />
      <WrapperButtonShowMore>
        <Button onClick={showMore}>Показать еще</Button>
      </WrapperButtonShowMore>
    </Wrapper>
    </MainTag>
    )
}

export default AllFilmsPage;