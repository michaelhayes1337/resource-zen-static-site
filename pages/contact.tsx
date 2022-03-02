import React from 'react';
import Head from 'next/head';
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
} from '@mui/material';
import { SvgIconProps } from '@mui/material/SvgIcon';
import EmailIcon from '../assets/icons/emailIcon';
import LocationIcon from '../assets/icons/locationIcon';
import MobileIcon from '../assets/icons/mobileIcon';
import BlobBackground from '../assets/backgrounds/blobBackground';
import ContactForm from '../components/contactForm';
type ContactDetail = {
  icon: (props: SvgIconProps) => JSX.Element;
  content: string;
  type: string;
};
const contactDetailList: ContactDetail[] = [
  {
    icon: LocationIcon,
    content: '4 Havenga Street, Upper Oakdale Bellville, Cape Town',
    type: 'location',
  },
  {
    icon: EmailIcon,
    content: 'info@al.co.za',
    type: 'email',
  },
  {
    icon: MobileIcon,
    content: '+27 21 949 4080',
    type: 'number',
  },
];
type Props = {};

const Contact = (props: Props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'));

  const getContactDetailRef = (type: string) => {
    let href = '';
    switch (type) {
      case 'location':
        href = 'https://goo.gl/maps/aYiig2M98gT4yNXD7';
        break;
      case 'email':
        href = 'mailto:info@al.co.za';
        break;
      case 'number':
        href = 'tel:+27219494080';
        break;
    }
    return href;
  };
  return (
    <Container maxWidth="xl">
      <Head>
        <title key="title">Contact Us</title>
      </Head>
      <BlobBackground
        sx={
          isMatch
            ? {
                position: 'absolute',
                zIndex: '-20',
                width: '110%',
                right: '-10%',
                top: '10%',
              }
            : {
                position: 'absolute',
                zIndex: '-20',
                width: '110%',
                right: '-10%',
                top: '15%',
              }
        }
      ></BlobBackground>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h2" sx={{ marginBottom: '5vh' }}>
            <span style={{ color: '#49b295' }}>Resource</span>{' '}
            <span style={{ color: '#6295D2' }}>Zen</span> would love to hear
            from you
          </Typography>
          <Typography variant="h3">Contact Us</Typography>
          <List>
            {contactDetailList.map((contact, index) => {
              const iconStyling = {
                fontSize: 40,
              };
              return (
                <a
                  href={getContactDetailRef(contact.type)}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {contact.type === 'email' ? (
                        <EmailIcon sx={iconStyling} />
                      ) : contact.type === 'location' ? (
                        <LocationIcon sx={iconStyling} />
                      ) : (
                        <MobileIcon sx={iconStyling} />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={contact.content} />
                  </ListItemButton>
                </a>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={6}>
          <ContactForm></ContactForm>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

{
  /* <div className="contactPage">
      <Head>
          <title key="title">Contact</title>
      </Head>
      <div className="textContent">
        <h1>
          <span id="spanGreen">Resource</span> <span id="spanBlue">Zen</span>{" "}
          would love to hear from you
        </h1>
        <h2>Contact Us</h2>
        <div className="contactItem">
          <LocationIcon />
          <h3>4 Havenga Street, Upper Oakdale Bellville, Cape Town</h3>
        </div>
        <div className="contactItem">
            <EmailIcon />
          <h3>info@al.co.za</h3>
        </div>
        <div className="contactItem">
            <MobileIcon />
          <h3>+27 21 949 4080</h3>
        </div>
        
      </div>
      <form action="">
          <h1>Get in Touch</h1>
          <label htmlFor="name">Name</label>
          <input type="text" />
          <label htmlFor="contact">Contact Number</label>
          <input type="text" />
          <label htmlFor="email">Email</label>
          <input type="text" />
          <label htmlFor="message">Message</label>
          <input type="text" />
          <button>Send</button>
      </form>
    </div> */
}
