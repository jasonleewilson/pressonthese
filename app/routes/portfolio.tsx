import type { MetaFunction } from "@remix-run/cloudflare";

import Logo from "~/components/Logo";
import Social from "~/components/Social";

export const meta: MetaFunction = () => {
  return [
    { title: "Press On These - Portfolio" },
    {
      name: "description",
      content: "PRESSONTHESE.COM - HANDMADE. CUSTOM. DURABLE. RESUABLE.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-[url('/bg-marble.jpg')] w-full bg-center-bottom bg-no-repeat bg-cover mb-8 md:bg-cover">
      <div className='flex flex-col items-center'>
        <header className='flex flex-col items-center'>
          <h1 className='sr-only'>Coming Soon... PressOnThese.com</h1>
        </header>

        <div className='w-auto text-center'>
          <Logo />
          <h2 className='text-center text-black mb-4'>Portfolio Page </h2>

          <div className='text-center'>
            {/* START CARD1 */}
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-xs dark:bg-gray-800 dark:border-gray-700'>
              <img
                className='rounded-t-lg'
                src='/photos/portfolio-1.jpg'
                alt='portfolio 1'
              />
            </div>
            {/* END CARD1 */}
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
}
