import React from 'react';
// Cards
import JobcardIcon from '../../../assets/icons/jobcardIcon';
import InvoiceIcon from '../../../assets/icons/invoiceIcon';
import StockIcon from '../../../assets/icons/stockIcon';

import {
  Box,
  Paper,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
type Props = {};

const HomePageFeatureSection = (props: Props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  type Service = {
    icon: (props: Props) => JSX.Element;
    title: string;
    extra?: string;
  };
  const services: Service[] = [
    {
      icon: JobcardIcon,
      title: 'JOBCARDS',
    },
    {
      icon: InvoiceIcon,
      title: 'INVOICE',
      extra: 'INTEGRATION',
    },
    {
      icon: StockIcon,
      title: 'JOBCARDS',
    },
  ];
  return (
    <Box
      sx={{
        marginTop: isMatch ? '1vh' : '65vh',
        display: 'grid',
        placeItems: 'center',
        width: '100%',
        border: 'none',
      }}
    >
      <Typography
        variant="h2"
        textAlign="center"
        sx={{ fontFamily: 'Poppins', color: 'white' }}
      >
        OUR FEATURES
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        sx={{
          fontFamily: 'Poppins',
          color: 'white',
          fontWeight: '400',
          fontSize: '24px',
        }}
      >
        Velit officia consequat duis enim velit mollit. Exercitation veniam
        consequat sunt nostrud amet.
      </Typography>

      <Grid
        container
        spacing={1}
        sx={{
          marginTop: '5vh',
        }}
      >
        {services.map((service, index) => {
          const iconStyling = {
            fontSize: 200,
          };
          return (
            <Grid
              item
              md={4}
              xs={12}
              key={service.title}
              sx={{
                border: 'none',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Paper
                sx={{
                  display: 'grid',
                  placeItems: 'center',
                  minHeight: 'fit-content',
                  height: '45vh',
                  width: '90%',
                }}
              >
                {index === 0 ? (
                  <JobcardIcon sx={iconStyling} />
                ) : index === 1 ? (
                  <InvoiceIcon sx={iconStyling} />
                ) : (
                  <StockIcon sx={iconStyling} />
                )}
                <Box
                  sx={{
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontFamily: 'Poppins', fontSize: '36px' }}
                  >
                    {service.title}
                  </Typography>
                  {service.extra && (
                    <Typography
                      variant="h4"
                      sx={{ fontFamily: 'Poppins', fontSize: '36px' }}
                    >
                      {service.extra}
                    </Typography>
                  )}
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HomePageFeatureSection;
