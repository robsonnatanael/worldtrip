import { FC } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import { IncentivesCollectionItem } from './IncentivesCollectionItem';

export const IncentivesCollection: FC = () => {
  return (
    <Grid
      w="100%"
      maxW="1160px"
      mx="auto"
      mt={['10', '32']}
      justifyContent="space-between"
      alignContent="center"
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      gap={[1, 5]}
    >
      <GridItem>
        <IncentivesCollectionItem icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <IncentivesCollectionItem icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <IncentivesCollectionItem icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <IncentivesCollectionItem icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <IncentivesCollectionItem icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
};
