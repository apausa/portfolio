import React from 'react';

import P5Sketch from '@/components/Background';
import Header from '@/components/Header';
import Main from '@/components/Main';

const Home: React.FC = () => (
    <React.Fragment>
      <P5Sketch/>
      <Header/>
      <Main/>
    </React.Fragment>
);

export default Home;
