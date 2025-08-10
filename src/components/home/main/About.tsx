import React from 'react';

import { about } from '@/lib/constants';

const About = (): React.ReactElement => (
  <section className="flex flex-col gap-2">
    <h3 className="text-md xs:text-md font-bold">About me</h3>
    <p className="text-md xs:text-md">{about}</p>
  </section>
);

export default About;
