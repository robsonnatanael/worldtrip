import { NextPage } from 'next';

import { ContinentBanner } from '../../components/ContinentBanner';
import { Header } from '../../components/Header';

const Continent: NextPage = () => {
  return (
    <>
      <Header />
      <ContinentBanner />
    </>
  );
};

export default Continent;
