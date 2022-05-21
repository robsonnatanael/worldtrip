import { FC } from 'react';

import { Flex, useBreakpointValue, Image, Text } from '@chakra-ui/react';

interface IncentivesCollectionItemProps {
  icon: string;
  text: string;
}

export const IncentivesCollectionItem: FC<IncentivesCollectionItemProps> = ({
  icon,
  text,
}) => {
  const isMobile = useBreakpointValue({ base: false, sm: true });

  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      {isMobile ? (
        <Image
          src={`/assets/images/${icon}.svg`}
          alt=""
          w="85px"
          h="85px"
          mb="6"
        />
      ) : (
        <Text color="yellow.500" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text color="text.dark" fontWeight="600" fontSize={['md', 'xl', '2xl']}>
        {text}
      </Text>
    </Flex>
  );
};
