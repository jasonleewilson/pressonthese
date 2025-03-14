import { Link } from "@remix-run/react";
import Social from "./Social";
// import { FaHeart } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className='p-4'>
        <Social />
        <p className='text-center text-white h-6'>
          Made with ♥️ by:{" "}
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
