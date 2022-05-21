import { FC } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import { IncentivesCollectionItem } from './IncentivesCollectionItem';

export const IncentivesCollection: FC = () => {
  const incentives = [
    {
      icon: 'cocktail',
      text: 'vida noturna',
    },
    {
      icon: 'surf',
      text: 'praia',
    },
    {
      icon: 'building',
      text: 'moderno',
    },
    {
      icon: 'museum',
      text: 'clássico',
    },
    {
      icon: 'earth',
      text: 'e mais...',
    },
  ];

  const hasParity = incentives.length % 2 == 0;
  console.log(hasParity);

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
      {incentives.map((incentive, index) => (
        <>
          {hasParity ? (
            <GridItem>
              <IncentivesCollectionItem
                key={incentive.icon}
                icon={incentive.icon}
                text={incentive.text}
              />
            </GridItem>
          ) : (
            <>
              {index + 1 != incentives.length ? (
                <GridItem>
                  <IncentivesCollectionItem
                    key={incentive.icon}
                    icon={incentive.icon}
                    text={incentive.text}
                  />
                </GridItem>
              ) : (
                <GridItem colSpan={[2, 2, 2, 1]}>
                  <IncentivesCollectionItem
                    key={incentive.icon}
                    icon={incentive.icon}
                    text={incentive.text}
                  />
                </GridItem>
              )}
            </>
          )}
        </>
      ))}
    </Grid>
  );
};
