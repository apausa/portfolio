'use client';

import React from 'react';

import { heading } from '@/lib/constants';

const Header = (): React.ReactElement => (
  <header className="flex flex-col gap-2 w-full text-center">
    <h1 className="text-md xs:text-xl font-bold">Pablo Apausa</h1>
    <h2 className="text-md xs:text-xl">{heading}</h2>
  </header>
);

export default Header;
