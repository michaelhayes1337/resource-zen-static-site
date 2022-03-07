import React from 'react';
import Head from 'next/head';
import SuggestionForm from '../components/roadmapPageComponents/suggestionForm';
import { Container, Grid } from '@mui/material';

type Props = {};

const Roadmap = (props: Props) => {
  return (
    <Container maxWidth="xl">
      <Head>
        <title key="title">Roadmap</title>
      </Head>
      <Grid container spacing={2}>
        <SuggestionForm></SuggestionForm>
      </Grid>
    </Container>
  );
};

export default Roadmap;
