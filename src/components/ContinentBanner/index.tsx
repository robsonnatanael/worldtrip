import { FC } from 'react';

import { Flex, Heading } from '@chakra-ui/react';

export const ContinentBanner: FC = () => {
  return (
    <Flex
      w="100%"
      h={['150px', '300px', '500px']}
      px={['0', '0', '36']}
      pt={['0', '0', '72']}
      bgImage="url(/assets/images/europe_2.png)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={['center', 'center', 'flex-start']}
    >
      <Heading
        textAlign={['center', 'left']}
        fontSize={['1.75rem', '5xl']}
        color="text.light"
        fontWeight="600"
      >
        Europa
      </Heading>
    </Flex>
  );
};
