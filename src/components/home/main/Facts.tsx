import React from 'react';

import { facts } from '@/lib/constants';

const Facts = (): React.ReactElement => (
  <section className="flex flex-col gap-2">
    <h3 className="text-md font-bold">You might know me for</h3>
    <ul className="text-md list-disc list-inside">
      {facts.map((fact) => (<li key={fact}>{fact}</li>))}
    </ul>
  </section>
);

export default Facts;
