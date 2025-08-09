import React from 'react';

const Header = (): React.ReactElement => (
  <header className="flex flex-col gap-2 items-center xs:px-16">
    <h1 className="text-md xs:text-xl font-bold">Pablo Apausa</h1>
    <p className="text-md xs:text-xl text-center">
      Software Engineer — Artificial Intelligence at Technical University of Madrid
    </p>
  </header>
);

export default Header;
