import React from 'react';

interface AvailabilityGridProps {
  days: string[];
  times: string[];
  availableTimes: number[][];
  onClick: (avTimes: number[][]) => void;
}

export const AvailabiltyGrid: React.FC<AvailabilityGridProps> = ({
  days,
  times,
  availableTimes,
  onClick,
}) => {
  return (
    <fieldset>
      <div className="grid grid-cols-8 grid-rows-5 gap-2 items-center text-center md:overflow-visible md:gap-4">
        <div className="col-span-1"></div>
        {days.map((day) => {
          return (
            <div
              key={day}
              className="col-span-1 text-base font-medium text-gray-900"
            >
              {day}
            </div>
          );
        })}
        {times.map((time, i) => {
          return (
            <React.Fragment key={time}>
              <div className="col-span-1 text-base font-medium text-gray-900 ">
                {time}
              </div>
              {days.map((day, j) => {
                return (
                  <div key={`${day}-${time}`} className="overflow-visible">
                    <label htmlFor={`${day}-${time}`} className="sr-only" />
                    <input
                      id={`${day}-${time}`}
                      name={`${day}-${time}`}
                      type="checkbox"
                      className="p-4 w-6 h-6 text-indigo-900 rounded-lg border-gray-300 focus:ring-violet-300 shadow-md cursor-pointer md:py-4 md:px-6 text-opacity-75"
                      checked={!!availableTimes?.[i]?.[j]}
                      onChange={() => {
                        const newTimes = [...availableTimes];
                        // @ts-ignore: Index is never out of bounds
                        newTimes[i][j] = newTimes?.[i]?.[j] ? 0 : 1;
                        onClick(newTimes);
                      }}
                    />
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </fieldset>
  );
};
