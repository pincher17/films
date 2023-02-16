import React, { useState } from 'react';

import Select from 'react-select';
import { MultipleSelectProps } from './MultipleSelect.types';




const MultipleSelect: React.FC<MultipleSelectProps> = ({options}) => {

  const [selectedOption, setSelectedOption] = useState<any | null>(null);

  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      options={options}
    name="colors"
    onChange={setSelectedOption}
    styles={{
      control: (baseStyles, state) => ({
        ...baseStyles,
        color: 'white',
        background: '#0e0e0e',
        width: '300px',
        borderColor: state.isFocused ? '#747474' : 'rgb(52 52 52)',
        boxShadow: 'none',
      }),
    }}
    />
  );
}

export default MultipleSelect