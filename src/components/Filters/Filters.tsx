import React from 'react';
import { allGenres } from '../../data/allGenres';
import { useAppDispatch, useAppSelector } from '../../hook';
import { initialStateFiltersType, MovieType, setFilters } from '../../store/filtersSlice';
import Button from '../Button';
import CheckBox from '../CheckBox';
import MultipleSelect from '../MultipleSelect';
import SliderValue from '../SliderValue';
import { ButtonWrapper, Wrapper, WrapperAllInputs, WrapperCheckbox, WrapperInput } from './Filters.styles';
import { FiltersProps } from './Filters.types';



const Filters: React.FC<FiltersProps> = ({mobile}) =>{

    const filters = useAppSelector(state => state.filters);
    const dispatch = useAppDispatch()
    const [valueRating, setValueRating] = React.useState<number[]>(filters.rating);
    const [valueYear, setValueYear] = React.useState<number[]>(filters.year);
    const [valueGenre, setValueGenre] = React.useState<string[]>(filters.genre);
    const [typeOfMovies, setTypeOfMovies] = React.useState(filters.typeOfMovies);
    const [selectedTypeOfMovies, setSelectedTypeOfMovies] = React.useState(filters.selectedTypeOfMovies);

    console.log(filters)
    const changeFilters = () => {
        const createfilters: initialStateFiltersType ={
            genre: valueGenre,
            rating: valueRating,
            sortByRelease: filters.sortByRelease,
            year: valueYear,
            typeOfMovies: typeOfMovies,
            selectedTypeOfMovies: selectedTypeOfMovies,
        }
        dispatch(setFilters(createfilters))
    }
    
    const changeValueRating:any = (e: any) => {
        setValueRating(e)
    }

    const changeValueYear:any = (e: any) => {
        setValueYear(e)
    }

    const changeIncludedTypeOfMovies = (typeNumber: string) => {
        console.log('typeNumber: '+ typeNumber)
        let newTypeOfMovies = typeOfMovies.map((item) => {
              if (item.typeNumber === typeNumber) {
                return {
                  ...item,
                  included: !item.included
                };
              }
              return item;
            });
        const typeArray = newTypeOfMovies.filter(item => item.included).map(item => item.typeNumber);
        setTypeOfMovies(newTypeOfMovies)
        setSelectedTypeOfMovies(typeArray)
        /* setTypeOfMovies((prevTypeOfMovies) => {
          return prevTypeOfMovies.map((item) => {
            if (item.typeNumber === typeNumber) {
              return {
                ...item,
                included: !item.included
              };
            }
            return item;
          });
        }); */
      };
    
    return (
    <Wrapper mobile={mobile}>
        <WrapperAllInputs>
        <WrapperCheckbox>
        {typeOfMovies.map((item, index) => (
        <CheckBox
            checked={item.included}
            id={item.typeNumber}
            label={item.name}
            name={item.name}
            onChange={(e) => changeIncludedTypeOfMovies(item.typeNumber)}
        />
        ))}
        </WrapperCheckbox>
            <SliderValue
                title='Рейтинг'
                integer={false}
                min={1}
                max={10}
                step={0.1}
                defaulFirstValue={filters.rating[0]}
                defaulSecondValue={filters.rating[1]}
                onChangeValue={changeValueRating}
            />
            <SliderValue
                title='Год'
                integer={true}
                min={1960}
                max={2023}
                step={1}
                defaulFirstValue={filters.year[0]}
                defaulSecondValue={filters.year[1]}
                onChangeValue={changeValueYear}
            />
            <WrapperInput>
                <p>Жанры</p>
                <MultipleSelect options={allGenres} onChange={setValueGenre}/>
            </WrapperInput>
         </WrapperAllInputs>
         <ButtonWrapper>
            <Button onClick={changeFilters}>Применить&nbsp;фильтры</Button>
         </ButtonWrapper>
         
    </Wrapper>
    )
}

export default Filters;