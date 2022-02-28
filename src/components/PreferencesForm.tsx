import { useState } from 'react';

import { AvailabiltyGrid } from './AvailabilityGrid';
import { Radio, Option } from './Radio';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const times = [
  '8-10',
  '10-12',
  '12-14',
  '14-16',
  '16-18',
  '18-20',
  '20-22',
  '22-24',
];

const dorms: string[] = [
  'Wilbur',
  'Stern',
  'Flomo',
  'EVGR A',
  'Roble',
  'The Row',
];

const years: string[] = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Grad'];

const startOptions: Option[] = [
  {
    name: 'Early',
    val: -1,
    description: 'As soon as the assignment comes out',
  },
  {
    name: 'Normal',
    val: 0,
    description: 'Throughout the week',
  },
  {
    name: 'Late',
    val: 1,
    description: 'Right before the deadline',
  },
];

const workstyleOptions: Option[] = [
  {
    name: 'Together',
    val: -1,
    description: 'Solve all problems together',
  },
  {
    name: 'Strategies',
    val: 0,
    description: 'Discuss strategies and help each other when stuck',
  },
  {
    name: 'Independent',
    val: 1,
    description: 'Work independently, but check answers',
  },
];

const communicationOptions: Option[] = [
  {
    name: 'In Person',
    val: -1,
  },
  {
    name: 'Video',
    val: 0,
  },
  {
    name: 'Text',
    val: 1,
  },
];

const commitmentOptions: Option[] = [
  {
    name: 'Low',
    val: -1,
    description: "I'm still shopping and/or not registered",
  },
  {
    name: 'Medium',
    val: 0,
    description: 'Other courses might be a higher priority',
  },
  {
    name: 'High',
    val: 1,
    description: 'This course is a top priority for me',
  },
];

const expertiseOptions: Option[] = [
  {
    name: 'Beginner',
    val: -1,
    description: 'This will be all new for me',
  },
  {
    name: 'Average Joe',
    val: 0,
    description: 'I have seen some of this material before',
  },
  {
    name: 'Seasoned',
    val: 1,
    description: 'I am quite comfortable with this material',
  },
];

interface PreferencesFormProps {
  onClick: (val: boolean) => void;
}

export const PreferencesForm: React.FC<PreferencesFormProps> = ({
  onClick,
}) => {
  const [sunet, setSunet] = useState<string>('');
  const [year, setYear] = useState(years[0]);
  const [dorm, setDorm] = useState(dorms[0]);
  const [code, setCode] = useState<string>('');

  const [start, setStart] = useState<Option | undefined>();
  const [workstyle, setWorkstyle] = useState<Option | undefined>();
  const [communication, setCommunication] = useState<Option | undefined>();
  const [commitment, setCommitment] = useState<Option | undefined>();
  const [expertise, setExpertise] = useState<Option | undefined>();

  const avTimes = times.map(() => {
    return days.map(() => {
      return 0;
    });
  });
  const [availableTimes, setAvailableTimes] = useState<number[][]>(avTimes);

  return (
    <form action="#" method="POST" className="py-20 px-6 mx-auto max-w-6xl">
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                General Info
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                General information regarding you and the class you are taking.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="py-5 px-4 space-y-6 bg-gray-50 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="sunet-id"
                      className="block text-sm font-medium text-gray-700"
                    >
                      SUNet ID
                    </label>
                    <div className="flex mt-1 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="sunet-id"
                        id="sunet-id"
                        className="block flex-1 w-full rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="jane"
                        value={sunet}
                        onChange={(e) => setSunet(e.target.value)}
                      />
                      <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-50 rounded-r-md border border-l-0 border-gray-300">
                        @stanford.edu
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-4/5 md:w-1/2">
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Year
                  </label>
                  <select
                    id="year"
                    name="year"
                    className="block py-2 px-3 mt-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 shadow-sm sm:text-sm"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    {years.map((y) => {
                      return (
                        <option value={y} key={y}>
                          {y}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="w-4/5 md:w-1/2">
                  <label
                    htmlFor="dorm"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Dorm
                  </label>
                  <p className="text-sm text-gray-500">
                    If your dorm is not on the list, pick the nearest one.
                  </p>
                  <select
                    id="dorm"
                    name="dorm"
                    className="block py-2 px-3 mt-2 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 shadow-sm sm:text-sm"
                    value={dorm}
                    onChange={(e) => setDorm(e.target.value)}
                  >
                    {dorms.map((d) => {
                      return (
                        <option value={d} key={d}>
                          {d}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="w-4/5 md:w-1/2">
                  <label
                    htmlFor="class-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Class Code
                  </label>
                  <p className="text-sm text-gray-500">
                    Your class provides you with a unique code.
                  </p>
                  <input
                    type="text"
                    name="class-code"
                    id="class-code"
                    className="block mt-2 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5 mt-20">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Partner Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Information about the workstyle you prefer and what you are
                looking for in your partner.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="py-5 px-4 space-y-6 bg-gray-50 sm:p-6">
                <Radio
                  label="When do you start the pset?"
                  options={startOptions}
                  selected={start}
                  onClick={setStart}
                />
                <Radio
                  label="What's your collaboration style?"
                  options={workstyleOptions}
                  selected={workstyle}
                  onClick={setWorkstyle}
                />
                <Radio
                  label="Preferred Communication"
                  options={communicationOptions}
                  selected={communication}
                  onClick={setCommunication}
                />
                <Radio
                  label="What's your commitment level?"
                  options={commitmentOptions}
                  selected={commitment}
                  onClick={setCommitment}
                />
                <Radio
                  label="How comfortable are you in the class?"
                  options={expertiseOptions}
                  selected={expertise}
                  onClick={setExpertise}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5 mt-20">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Availabilty
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Let us know which times throughout the week you are available to
                work with your group.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="py-5 px-4 space-y-6 bg-gray-50 sm:p-6">
                <AvailabiltyGrid
                  days={days}
                  times={times}
                  availableTimes={availableTimes}
                  onClick={setAvailableTimes}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5 mt-20">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Submit
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Review your answers and hit the submit button.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5 md:col-span-2 md:mt-0">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-6 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
              onClick={(e) => {
                e.preventDefault();
                onClick(true);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
