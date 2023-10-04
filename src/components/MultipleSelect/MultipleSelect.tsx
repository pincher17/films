import React, { useEffect, useState } from 'react';

import Select, { StylesConfig } from 'react-select';
import { useAppSelector } from '../../hook';
import { MultipleSelectProps } from './MultipleSelect.types';




const MultipleSelect: React.FC<MultipleSelectProps> = ({options, onChange}) => {
  const genre = useAppSelector(state => state.filters.genre);
  const [selectedOption, setSelectedOption] = useState<any | null>(genre);

  useEffect(() => {
    if(Array.isArray(selectedOption)){
      onChange(selectedOption)
    }
    }, [selectedOption])

  const colourStyles: StylesConfig = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      color: 'white',
      background: '#0e0e0e',
      width: '300px',
      borderColor: state.isFocused ? '#747474' : 'rgb(52 52 52)',
      boxShadow: 'none',
      flex: 1,
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0
    }),
    menuList: base => ({
      ...base,
      background: '#0e0e0e'
    }),
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: '#494949',
        color: 'white'
      };
    },
    multiValueLabel: (styles) => {
      return {
        ...styles,
        backgroundColor: '#494949',
        color: 'white'
      };
    },
    placeholder: (styles) => {
      return {
        ...styles,
        color: '#ffffff',
      };
    },
    multiValueRemove: (styles) => {
      return {
        ...styles,
        ':hover': {
          backgroundColor: '#d32a29',
          color: 'white',
          cursor: 'pointer'
        },
      };
    },
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        ':hover': {
          backgroundColor: isDisabled
            ? undefined
            : isSelected
            ? '#494949'
            : isFocused
            ? '#494949'
            : undefined,
          color: 'white',
          cursor: 'pointer'
        },
        backgroundColor: isDisabled
      ? undefined
      : isSelected
      ? undefined
      : isFocused
      ? '#494949'
      : undefined,
      };
    },
  } 
  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      options={options}
      name="colors"
      onChange={setSelectedOption}
      styles={colourStyles}
      value={selectedOption}
      isSearchable={false}
      placeholder={'Выбрать'}
    theme={(theme) => ({
      ...theme,
      borderRadius: 5,
      colors: {
        ...theme.colors,
        primary25: 'hotpink',
        primary: '#747474',
      },
    })}
    />
  );
}

export default MultipleSelect