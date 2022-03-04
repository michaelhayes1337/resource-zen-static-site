import React from 'react';
import Head from 'next/head';
import ContactLinksList from '../components/contactPageComponents/contactLinksList';
import ContactForm from '../components/contactPageComponents/contactForm';
import { Container, Grid } from '@mui/material';

type Props = {};

const Contact = (props: Props) => {
  return (
    <Container maxWidth="xl">
      <Head>
        <title key="title">Contact Us</title>
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ContactLinksList />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: '5% 5%' }}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
