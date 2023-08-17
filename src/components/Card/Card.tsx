import React from 'react';
import { NavLink } from 'react-router-dom';
import { Img, ImgWrap, ImgWrapper, Rating, RatingNum, Wrapper, Year } from './Card.styles';
import { CardProps } from './Card.types';
import roundNumber from '../../helpers/rounding';


const Card: React.FC<CardProps> = (props) =>{
    
const {
    id,
    poster,
    name,
    year,
    rating
  } = props.card

  let ratingKp

  if(rating){
    ratingKp = roundNumber(rating.kp, 1)
  }

    return (
    <Wrapper key={id}>
            <NavLink to={'/film/' + id }>
            <ImgWrapper>
            <ImgWrap>
            {poster.url ? <Img src={poster.url} alt={name} /> : null}
            </ImgWrap>
            {ratingKp &&
            <Rating>
                <RatingNum>{ratingKp}</RatingNum>
            </Rating>}
            <p>{name}</p>
            <Year>{year}</Year>
            </ImgWrapper>
            </NavLink>
    </Wrapper>
    )
}

export default Card;