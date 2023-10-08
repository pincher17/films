import React, { useEffect } from 'react';
import { H1Error, NotFoundAllWrapper, NotFoundWrapper, TextError } from './NotFoundPage.styles';
import { setShowFooter } from '../../store/Footer';
import { useAppDispatch } from '../../hook';


const NotFoundPage: React.FC = () =>{
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setShowFooter(false))
    // Возвращаем функцию для очистки класса при размонтировании компонента
    return () => {
      dispatch(setShowFooter(true))
    };
  }, []);

  
    return (
      <NotFoundAllWrapper>
      <NotFoundWrapper>
        <div>
        <H1Error>Ошибка 404. Страница не найдена</H1Error>
        </div>
        <div>
        <TextError>Возможно Вы неверно указали адрес страницы.</TextError>
        </div>
      </NotFoundWrapper>
      </NotFoundAllWrapper>
    )
}

export default NotFoundPage;