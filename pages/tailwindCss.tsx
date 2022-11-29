import type { NextPage } from 'next';

const TailWindCss: NextPage = () => {
  return (
    <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="transition-all  relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1 hover: grid hover: grid-cols-1 hover:grid-cols-6 hover:transition-all">
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
            Beach House in Collingwood
          </h1>
          <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
            Entire house
          </p>
        </div>
        <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dt className="sr-only">Reviews</dt>
          <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className="mr-1 stroke-current dark:stroke-indigo-500"
            ></svg>
            <span>
              4.89 <span className="text-slate-400 font-normal">(128)</span>
            </span>
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center">
            <svg
              width="2"
              height="2"
              aria-hidden="true"
              fill="currentColor"
              className="mx-3 text-slate-300"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              className="mr-1 text-slate-400 dark:text-slate-500"
              aria-hidden="true"
            >
              <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
            Collingwood, Ontario
          </dd>
        </dl>
        <div className="mt-5 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <button
            type="button"
            className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
          >
            Check availability
          </button>
        </div>
        <p className="mt-5 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
          This sunny and spacious room is for those traveling light and looking
          for a comfy and cosy place to lay their head for a night or two. This
          beach house sits in a vibrant neighborhood littered with cafes, pubs,
          restaurants and supermarkets and is close to all the major attractions
          such as Edinburgh Castle and Arthur's Seat.
        </p>
      </div>
      <div className="flex flex-row w-10/12 bg-gray-600">
        <button className="order-2 rounded-3xl text-white m-4 p-4  transition-all ease-in-out delay-300 bg-yellow-900 hover:rounded-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
          Save Changes1
        </button>
        <button className="order-3 rounded-3xl text-white m-4 p-4  transition-all ease-in-out delay-300 bg-yellow-900 hover:rounded-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
          Save Changes2
        </button>
        <button className="order-1 rounded-3xl text-white m-4 p-4  transition-all ease-in-out delay-300 bg-yellow-900 hover:rounded-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
          Save Changes3
        </button>
      </div>

      <div className="mx-36 grid grid-cols-2 bg-red-300">
        <button className="grid rounded-3xl text-white m-4 p-4  transition-all ease-in-out delay-300 bg-yellow-900 hover:rounded-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
          Save Changes1
        </button>
        <button className="row-start-3 col-start-2 rounded-3xl text-white m-4 p-4  transition-all ease-in-out delay-300 bg-yellow-900 hover:rounded-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
          Save Changes2
        </button>
        <button className=" rounded-3xl text-white m-4 p-4  transition-all ease-in-out delay-300 bg-yellow-900 hover:rounded-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
          Save Changes3
        </button>
        <button className=" rounded-3xl text-white m-4 p-4  transition-all ease-in-out delay-300 bg-yellow-900 hover:rounded-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
          Save Changes4
        </button>
        <button className=" rounded-3xl text-white m-4 p-4  transition-all ease-in-out delay-300 bg-yellow-900 hover:rounded-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
          Save Changes5
        </button>
        <button className=" rounded-3xl text-white m-4 p-4  transition-all ease-in-out delay-300 bg-yellow-900 hover:rounded-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
          Save Changes6
        </button>
      </div>
    </div>
  );
};

export default TailWindCss;
