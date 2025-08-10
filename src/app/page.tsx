'use client';

import React from 'react';

import P5Sketch from '@/components/home/Background';
import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import About from '@/components/home/main/About';
import Links from '@/components/home/main/Links';

import { Separator } from '@/components/ui/separator';

const Home: React.FC = () => (
    <React.Fragment>
      <P5Sketch/>
        <Header/>
        <main className="flex flex-col gap-4 w-full">
          <Separator/>
          <About/>
          <Separator/>
          <Links/>
          <Separator/>
        </main>
        <Footer/>
    </React.Fragment>
);

export default Home;
