import { FC } from 'react';
import { RiInformationLine } from 'react-icons/ri';

import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';

export const Infos: FC = () => {
  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} color="yellow.500" fontWeight={600}>
          50
        </Heading>
        <Text fontSize={['md', 'xl']} color="text.dark" fontWeight={600}>
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} color="yellow.500" fontWeight={600}>
          60
        </Heading>
        <Text fontSize={['md', 'xl']} color="text.dark" fontWeight={600}>
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} color="yellow.500" fontWeight={600}>
          27
        </Heading>
        <Text fontSize={['md', 'xl']} color="text.dark" fontWeight={600}>
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="info.100"
                  w={['10px', '16px']}
                  h={['10px', '16px']}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>The 100 Most Popular City Destinations</PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
};
