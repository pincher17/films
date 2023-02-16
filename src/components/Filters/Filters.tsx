import React from 'react';
import { allGenres } from '../../data/allGenres';
import MultipleSelect from '../MultipleSelect';
import SliderValue from '../SliderValue';
import { Wrapper } from './Filters.styles';



const Filters: React.FC = (props) =>{
    

    return (
    <Wrapper>
        <SliderValue
            title='Рейтинг'
            integer={false}
            min={1}
            max={10}
            step={0.1}
            defaulFirstValue={6}
            defaulSecondValue={10}
         />
        <SliderValue
            title='Год'
            integer={true}
            min={1960}
            max={2023}
            step={1}
            defaulFirstValue={1990}
            defaulSecondValue={2023}
         />
        <MultipleSelect options={allGenres} />
    </Wrapper>
    )
}

export default Filters;