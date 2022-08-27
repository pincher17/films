import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';
import s from './SearchInput.module.css';



export default function SearchInput(props) {

  const useStyles = makeStyles((theme) =>({
    root: {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgb(212,21,21)',
         },
         '& .MuiOutlinedInput-notchedOutline:hover': {
          borderColor: 'none',
         },
         '& .MuiOutlinedInput-root': {
          '& fieldset': {
            backgroundColor: 'rgb(18,18,18)',
            borderColor: 'rgb(36,36,36)'
          },
        }
    },
  }))
  
  const classes = useStyles();

  return (
    <div className={s.search_input}>
    <Box
      sx={{
        maxWidth: '100%',
      }}
    >
      <TextField size="small" className={classes.root} fullWidth label="Search" id="fullWidth" autoComplete='off' />
    </Box>
    </div>
  );
}