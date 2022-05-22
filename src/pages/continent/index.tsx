import { NextPage } from 'next';

import { Flex } from '@chakra-ui/react';

import { Content } from '../../components/Content';
import { Infos } from '../../components/Content/infos';
import { ContinentBanner } from '../../components/ContinentBanner';
import { Header } from '../../components/Header';

const Continent: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content />
      </Flex>
    </Flex>
  );
};

export default Continent;
