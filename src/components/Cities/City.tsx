import { FC } from 'react';

import { Box, Heading, Image, Flex, Text } from '@chakra-ui/react';

interface CityProps {
  cityImage: string;
  capital: string;
  country: string;
  flag: string;
}

export const City: FC<CityProps> = (props) => {
  const { cityImage, capital, country, flag } = props;

  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image
        src={`/assets/images/${cityImage}.png`}
        alt={capital}
        h="170px"
        w="100%"
      />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.500"
        borderTop="0"
        borderRadius="0 0 4px 4px"
      >
        <Flex direction="column">
          <Heading fontWeight={600} fontSize={['xl']}>
            {capital}
          </Heading>
          <Text>{country}</Text>
        </Flex>
        <Image
          src={`/assets/images/flags/${flag}.png`}
          alt={flag}
          w="30px"
          h="30px"
          borderRadius={['50%']}
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
};
