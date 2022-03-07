import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';
import EmailIcon from '../../../assets/icons/emailIcon';
import LocationIcon from '../../../assets/icons/locationIcon';
import MobileIcon from '../../../assets/icons/mobileIcon';
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
type Props = {};

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
const ContactLinksList = (props: Props) => {
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
    <Box>
      <Typography variant="h1" sx={{ marginBottom: '5vh' }}>
        <span style={{ color: '#49b295' }}>Resource</span>{' '}
        <span style={{ color: '#6295D2' }}>Zen</span> would love to hear from
        you
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
                <ListItemText
                  sx={{ fontSize: '30px', fontWeight: '400' }}
                  primary={contact.content}
                />
              </ListItemButton>
            </a>
          );
        })}
      </List>
    </Box>
  );
};

export default ContactLinksList;
