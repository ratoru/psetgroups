import { useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';

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
    val: 0,
    description: 'As soon as the assignment comes out',
  },
  {
    name: 'Normal',
    val: 1,
    description: 'Throughout the week',
  },
  {
    name: 'Late',
    val: 2,
    description: 'Right before the deadline',
  },
];

const workstyleOptions: Option[] = [
  {
    name: 'Together',
    val: 0,
    description: 'Solve all problems together',
  },
  {
    name: 'Strategies',
    val: 1,
    description: 'Discuss strategies and help each other when stuck',
  },
  {
    name: 'Independent',
    val: 2,
    description: 'Work independently, but check answers',
  },
];

const communicationOptions: Option[] = [
  {
    name: 'In Person',
    val: 0,
  },
  {
    name: 'Video',
    val: 1,
  },
  {
    name: 'Text',
    val: 2,
  },
];

const commitmentOptions: Option[] = [
  {
    name: 'Low',
    val: 0,
    description: "I'm still shopping and/or not registered",
  },
  {
    name: 'Medium',
    val: 1,
    description: 'Other courses might be a higher priority',
  },
  {
    name: 'High',
    val: 2,
    description: 'This course is a top priority for me',
  },
];

const expertiseOptions: Option[] = [
  {
    name: 'Beginner',
    val: 0,
    description: 'This will be all new for me',
  },
  {
    name: 'Average Joe',
    val: 1,
    description: 'I have seen some of this material before',
  },
  {
    name: 'Seasoned',
    val: 2,
    description: 'I am quite comfortable with this material',
  },
];

function checkSubmission(values: Array<string | number>): boolean {
  for (let i = 0, l = values.length; i < l; i += 1) {
    if (typeof values[i] === 'number' && values[i] === -100) {
      return false;
    }
    if (typeof values[i] === 'string' && values[i] === '') {
      return false;
    }
  }
  return true;
}

interface PreferencesFormProps {
  onClick: (val: boolean) => void;
}

export const PreferencesForm: React.FC<PreferencesFormProps> = ({
  onClick,
}) => {
  const [isLoading, setLoading] = useState(false);

  const [name, setName] = useState<string>('');
  // const [sunet, setSunet] = useState<string>('');
  const [year, setYear] = useState<string>('Freshman');
  const [dorm, setDorm] = useState<string>('Wilbur');
  const [code, setCode] = useState<string>('');

  const unselected = -100;
  const [start, setStart] = useState<number>(unselected);
  const [startW, setStartW] = useState<number>(2);
  const [workstyle, setWorkstyle] = useState<number>(unselected);
  const [workstyleW, setWorkstyleW] = useState<number>(2);
  const [communication, setCommunication] = useState<number>(unselected);
  const [communicationW, setCommunicationW] = useState<number>(2);
  const [commitment, setCommitment] = useState<number>(unselected);
  const [commitmentW, setCommitmentW] = useState<number>(2);
  const [expertise, setExpertise] = useState<number>(unselected);
  const [expertiseW, setExpertiseW] = useState<number>(2);

  const avTimes = times.map(() => {
    return days.map(() => {
      return 0;
    });
  });
  const [availableTimes, setAvailableTimes] = useState<number[][]>(avTimes);

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form: any) => {
    setLoading(true);
    try {
      const res = await fetch('/api/preferences', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status.toString());
      }
      setLoading(false);
      onClick(true);
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong.');
    }
  };

  let button: JSX.Element;
  if (
    checkSubmission([
      name,
      // sunet,
      year,
      dorm,
      code,
      start,
      workstyle,
      communication,
      commitment,
      expertise,
    ])
  ) {
    button = (
      <button
        type="submit"
        className="inline-flex items-center py-2 px-6 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
        disabled={isLoading}
        onClick={(e) => {
          e.preventDefault();
          const availibility = availableTimes.flat();
          const submitted = {
            name,
            year,
            dorm,
            code,
            start,
            startW,
            workstyle,
            workstyleW,
            communication,
            communicationW,
            commitment,
            commitmentW,
            expertise,
            expertiseW,
            availibility,
          };
          postData(submitted);
        }}
      >
        {isLoading && (
          <svg
            className="mr-3 -ml-1 w-5 h-5 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {isLoading ? 'Processing...' : 'Save'}
      </button>
    );
  } else {
    button = (
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-6 text-lg font-medium text-white bg-gray-600 rounded-md border border-transparent shadow-sm"
        disabled
      >
        Save
      </button>
    );
  }

  return (
    <form method="POST" className="py-20 px-6 mx-auto max-w-6xl">
      <Toaster position="top-center" />
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
                  <div className="col-span-3 w-4/5 md:w-1/2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="class-code"
                      id="class-code"
                      className="block mt-2 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="sunet-id"
                      className="block text-sm font-medium text-gray-700"
                    >
                      SUNet ID
                    </label>
                    <p className="text-sm text-gray-500">Coming soon!</p>
                    <div className="flex mt-1 rounded-md shadow-sm">
                      {/* <input
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
                      </span> */}
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
                    autoComplete="off"
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
              <div className="py-5 px-4 space-y-12 bg-gray-50 sm:p-6">
                <Radio
                  label="When do you start the pset?"
                  options={startOptions}
                  selected={start}
                  onClick={setStart}
                  weight={startW}
                  onWeightChange={setStartW}
                />
                <Radio
                  label="What's your collaboration style?"
                  options={workstyleOptions}
                  selected={workstyle}
                  onClick={setWorkstyle}
                  weight={workstyleW}
                  onWeightChange={setWorkstyleW}
                />
                <Radio
                  label="Preferred Communication"
                  options={communicationOptions}
                  selected={communication}
                  onClick={setCommunication}
                  weight={communicationW}
                  onWeightChange={setCommunicationW}
                />
                <Radio
                  label="What's your commitment level?"
                  options={commitmentOptions}
                  selected={commitment}
                  onClick={setCommitment}
                  weight={commitmentW}
                  onWeightChange={setCommitmentW}
                />
                <Radio
                  label="How comfortable are you in the class?"
                  options={expertiseOptions}
                  selected={expertise}
                  onClick={setExpertise}
                  weight={expertiseW}
                  onWeightChange={setExpertiseW}
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
            {button}
          </div>
        </div>
      </div>
    </form>
  );
};
