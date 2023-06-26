import React from 'react';
import Card from '../Card';
import { Wrapper } from './Cards.styles';
import { CardsProps } from './Cards.types';
import { useAppSelector } from '../../hook';
import SkeletonCard from '../SkeletonCard/SkeletonCard';


const Cards: React.FC<CardsProps> = (props) =>{
    const loading = useAppSelector(state => state.loading.loading);
    const arraySkeletonCards = [1,2,3,4,5,6,7,8,9,10];

    return (
    <Wrapper>
        {props.cards.map((item)=>
         <Card card={item} />
        )}
        {loading && arraySkeletonCards.map(()=>
         <SkeletonCard />
        )}
    </Wrapper>
    )
}

export default Cards;
