import { FC } from 'react';

import { Flex, Grid, Image } from '@chakra-ui/react';

export const Header: FC = () => {
  return (
    <Flex
      as="header"
      bg="text.light"
      mx="auto"
      w="100%"
      h={['3.125rem', '6.25rem']}
      align="center"
      justify="center"
    >
      <Grid
        w="100%"
        h="100%"
        mx="auto"
        maxW="1160px"
        templateColumns="repeat(3, 1fr)"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="/assets/images/logo.svg"
          alt="logo worldtrip"
          gridColumn="2"
          w={['5.0625rem', '11.5rem']}
          justifySelf="center"
        />
      </Grid>
    </Flex>
  );
};
