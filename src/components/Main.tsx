import React from 'react';

import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconMailFilled,
} from '@tabler/icons-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const Main = (): React.ReactElement => (
    <main className="flex flex-col gap-4 w-full">
      <Button
        asChild
        className="w-full h-12"
        variant="outline"
      >
        <Link href="mailto:pablo@apausa.dev" target="_blank">
          <IconMailFilled />
          Mail
        </Link>
      </Button>
      <Button
        asChild
        className="w-full h-12"
        variant="outline"
      >
        <Link href="https://www.linkedin.com/in/apausa/" target="_blank">
          <IconBrandLinkedinFilled />
          LinkedIn
        </Link>
      </Button>
      <Button
        asChild
        className="w-full h-12"
        variant="outline"
      >
        <Link href="https://github.com/apausa" target="_blank">
          <IconBrandGithubFilled />
          GitHub
        </Link>
      </Button>
    </main>
);
export default Main;
