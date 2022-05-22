import type { NextPage } from 'next';

import { Flex, Box, Text, Heading } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Divider } from '../components/Divider';
import { Header } from '../components/Header';
import { IncentivesCollection } from '../components/IncentivesCollection';
import { Slider } from '../components/Slider';

const Home: NextPage = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
      <IncentivesCollection />
      <Divider />
      <Heading
        textAlign="center"
        fontWeight="500"
        fontSize={['lg', '3xl', '4xl']}
        mb={['5', '14']}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <Slider />
    </Flex>
  );
};

export default Home;
