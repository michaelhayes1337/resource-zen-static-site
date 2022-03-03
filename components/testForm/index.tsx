import React from 'react';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
} from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
type Props = {};

const testForm = (props: Props) => {
  return (
    <Box>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="end">
              <CancelOutlinedIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default testForm;
