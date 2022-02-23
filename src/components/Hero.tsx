import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
    <section className="px-2 h-screen bg-white md:px-0">
      <div className="container place-content-center px-8 mx-auto max-w-6xl h-full xl:px-5">
        <div className="flex flex-wrap items-center h-full">
          <div className="mt-24 w-full md:px-3 md:mt-0 md:w-1/2">
            <div className="pb-6 space-y-6 w-full sm:pr-5 sm:max-w-md md:pb-0 md:space-y-4 lg:pr-0 lg:space-y-8 lg:max-w-lg xl:space-y-9">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block">Easy Way to</span>
                <span className="block text-indigo-600">Find Your Group!</span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md md:max-w-3xl lg:text-xl">
                Tired of posting on Ed? Here&apos;s your chance to find good
                pset partners for your classes stress-free.
              </p>
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
                <a
                  href="#feat"
                  className="flex items-center py-3 px-6 text-gray-500 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden w-full h-auto">
              <img src="/assets/images/student.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
