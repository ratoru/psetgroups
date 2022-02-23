/*
  This component requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Availabilty } from './Availability';
import { Radio } from './Radio';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const releaseOptions = [
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

const workstyleOptions = [
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

const communicationOptions = [
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

// commitmentOptions = [
//   ("1", "I'm still shopping and/or not registered"),
//   ("2", "Other courses might be a higher priority"),
//   ("3", "This course is a top priority for me"),
// ]

// confidence_options = [
//   ("1", "This will be all new for me"),
//   ("2", "I have seen some of this material before"),
//   ("3", "I am quite comfortable with this material"),
//   ]

interface PreferencesFormProps {
  onClick: (val: boolean) => void;
}

export const PreferencesForm: React.FC<PreferencesFormProps> = ({
  onClick,
}) => {
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
                  >
                    <option>Freshman</option>
                    <option>Sophomore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                    <option>Grad</option>
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
                  >
                    <option>Wilbur</option>
                    <option>Stern</option>
                    <option>EVGR A</option>
                    <option>The Row</option>
                    <option>Roble</option>
                    <option>FloMo</option>
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
                  options={releaseOptions}
                />
                <Radio
                  label="What's your collaboration style?"
                  options={workstyleOptions}
                />
                <Radio
                  label="Preferred Communication"
                  options={communicationOptions}
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
                {days.map((day) => (
                  <Availabilty day={day} key={day} />
                ))}
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
              className="inline-flex justify-center py-2 px-6 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
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
