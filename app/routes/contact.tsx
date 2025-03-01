import type { MetaFunction } from "@remix-run/cloudflare";

import Logo from "~/components/Logo";
import Social from "~/components/Social";

export const meta: MetaFunction = () => {
  return [
    { title: "Press On These - Contact" },
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
          <h2 className='text-center text-black mb-4'>Contact Page </h2>

          <div className='text-center'>
            Email:{" "}
            <a
              className='underline text-custom-pink hover:text-pink-800 visited:text-purple-600'
              href='mailto:pressonthese@gmail.com'
            >
              pressonthese@gmail.com
            </a>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
}
