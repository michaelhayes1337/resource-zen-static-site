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
  Box,
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
type Props = {};

interface IFormInput {
  title: string;
  email: string;
  suggestion: string;
}
// Lets try avoid any spelling mistakes

/* eslint-disable */
enum InputFields {
  TITLE = 'title',
  EMAIL = 'email',
  SUGGESTION = 'suggestion',
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
    id: InputFields.TITLE,
    label: 'Your title here',
    placeholder: 'Please enter your title',
    rules: {
      required: { value: true, message: 'Please enter a title' },
      minLength: {
        value: 3,
        message: 'Please enter a title between 3-16 characters.',
      },
      maxLength: {
        value: 16,
        message: 'Please enter a title between 3-16 characters.',
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
    id: InputFields.SUGGESTION,
    label: 'Your suggestion here',
    placeholder: 'Please enter your suggestion',
    rules: {
      required: { value: true, message: 'Please enter a suggestion' },
      minLength: {
        value: 20,
        message: 'This suggestion is too short',
      },
      maxLength: {
        value: 500,
        message: 'This suggestion is too long',
      },
    },
    multi: true,
  },
];
const SuggestionForm = (props: Props) => {
  const {
    register, // add a field to form handler
    formState: { errors }, // get errorstate from form
    handleSubmit, // custom submit handler from react-hook-forms
    setValue, // lets us change the value of inputs
  } = useForm<IFormInput>();

  // check if there is an error state for a specific field and if there is return the error message
  const checkForError = (field: InputFields) => {
    switch (field) {
      case InputFields.TITLE:
        if (errors.title) {
          return errors.title.message;
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
      case InputFields.SUGGESTION:
        if (errors.suggestion) {
          return errors.suggestion.message;
        } else {
          return false;
        }
        break;
      default:
        return false;
        break;
    }
  };
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('DATA FROM FORM', data);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      style={{
        border: '1px solid red',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '5vh' }}>
        Do you have a feature in mind for
        <span style={{ color: '#49b295' }}>Resource</span>{' '}
        <span style={{ color: '#6295D2' }}>Zen</span> ?
      </Typography>
      <Grid container spacing={2}>
        {inputData.map((input) => {
          const errorMessage = checkForError(input.id);
          const sizeOfInput = input.id === InputFields.SUGGESTION ? 12 : 6;
          return (
            <Grid item xs={sizeOfInput} key={input.id} sx={{ width: '100%' }}>
              <Typography
                variant="subtitle1"
                sx={{
                  textTransform: 'capitalize',
                  marginBottom: '10px',
                  marginTop: '10px',
                  color: '#5F9BE4',
                  fontWeight: '500px',
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
      </Grid>
      <Box>
        <Button variant="contained" type="submit">
          submit
        </Button>
        <Button variant="text" type="submit" color="secondary">
          Click here to Login
        </Button>
      </Box>
    </form>
  );
};

export default SuggestionForm;
