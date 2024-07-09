import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='bg-[#292929] text-white  h-[60px]'>
      <FormControl sx={{ minWidth: 80, marginLeft: 6 }}>
        <Select
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          style={{outline:'none',height:'40px',marginTop:10}}
          
          sx={{
            color: 'white',
            '.MuiSvgIcon-root': { color: 'white' },
            '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '.MuiList-root': {
              backgroundColor: '#292929',
            },
            '.MuiMenuItem-root': {
              color: 'white',
            }
          }}
          displayEmpty
        >
          <MenuItem value="">
            <em>0</em>
          </MenuItem>
          <MenuItem value={20}>1</MenuItem>
          <MenuItem value={21}>2</MenuItem>
          <MenuItem value={22}>3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
