import type { NextPage } from 'next';

import { Flex } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Divider } from '../components/Divider';
import { Header } from '../components/Header';
import { IncentivesCollection } from '../components/IncentivesCollection';

const Home: NextPage = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
      <IncentivesCollection />
      <Divider />
    </Flex>
  );
};

export default Home;
