import React from 'react';
import MultipleSelect from '../../components/MultipleSelect';
import SliderValue from '../../components/SliderValue';
import { allGenres } from '../../data/allGenres';

import { Wrapper } from './Test.styles';



const Test: React.FC = (props) =>{
    

    return (
    <Wrapper>
        {/* <SliderValue
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
         /> */}
       {/*  <MultipleSelect options={allGenres} /> */}
    </Wrapper>
    )
}

export default Test;