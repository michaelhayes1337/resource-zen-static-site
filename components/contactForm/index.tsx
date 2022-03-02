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
} from '@mui/material';
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
  message: string;
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
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="name"
            label="Type your name here"
            variant="outlined"
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
          <TextField
            id="email"
            label="Type your email here"
            variant="outlined"
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="number"
            label="Type your contact number here"
            variant="outlined"
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
          <TextField
            id="messageinput"
            label="Type your message here"
            variant="outlined"
            type="text"
            error={errors.messageinput ? true : false}
            helperText={
              errors.messageinput ? errors.messageinput.message : null
            }
            {...register('messageinput', {
              required: { value: true, message: 'Please enter a valid email' },
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
      </Grid>

      <TextField
        id="number"
        label="Type your contact number here"
        variant="outlined"
      />
      <TextField id="email" label="Type your email here" variant="outlined" />
      <TextField
        id="message"
        label="Type your message here"
        variant="outlined"
      />
      <Button variant="contained" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default ContactForm;
