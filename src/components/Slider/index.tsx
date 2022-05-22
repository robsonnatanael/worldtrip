import { FC } from 'react';

import Link from 'next/link';

import { Flex, Heading, Text } from '@chakra-ui/react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider: FC = () => {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      h={['250px', '450px']}
      mx="auto"
      mb={['5', '10']}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="450px"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/assets/images/europe.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/continent">
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="text.light"
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  fontSize={['0.8rem', '1xl', '2xl']}
                  color="info.light"
                  fontWeight="bold"
                  mt={['2', '4']}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="450px"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/assets/images/europe.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/continent">
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="text.light"
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  fontSize={['0.8rem', '1xl', '2xl']}
                  color="info.light"
                  fontWeight="bold"
                  mt={['2', '4']}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};
