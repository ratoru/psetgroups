import { ReactNode } from 'react';

import Link from 'next/link';

import { DropDownMenu } from '@/components/DropDownMenu';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="px-1 w-full antialiased text-gray-700">
    {props.meta}

    <section className="fixed inset-x-0 top-0 z-10 px-8 w-full text-gray-700 bg-white body-font">
      <div className="container flex flex-row justify-between items-center py-6 mx-auto max-w-7xl">
        <Link href="/">
          <a className="flex relative items-center w-auto text-2xl font-extrabold leading-none text-black select-none">
            {AppConfig.title}
            <span className="text-indigo-600">.</span>
          </a>
        </Link>

        <nav className="hidden justify-center items-center space-x-5 text-base md:flex">
          <a
            href="#feat"
            className="relative font-medium leading-6 text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8 transition duration-150 ease-out"
          >
            Features
          </a>
          <a
            href="#faq"
            className="group relative font-medium leading-6 text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8 transition duration-150 ease-out"
          >
            FAQ
          </a>
          <Link href="https://github.com/ratoru">
            <a className="group relative font-medium leading-6 text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8 transition duration-150 ease-out">
              Source
            </a>
          </Link>
        </nav>

        <div className="flex md:hidden">
          <DropDownMenu
            items={[
              {
                label: 'Features',
                link: '/#feat',
                icon: '/assets/icons/test_tubes.svg',
              },
              {
                label: 'FAQ',
                link: '/#faq',
                icon: '/assets/icons/speech_bubbles.svg',
              },
              {
                label: 'Source',
                link: 'https://github.com/ratoru',
                icon: 'assets/icons/code.svg',
              },
            ]}
          />
        </div>
      </div>
    </section>

    <div className="py-5 text-xl content">{props.children}</div>

    <section className="text-gray-700 bg-white body-font">
      <div className="container flex flex-col items-center p-8 mx-auto max-w-7xl border-t border-gray-300 sm:flex-row">
        <Link href="/">
          <a className="text-xl font-black leading-none text-gray-900 select-none logo">
            {AppConfig.title}
            <span className="text-indigo-600">.</span>
          </a>
        </Link>
        <p className="mt-4 text-sm text-gray-500 sm:pl-4 sm:mt-0 sm:ml-4 sm:border-l sm:border-gray-200">
          © {new Date().getFullYear()} {AppConfig.title}
        </p>
        <span className="inline-flex justify-center mt-4 space-x-5 sm:justify-start sm:mt-0 sm:ml-auto">
          <Link href="https://github.com/ratoru">
            <a className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </Link>
        </span>
      </div>
    </section>
  </div>
);

export { Main };
