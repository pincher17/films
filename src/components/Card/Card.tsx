import React from 'react';
import { NavLink } from 'react-router-dom';
import { Img, ImgWrap, ImgWrapper, Rating, RatingNum, Wrapper, Year } from './Card.styles';
import { CardProps } from './Card.types';
import { AspectRatio } from '@mui/icons-material';


const Card: React.FC<CardProps> = (props) =>{
    
const {
    id,
    poster,
    name,
    year,
    rating
  } = props.card

    return (
    <Wrapper key={id}>
            <NavLink to={'/film/' + id }>
            <ImgWrapper>
            <ImgWrap>
            {poster.previewUrl && <Img src={poster.previewUrl} alt={name} />}
            </ImgWrap>
            {rating?.kp &&
            <Rating>
                <RatingNum>{rating?.kp}</RatingNum>
            </Rating>}
            <p>{name}</p>
            <Year>{year}</Year>
            </ImgWrapper>
            </NavLink>
    </Wrapper>
    )
}

export default Card;