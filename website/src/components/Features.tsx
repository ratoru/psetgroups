export const Features: React.FC = () => {
  return (
    <section className="py-7 w-full bg-white md:pt-20 md:pb-24" id="feat">
      <div className="box-border flex flex-col content-center items-center px-8 mx-auto max-w-7xl leading-6 text-black border-0 border-gray-300 border-solid md:flex-row lg:px-16">
        <div className="box-border relative px-4 mt-5 mb-4 -ml-5 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:ml-0 md:w-1/2 md:max-w-none lg:mb-0 xl:pl-10">
          <img
            src="/assets/images/monsters.png"
            alt=""
            className="p-2 pr-5 pl-6 xl:pr-20 xl:pl-16"
          />
        </div>

        <div className="box-border order-first w-full text-black border-solid md:order-none md:pl-10 md:w-1/2">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl">
            Find Good Partners
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 lg:text-lg xl:pr-32">
            Just enter your availability throughout the week and preferences
            over your partner and we&apos;ll do the rest.
          </p>
          <ul className="p-0 m-0 space-y-4 leading-6 border-0 border-gray-300">
            <li className="box-border flex relative pl-0 text-left text-gray-500 align-middle border-solid">
              <span className="inline-flex justify-center items-center mr-4 w-6 h-6 text-white bg-indigo-300 rounded-full">
                <span className="text-sm font-bold">✓</span>
              </span>{' '}
              Similar availability throughout the week
            </li>
            <li className="box-border flex relative pl-0 text-left text-gray-500 align-middle border-solid">
              <span className="inline-flex justify-center items-center mr-4 w-6 h-6 text-white bg-indigo-300 rounded-full">
                <span className="text-sm font-bold">✓</span>
              </span>{' '}
              Connect on a personal level
            </li>
            <li className="box-border flex relative pl-0 text-left text-gray-500 align-middle border-solid">
              <span className="inline-flex justify-center items-center mr-4 w-6 h-6 text-white bg-indigo-300 rounded-full">
                <span className="text-sm font-bold">✓</span>
              </span>{' '}
              Shared goals in the class
            </li>
          </ul>
        </div>
      </div>
      <div className="box-border flex flex-col content-center items-center px-8 mx-auto mt-2 max-w-7xl leading-6 text-black border-0 border-gray-300 border-solid md:flex-row md:mt-20 lg:px-16">
        <div className="box-border w-full text-black border-solid md:pl-6 md:w-1/2 xl:pl-32">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl">
            Worry Free
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            Don&apos;t stress about replying first since groups are created
            asynchronously. Additionally, we don&apos;t share your data with
            anyone.
          </p>
          <ul className="p-0 m-0 space-y-4 leading-6 border-0 border-gray-300">
            <li className="box-border flex relative pl-0 text-left text-gray-500 align-middle border-solid">
              <span className="inline-flex justify-center items-center mr-4 w-6 h-6 text-white bg-indigo-300 rounded-full">
                <span className="text-sm font-bold">✓</span>
              </span>{' '}
              No need to reply first
            </li>
            <li className="box-border flex relative pl-0 text-left text-gray-500 align-middle border-solid">
              <span className="inline-flex justify-center items-center mr-4 w-6 h-6 text-white bg-indigo-300 rounded-full">
                <span className="text-sm font-bold">✓</span>
              </span>{' '}
              Classes are handled independtly
            </li>
            <li className="box-border flex relative pl-0 text-left text-gray-500 align-middle border-solid">
              <span className="inline-flex justify-center items-center mr-4 w-6 h-6 text-white bg-indigo-300 rounded-full">
                <span className="text-sm font-bold">✓</span>
              </span>{' '}
              Your data is safe
            </li>
          </ul>
        </div>

        <div className="box-border relative px-4 mt-10 mb-4 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:w-1/2 md:max-w-none lg:mb-0">
          <img
            src="/assets/images/security.png"
            alt=""
            className="pl-4 sm:pr-10 lg:pr-32 xl:pl-10"
          />
        </div>
      </div>
    </section>
  );
};
