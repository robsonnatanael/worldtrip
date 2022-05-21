import type { NextPage } from 'next';

import { Flex } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
    </Flex>
  );
};

export default Home;
