import React from 'react';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  OutlinedInput,
  FormHelperText,
  Button,
  IconButton,
  Grid,
  Typography,
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
type Props = {};

// Define inputs and their types for the form data handler
interface IFormInput {
  name: string;
  number: string;
  email: string;
  message: string;
}
// Lets try avoid any spelling mistakes

/* eslint-disable */
enum InputFields {
  NAME = 'name',
  NUMBER = 'number',
  EMAIL = 'email',
  MESSAGE = 'message',
}
/* eslint-enable */

// The type of input fields
type Input = {
  // ID should correlate to one of the defined input fields
  id: InputFields;
  // Label is the initial text that indicated to the user what to do
  label: string;
  // Placeholder contains some default value or an instruction you want to linger
  placeholder: string;
  // Rules are unique to each field
  rules: {};
  // Only some fields will be multiline inputs
  multi?: boolean;
};

const inputData: Input[] = [
  // NAME
  {
    id: InputFields.NAME,
    label: 'Your name here',
    placeholder: 'Please enter your name',
    rules: {
      required: { value: true, message: 'Please enter a name' },
      minLength: {
        value: 3,
        message: 'Please enter a name between 3-16 characters.',
      },
      maxLength: {
        value: 16,
        message: 'Please enter a username between 3-16 characters.',
      },
    },
  },
  // NUMBER
  {
    id: InputFields.NUMBER,
    label: 'Your number here',
    placeholder: 'Please enter your contact number',
    rules: {
      required: { value: true, message: 'Please enter a number' },
      minLength: {
        value: 10,
        message: 'Enter a 10 digit number',
      },
      maxLength: {
        value: 10,
        message: 'Enter a 10 digit number',
      },
      pattern: {
        value: /\d{10}/,
        message: 'Invalid contact number format',
      },
    },
  },
  // EMAIL
  {
    id: InputFields.EMAIL,
    label: 'Your email here',
    placeholder: 'Please enter your email address',
    rules: {
      required: { value: true, message: 'Please enter a email' },
      minLength: {
        value: 3,
        message: 'This email is too long',
      },
      maxLength: {
        value: 256,
        message: 'This email is too short',
      },
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: 'Invalid email format',
      },
    },
  },
  // MESSAGE
  {
    id: InputFields.MESSAGE,
    label: 'Your message here',
    placeholder: 'Please enter your message',
    rules: {
      required: { value: true, message: 'Please enter a message' },
      minLength: {
        value: 20,
        message: 'This message is too short',
      },
      maxLength: {
        value: 500,
        message: 'This message is too long',
      },
    },
    multi: true,
  },
];

const testForm = (props: Props) => {
  const {
    register, // add a field to form handler
    formState: { errors }, // get errorstate from form
    handleSubmit, // custom submit handler from react-hook-forms
    setValue, // lets us change the value of inputs
  } = useForm<IFormInput>();

  // check if there is an error state for a specific field and if there is return the error message
  const checkForError = (field: InputFields) => {
    switch (field) {
      case InputFields.NAME:
        if (errors.name) {
          return errors.name.message;
        } else {
          return false;
        }
        break;
      case InputFields.NUMBER:
        if (errors.number) {
          return errors.number.message;
        } else {
          return false;
        }
        break;
      case InputFields.EMAIL:
        if (errors.email) {
          return errors.email.message;
        } else {
          return false;
        }
        break;
      case InputFields.MESSAGE:
        if (errors.message) {
          return errors.message.message;
        } else {
          return false;
        }
        break;
    }
  };

  // TODO add api call

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('DATA FROM FORM', data);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      style={{
        border: '5px solid #E2EFFF',
        borderRadius: '50px',
        backgroundColor: 'white',
        padding: '5% 10%',
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} sx={{ display: 'grid', placeContent: 'center' }}>
          <Typography variant="h4" sx={{ color: '#5F9BE4' }}>
            Get in Touch
          </Typography>
        </Grid>
        {inputData.map((input) => {
          const errorMessage = checkForError(input.id);
          return (
            <Grid item xs={12} key={input.id} sx={{ width: '100%' }}>
              <Typography
                variant="subtitle1"
                sx={{
                  textTransform: 'capitalize',
                  marginBottom: '10px',
                  marginTop: '10px',
                  color: '#5F9BE4',
                }}
              >
                {input.id}
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <InputLabel
                  htmlFor={input.id}
                  color={errorMessage ? 'error' : 'secondary'}
                >
                  Your {input.id} here
                </InputLabel>
                <OutlinedInput
                  id={input.id}
                  placeholder={input.placeholder}
                  error={errorMessage ? true : false}
                  required
                  label={input.label}
                  color="secondary"
                  multiline={input.multi ? true : false}
                  minRows={4}
                  maxRows={6}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          setValue(`${input.id}`, '');
                        }}
                      >
                        <CancelOutlinedIcon color="secondary" />
                      </IconButton>
                    </InputAdornment>
                  }
                  {...register(input.id, {
                    ...input.rules,
                  })}
                />
                {errorMessage ? (
                  <FormHelperText
                    id="component-helper-text"
                    sx={{ color: 'red' }}
                  >
                    {errorMessage}
                  </FormHelperText>
                ) : null}
              </FormControl>
            </Grid>
          );
        })}
        <Button
          type="submit"
          fullWidth
          sx={{ backgroundColor: '#5F9BE4', marginTop: '5%' }}
        >
          submit
        </Button>
      </Grid>
    </form>
  );
};

export default testForm;
