import Link from 'next/link';

export const Cta: React.FC = () => {
  return (
    <section className="py-12 px-2 bg-white md:py-32 md:px-0">
      <div className="container items-center px-8 mx-auto max-w-6xl xl:px-5">
        <div className="grid grid-cols-1 gap-12 place-content-evenly md:grid-cols-2 md:gap-0">
          <img
            src="/assets/images/rocket_green.png"
            alt=""
            className="mx-auto max-h-96"
          />
          <div className="flex justify-center items-center w-full">
            <div className="pb-6 space-y-6 sm:pr-5 sm:max-w-md md:pb-0 md:space-y-4 lg:pr-0 lg:space-y-8 lg:max-w-lg xl:space-y-9">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block">Ready to Find</span>
                <span className="block text-indigo-600">Your Group?</span>
              </h1>
              <div className="flex relative flex-col sm:flex-row sm:space-x-4">
                <Link href="/preferences">
                  <a className="flex items-center py-3 px-6 mb-3 w-full text-lg text-white bg-indigo-600 hover:bg-indigo-700 rounded-md sm:mb-0 sm:w-auto">
                    Find Group
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
