import React from 'react';
import { MenuItem, Select, Box, styled } from '@mui/material';

const CustomSelect = styled(Select)(({ theme }) => ({
  backgroundColor: '#333',
  color: 'white',
  width: '200px',
  borderRadius: '4px',
  fontSize: '16px',

  '& .MuiSvgIcon-root': {
    color: 'white',
  },
}));

function SaleMenu() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginTop:'40px',height:'10px' }}>
      <CustomSelect value={value} onChange={handleChange} displayEmpty>
      Цена
        <MenuItem value="" disabled>
          от 1млн - до 3млн
        </MenuItem>
        <MenuItem value={1}>от 1млн</MenuItem>
        <MenuItem value={2}>от 2млн</MenuItem>
        <MenuItem value={3}>от 3млн</MenuItem>
      </CustomSelect>
    </Box>
  );
}

export default SaleMenu;
