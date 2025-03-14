import Search from "~/components/Search";
import { Link } from "@remix-run/react";
import Btntoggle from "~/components/Btntoggle";
import Header from "~/components/Header";

function test() {
  return (
    <div className='bg-gray-400 dark:bg-black dark:text-white'>
      <div className='container mx-auto'>
        <Header />
        <Search />
        <Btntoggle />
        <p>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
          ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus
          ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque
          ornare sem lacinia quam venenatis vestibulum.
        </p>

        {/* LINKS */}
        <a href='/about'>NO ATTRIBUTES</a>
        <br />
        <a
          href='/about'
          className='text-red-500 hover:text-indigo-400 underline hover:-underline-offset-4'
        >
          ATTRIBUTES
        </a>
        <br />

        <Link
          to='https://www.facebook.com/pressonthese/'
          className='text-pink-500 underline hover:text-primary1 hover:-underline-offset-4'
          target='_blank'
          rel='noreferrer'
        >
          Link component
        </Link>
      </div>
    </div>
  );
}

export default test;
