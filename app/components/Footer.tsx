import { Link } from "@remix-run/react";
import Social from "./Social";
import { FaHeart } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className='bg-white p-4'>
        <Social />
        <p className='text-center text-gray-400 h-6'>
          Made with{" "}
          <span className=' text-red-500 inline-block'>
            <FaHeart />
          </span>{" "}
          by:{" "}
          <Link
            to='https://jasonleewilson.com/'
            target='_blank'
            rel='noreferrer'
          >
            jasonleewilson.com
          </Link>
        </p>
      </footer>
    </>
  );
}

export default Footer;
