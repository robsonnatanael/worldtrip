import { FC } from 'react';

import { Box } from '@chakra-ui/react';

export const Divider: FC = () => {
  return (
    <Box
      w={['60px', '90px']}
      h="2px"
      mx="auto"
      my={['9', '20']}
      bg="text.dark"
    />
  );
};
