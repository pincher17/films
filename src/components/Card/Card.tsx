import React from 'react';
import { NavLink } from 'react-router-dom';
import { Img, ImgWrapper, Rating, RatingNum, Wrapper, Year } from './Card.styles';
import { CardProps } from './Card.types';


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
            <Img src={poster?.previewUrl} alt="" />
            <Rating>
                <RatingNum>{rating?.kp}</RatingNum>
            </Rating>
            <p>{name}</p>
            <Year>{year}</Year>
            </ImgWrapper>
            </NavLink>
    </Wrapper>
    )
}

export default Card;