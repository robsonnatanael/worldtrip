import { FC } from 'react';

import { Grid, Heading } from '@chakra-ui/react';

import { City } from './City';

export const Cities: FC = () => {
  const cities = [
    {
      cityImage: 'londres',
      capital: 'Londres',
      country: 'Reino Unido',
      flag: 'united_kingdom',
    },
    {
      cityImage: 'paris',
      capital: 'Paris',
      country: 'França',
      flag: 'france',
    },
    {
      cityImage: 'roma',
      capital: 'Roma',
      country: 'Itália',
      flag: 'italy',
    },
    {
      cityImage: 'praga',
      capital: 'República Tcheca',
      country: 'Praga',
      flag: 'czech_republic',
    },
    {
      cityImage: 'amsterda',
      capital: 'Amsterdã',
      country: 'Holanda',
      flag: 'netherlands',
    },
  ];

  return (
    <>
      <Heading fontWeight={500} fontSize={['2xl', '4xl']} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr']}
        gap={['20px', '45px']}
        alignItems="center"
        justifyContent="center"
        px={['30px', '0']}
      >
        {cities.map((city, index) => (
          <City
            key={index}
            cityImage={city.cityImage}
            capital={city.capital}
            country={city.country}
            flag={city.flag}
          />
        ))}
      </Grid>
    </>
  );
};
