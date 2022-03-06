import React, { useState } from 'react';

import { Transition } from '@headlessui/react';
import Link from 'next/link';

interface Props {
  label?: string;
  icon?: JSX.Element;
  items: DDMItem[];
}

export interface DDMItem {
  icon?: string;
  label: string;
  desc?: string;
  link?: string;
}

export const DropDownMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="inline-block relative text-left">
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-center items-center py-2 px-4 w-full text-sm font-medium text-gray-800 hover:bg-gray-200 rounded-md"
          id="options-menu"
        >
          {props.label}

          {props.icon || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      )}
      <Transition
        show={isOpen}
        className="flex fixed inset-0 z-40 flex-col justify-center w-full h-full align-middle bg-gray-50"
      >
        {props.items.map((item) => {
          return (
            <Link href={item.link || '#'} key={item.label}>
              <a
                className={`${
                  item.icon ? 'flex justify-center items-center' : 'block'
                } py-4 text-xl text-gray-900 hover:shadow-lg rounded-lg hover:text-gray-900`}
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                <img src={`${item.icon}`} alt="" className="mr-4 w-12 h-12" />

                <span className="flex flex-col text-center">
                  <span>{item.label}</span>
                  {item.desc && (
                    <span className="text-base text-gray-400">{item.desc}</span>
                  )}
                </span>
              </a>
            </Link>
          );
        })}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          id="options-menu"
          className="flex justify-center mt-8 text-gray-900 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </button>
      </Transition>
    </div>
  );
};
