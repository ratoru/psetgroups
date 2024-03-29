import React from 'react';

import { RadioGroup } from '@headlessui/react';

export interface Option {
  name: string;
  val: number;
  description?: string;
}

interface RadioProps {
  label: string;
  options: Option[];
  selected: number;
  onClick: (sel: number) => void;
  withWeight?: boolean;
  weightPromt?: string;
  weight: number;
  onWeightChange: (w: number) => void;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  options,
  selected,
  onClick,
  withWeight = true,
  weightPromt = 'Importance',
  weight,
  onWeightChange,
}) => {
  return (
    <div className="w-full">
      <RadioGroup value={selected} onChange={onClick}>
        <RadioGroup.Label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </RadioGroup.Label>
        <div className="flex flex-col space-y-2 space-x-0 md:flex-row md:space-y-0 md:space-x-2">
          {options.map((op) => (
            <RadioGroup.Option
              key={op.name}
              value={op.val}
              className={({ active, checked }) =>
                `${
                  active
                    ? 'ring-2 ring-offset-2 ring-offset-violet-300 ring-white ring-opacity-60'
                    : ''
                }
                  ${
                    checked
                      ? 'bg-indigo-900 bg-opacity-75 text-white'
                      : 'bg-white'
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none flex-grow`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium  ${
                            checked ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {op.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={`inline ${
                            checked ? 'text-sky-100' : 'text-gray-500'
                          }`}
                        >
                          <span>{op.description}</span>
                        </RadioGroup.Description>
                      </div>
                    </div>
                    {checked && (
                      <div className="shrink-0 text-white">
                        <svg className="w-6 h6" viewBox="0 0 24 24" fill="none">
                          <circle
                            cx={12}
                            cy={12}
                            r={12}
                            fill="#fff"
                            opacity="0.2"
                          />
                          <path
                            d="M7 13l3 3 7-7"
                            stroke="#fff"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      {withWeight && (
        <React.Fragment>
          <div className="mt-4 mb-2 text-sm font-medium text-gray-500">
            {weightPromt}
          </div>
          <div className="flex flex-row items-center">
            <p className="mr-4 text-sm text-gray-500">Low</p>
            <input
              type="range"
              name={`Importance: ${label}`}
              id={`${label}-i`}
              min={0}
              max={4}
              step={1}
              value={weight}
              onChange={(e) => onWeightChange(parseInt(e.target.value, 10))}
              className="range-style"
            />
            <p className="ml-4 text-sm text-gray-500">High</p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
