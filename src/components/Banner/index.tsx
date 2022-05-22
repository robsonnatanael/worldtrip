import { FC } from 'react';

import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

export const Banner: FC = () => {
  return (
    <Flex
      w="100%"
      h={['163px', '250px', '250px', '335px']}
      bgImage="url('/assets/images/banner.jpg')"
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="100%"
        mx="auto"
        px={['4', '10', '15', '20', '36']}
      >
        <Box>
          <Heading
            color="text.light"
            fontSize={['xl', '2l', '2l', '2l', '4xl']}
            fontWeight="500"
          >
            5 continentes,
            <br />
            infinitas posibilidades.
          </Heading>
          <Text
            color="info.light"
            fontSize={['0.8rem', 'xl']}
            fontWeight="400"
            mt="5"
            maxW={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image
          src="/assets/images/airplane.svg"
          alt="avião amarelo"
          display={['none', 'none', 'block']}
          w={['300px', '300px', '300px', '430px']}
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
};
