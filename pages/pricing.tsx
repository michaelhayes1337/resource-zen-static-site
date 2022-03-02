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
import BlobBackground from '../assets/backgrounds/blobBackground';
type Props = {};
type Card = {
  id: string;
  name: string;
  price: number;
  content: string;
};
const cardsData: Card[] = [
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
  const [cards, setCards] = useState(cardsData);
  // useEffect(() => {
  //   if (isMatch) {
  //     setSelected('2');
  //   }
  // }, [isMatch]);

  function compare(a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }

  const changeSelected: (str: string) => void = (selectedID) => {
    if (!isMatch) {
      setSelected(selectedID);
      const onlySelected = cards.filter((card) => {
        return card.id === selectedID;
      });
      const onlyUnselected = cards.filter((card) => {
        return card.id !== selectedID;
      });
      onlyUnselected.sort(compare);
      // const tempSelected = isMatch
      //   ? [onlySelected[0], onlyUnselected[0], onlyUnselected[1]]
      //   : [onlyUnselected[0], onlySelected[0], onlyUnselected[1]];
      const tempSelected = [
        onlyUnselected[0],
        onlySelected[0],
        onlyUnselected[1],
      ];
      setCards(tempSelected.slice());
    }
  };
  const purchaseHandler = (id: string) => {
    console.log('Purchase : ', id);
  };
  // isMatch
  //   ? changeSelected('1')
  //   : () => {
  //       // do nothing
  //     };
  // const dataSorted = [...cardsData];
  // [dataSorted[1], dataSorted[selected]] = [dataSorted[selected], dataSorted[1]];
  return (
    <Container maxWidth="xl" sx={{ display: 'grid', placeItems: 'center' }}>
      <Head>
        <title key="title">Pricing</title>
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
                top: '0%',
              }
        }
      ></BlobBackground>
      <Typography variant="h2" sx={{ marginBottom: '10vh' }}>
        <span style={{ color: '#49b295' }}>Resource</span>{' '}
        <span style={{ color: '#6295D2' }}>Zen</span> Pricing Plans
      </Typography>
      <Grid container spacing={2} sx={{ width: '80%' }}>
        {cards.map((card, index) => {
          const isMainCard = card.id === selected;
          const stylingPaper = isMainCard
            ? {
                backgroundColor: '#5F9BE4',
                border: '5px solid #E2EFFF',
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
            <Grid item xs={12} lg={4} key={card.name} sx={{ ...stylingGrid }}>
              <Paper
                onClick={changeSelected.bind(null, card.id)}
                color="secondary"
                style={{
                  border: '5px solid #5f9be4',
                  backgroundColor: '#E2EFFF',
                  borderRadius: '50px',
                  height: '65vh',
                  padding: '20px',
                  display: 'grid',
                  placeItems: 'center',
                  cursor: 'pointer',
                  ...stylingPaper,
                }}
                elevation={isMainCard ? 20 : 0}
              >
                <Typography
                  variant="h4"
                  textAlign="center"
                  sx={{ fontFamily: 'Poppins', ...stylingFonts }}
                >
                  {card.name}
                </Typography>
                <Typography
                  variant="h2"
                  textAlign="center"
                  sx={{ fontFamily: 'Poppins' }}
                >
                  R{card.price}
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
                  R{card.content}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ margin: 'auto 0', ...stylingButton }}
                  onClick={purchaseHandler.bind(null, card.id)}
                >
                  Purchase
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

{
  /* <div className="pricingPage">
        <Head>
          <title key="title">Pricing</title>
        </Head>
        <h1><span id='spanGreen'>Resource</span> <span id='spanBlue'>Zen&apos;s</span> Pricing Plans</h1>
        <div className="pricingCards">
            <div className="lower">
                <div className="card">
                    <h2>First Plan</h2>
                    <h1>R100</h1>
                    <p>Per Month</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aut veritatis obcaecati ratione. Reprehenderit, alias rem enim laboriosam modi voluptatum voluptatibus voluptatem provident magnam repellendus! Aliquid a error et incidunt!</p>
                    <button>Purchase</button>
                </div>
                <div className="card">
                    <h2>First Plan</h2>
                    <h1>R100</h1>
                    <p>Per Month</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aut veritatis obcaecati ratione. Reprehenderit, alias rem enim laboriosam modi voluptatum voluptatibus voluptatem provident magnam repellendus! Aliquid a error et incidunt!</p>
                    <button>Purchase</button>
                </div>
            </div>
            <div className="upper">
            <div className="card">
                    <h2>First Plan</h2>
                    <h1>R100</h1>
                    <p>Per Month</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aut veritatis obcaecati ratione. Reprehenderit, alias rem enim laboriosam modi voluptatum voluptatibus voluptatem provident magnam repellendus! Aliquid a error et incidunt!</p>
                    <button>Purchase</button>
                </div>
            </div>
        </div>
    </div> */
}
