import React, { useState } from 'react';
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
  Paper,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  FormHelperText,
} from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useForm, SubmitHandler } from 'react-hook-form';
type Inputs = {
  example: string;
  exampleRequired: string;
};
type Props = {};

interface IFormInput {
  name: string;
  number: string;
  email: string;
  messageinput: string;
}
const ContactForm = (props: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('Submtted Form');
    console.log(data);
  };
  console.log('Errors', errors);

  const typographyStyling = {
    marginBottom: '10px',
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      style={{
        border: '5px solid #E2EFFF',
        borderRadius: '50px',
        backgroundColor: 'white',
        padding: '5% 5%',
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} sx={{ display: 'grid', placeContent: 'center' }}>
          <Typography variant="h4" sx={{ color: '#5F9BE4' }}>
            Get in Touch
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={typographyStyling}>
            Name
          </Typography>
          <TextField
            id="name"
            label="Type your name here"
            color="secondary"
            variant="outlined"
            fullWidth
            required
            type="text"
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name.message : null}
            {...register('name', {
              required: { value: true, message: 'Please enter a name' },
              minLength: {
                value: 3,
                message: 'Please enter a name between 3-16 characters.',
              },
              maxLength: {
                value: 16,
                message: 'Please enter a username between 3-16 characters.',
              },
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={typographyStyling}>
            Contact Number
          </Typography>
          <TextField
            id="number"
            label="Type your contact number here"
            color="secondary"
            variant="outlined"
            fullWidth
            required
            type="text"
            error={errors.number ? true : false}
            helperText={errors.number ? errors.number.message : null}
            {...register('number', {
              required: { value: true, message: 'Please enter a valid email' },
              minLength: {
                value: 10,
                message: 'Please enter a valid number',
              },
              maxLength: {
                value: 10,
                message: 'Please enter a valid number',
              },
              pattern: {
                value: /\d{10}/,
                message: 'Invalid number format',
              },
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={typographyStyling}>
            Email
          </Typography>
          <TextField
            id="email"
            label="Type your email here"
            color="secondary"
            variant="outlined"
            fullWidth
            required
            type="text"
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : null}
            {...register('email', {
              required: { value: true, message: 'Please enter a valid email' },
              minLength: {
                value: 3,
                message: 'This email is too short',
              },
              maxLength: {
                value: 256,
                message: 'This email is too long',
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'invalid format',
              },
            })}
          >
            test
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={typographyStyling}>
            Message
          </Typography>
          <TextField
            id="message"
            label="Type your message here"
            color="secondary"
            variant="outlined"
            fullWidth
            required
            type="text"
            multiline
            minRows={4}
            maxRows={6}
            error={errors.messageinput ? true : false}
            helperText={
              errors.messageinput ? errors.messageinput.message : null
            }
            {...register('messageinput', {
              required: { value: true, message: 'Please enter a message' },
              minLength: {
                value: 20,
                message: 'This message is too short',
              },
              maxLength: {
                value: 500,
                message: 'This message is too long',
              },
            })}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: 'grid', placeContent: 'center', width: '100%' }}
        >
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            sx={{ marginTop: '30px' }}
          >
            SEND
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;

{
  /* <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
          <OutlinedInput
            id="name"
            label="Type your name here"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={emptyField}
                  onMouseDown={emptyField}
                  edge="end"
                >
                  <CancelOutlinedIcon></CancelOutlinedIcon>
                </IconButton>
              </InputAdornment>
            }
            required
            fullWidth
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name.message : null}
            {...register('name', {
              required: { value: true, message: 'Please enter a name' },
              minLength: {
                value: 3,
                message: 'Please enter a name between 3-16 characters.',
              },
              maxLength: {
                value: 16,
                message: 'Please enter a username between 3-16 characters.',
              },
            })}
          /> */
}

// I HATE FORMS
// {
//           inputs.map((input)=>{
//             return (
//               <Grid item xs={12} key={input.id}>
//                 <Typography variant="subtitle1">{input.id}</Typography>
//                 <TextField
//                   id={input.id}
//                   label={input.label}
//                   color="secondary"
//                   variant="outlined"
//                   fullWidth
//                   required
//                   type={input.type? input.type : 'text'}
//                   error={errors. ? true : false}
//                   helperText={errors.name ? errors.name.message : null}
//                   {...register(`${input.id}`, {
//                     ...input.rules
//                   })}
//                 />
//               </Grid>
//             );
//           })
//         }
