import React, { useState } from 'react';
import Head from 'next/head';
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
  Paper,
  Button,
} from '@mui/material';
type Props = {};
type Plan = {
  id: string;
  name: string;
  price: number;
  content: string;
};
const planData: Plan[] = [
  {
    id: '1',
    name: 'Plan1',
    price: 100,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dolor iure ea voluptate nesciunt illo aspernatur eveniet rem ullam, iusto magnam officia. Magnam, laborum libero. Rem odio facilis ipsum delectus.',
  },
  {
    id: '2',
    name: 'Plan2',
    price: 200,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dolor iure ea voluptate nesciunt illo aspernatur eveniet rem ullam, iusto magnam officia. Magnam, laborum libero. Rem odio facilis ipsum delectus.',
  },
  {
    id: '3',
    name: 'Plan3',
    price: 300,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dolor iure ea voluptate nesciunt illo aspernatur eveniet rem ullam, iusto magnam officia. Magnam, laborum libero. Rem odio facilis ipsum delectus.',
  },
];
const Pricing = (props: Props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'));
  const [selected, setSelected] = useState('2');
  const [plans, setPlans] = useState(planData);

  // Compare plan ids, used to order unselected plans
  function compare(a: Plan, b: Plan) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }

  const changeSelected: (str: string) => void = (selectedID) => {
    // isMatch checks if we are on mobile
    // if we are on mobile we shouldnt do anything
    if (!isMatch) {
      // I was kinda tired when i did this so i dont really remember much, my bad will refactor at some point
      setSelected(selectedID);
      const onlySelected = plans.filter((plan) => {
        return plan.id === selectedID;
      });
      const onlyUnselected = plans.filter((plan) => {
        return plan.id !== selectedID;
      });
      onlyUnselected.sort(compare);
      const tempSelected = [
        onlyUnselected[0],
        onlySelected[0],
        onlyUnselected[1],
      ];
      setPlans(tempSelected.slice());
    }
  };
  // Button handler functionality TODO
  const purchaseHandler = (id: string) => {
    console.log('Purchase : ', id);
  };

  return (
    <Container maxWidth="xl" sx={{ display: 'grid', placeItems: 'center' }}>
      <Head>
        <title key="title">Pricing</title>
      </Head>
      <Typography variant="h2" sx={{ marginBottom: '10vh' }}>
        <span style={{ color: '#49b295' }}>Resource</span>{' '}
        <span style={{ color: '#6295D2' }}>Zen</span> Pricing Plans
      </Typography>
      <Grid container spacing={2} sx={{ width: '80%' }}>
        {plans.map((plan, index) => {
          // This is probably not the best way to do this :)
          const isMainCard = plan.id === selected;
          const stylingPaper = isMainCard
            ? {
                backgroundColor: '#5F9BE4',
                border: '10px solid #E2EFFF',
                width: isMatch ? '100%' : '120%',
                height: isMatch ? '65vh' : '110%',
              }
            : {};
          const stylingGrid = isMainCard
            ? {
                zIndex: '0',
                display: 'grid',
                placeItems: 'center',
              }
            : {};
          const stylingFonts = isMainCard
            ? {
                color: '#fff',
              }
            : {};
          const stylingButton = isMainCard
            ? {
                backgroundColor: '#fff',
                color: '#5F9BE4',
              }
            : {};
          return (
            <Grid item xs={12} lg={4} key={plan.name} sx={{ ...stylingGrid }}>
              <Paper
                onClick={changeSelected.bind(null, plan.id)}
                color="secondary"
                style={{
                  border: '10px solid #5f9be4',
                  backgroundColor: '#E2EFFF',
                  borderRadius: '50px',
                  height: '80vh',
                  padding: '20px',
                  display: 'grid',
                  placeItems: 'center',
                  cursor: 'pointer',
                  ...stylingPaper,
                }}
                elevation={isMainCard ? 20 : 0}
              >
                <Typography
                  variant="h3"
                  textAlign="center"
                  sx={{ fontFamily: 'Poppins', ...stylingFonts }}
                >
                  {plan.name}
                </Typography>
                <Typography
                  variant="h1"
                  textAlign="center"
                  sx={{ fontFamily: 'Poppins' }}
                >
                  R{plan.price}
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    sx={{
                      fontFamily: 'Poppins',
                      marginTop: '0',
                      ...stylingFonts,
                    }}
                  >
                    per month
                  </Typography>
                </Typography>

                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  sx={{ fontFamily: 'Poppins', color: 'black' }}
                >
                  R{plan.content}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={purchaseHandler.bind(null, plan.id)}
                  sx={{
                    paddingLeft: '15%',
                    paddingRight: '15%',
                    marginTop: '3%',
                    marginBottom: '3%',
                    fontWeight: '700',
                    ...stylingButton,
                  }}
                >
                  <Typography variant="h5">PURCHASE</Typography>
                </Button>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default Pricing;
