import { Box, createTheme, Slider, ThemeProvider } from '@mui/material';
import React from 'react';
import Input from '../Input';
import { Title, Wrapper, WrapperInputs } from './SliderRating.styles';

const theme = createTheme({
    palette: {
      secondary: {
        main: '#d32929',
      },
    },
  });

const SliderRating: React.FC = (props) =>{
    
  const [value, setValue] = React.useState<number[]>([6, 10]);
/* console.log(value[0]) */
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const ChangeInputFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.replace(',', '.')
    if(+newValue <= 10){
      let newArrValue = [newValue, value[1]]
      setValue(newArrValue as number[])
    }else{
      return
    }
  }

  const ChangeInputSecond = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.replace(',', '.')
    if(+newValue <= 10){
      let newArrValue = [value[0], newValue]
      setValue(newArrValue as number[])
    }else{
      return
    }
  }

    return (
    <Wrapper>
    <Title>Рейтинг</Title>
    <WrapperInputs>
      <div>
        <Input 
          id='firstValue'
          name=''
          onChange={ChangeInputFirst} 
          type='number'
          value={value[0]}
        />
      </div>
      <Input 
        id='secondValue'
        name=''
        onChange={ChangeInputSecond} 
        type='number'
        value={value[1]}
      />
    </WrapperInputs>
    
    <ThemeProvider theme={theme}>
    <Box sx={{ width: 222 }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        step={0.1}
        min={1}
        max={10}
        color="secondary"
      />
    </Box>
    </ThemeProvider>
    </Wrapper>
    )
}

export default SliderRating;