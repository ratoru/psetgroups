interface AvailabiltyProps {
  day: string;
}

export const Availabilty: React.FC<AvailabiltyProps> = ({ day }) => {
  return (
    <fieldset>
      <legend className="text-base font-medium text-gray-900">{day}</legend>
      <div className="mt-4 space-y-4">
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col items-center">
            <label
              htmlFor={`${day}-8t12`}
              className="text-sm font-medium text-gray-700"
            >
              8 - 12
            </label>
            <input
              id={`${day}-8t12`}
              name={`${day}-8t12`}
              type="checkbox"
              className="mt-2 w-6 h-6 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col items-center">
            <label
              htmlFor={`${day}-12t16`}
              className="text-sm font-medium text-gray-700"
            >
              12 - 16
            </label>
            <input
              id={`${day}-12t16`}
              name={`${day}-12t16`}
              type="checkbox"
              className="mt-2 w-6 h-6 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col items-center">
            <label
              htmlFor={`${day}-16t20`}
              className="text-sm font-medium text-gray-700"
            >
              16 - 20
            </label>
            <input
              id={`${day}-16t20`}
              name={`${day}-16t20`}
              type="checkbox"
              className="mt-2 w-6 h-6 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col items-center">
            <label
              htmlFor={`${day}-20t24`}
              className="text-sm font-medium text-gray-700"
            >
              20 - 24
            </label>
            <input
              id={`${day}-20t24`}
              name={`${day}-20t24`}
              type="checkbox"
              className="mt-2 w-6 h-6 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};
