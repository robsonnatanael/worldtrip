import { FC } from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Flex, Grid, Icon, Image } from '@chakra-ui/react';

export const Header: FC = () => {
  const { asPath } = useRouter();
  const notHomePage = asPath !== '/';

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
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}
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
