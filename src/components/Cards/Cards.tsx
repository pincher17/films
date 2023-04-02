import React from 'react';
import Card from '../Card';
import { Wrapper } from './Cards.styles';
import { CardsProps } from './Cards.types';


const Cards: React.FC<CardsProps> = (props) =>{
    
    return (
    <Wrapper>
        {props.cards.map((item)=>
         <Card card={item} />
        )}
    </Wrapper>
    )
}

export default Cards;
