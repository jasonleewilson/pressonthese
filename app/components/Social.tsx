import { Link } from "@remix-run/react";
import { FaFacebookF } from "react-icons/fa";
import {
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaHeart,
} from "react-icons/fa6";

export default function Social() {
  return (
    <>
      <div className='mt-4'>
        <ul className='flex flex-wrap items-center justify-center text-3xl text-custom-pink'>
          <li className='p-4'>
            <Link
              to='https://www.facebook.com/pressonthese/'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebookF />
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to='https://x.com/pressonthese/'
              target='_blank'
              rel='noreferrer'
            >
              <FaXTwitter />
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to='https://www.instagram.com/pressonthese/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram />
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to='https://www.tiktok.com/@pressonthese/'
              target='_blank'
              rel='noreferrer'
            >
              <FaTiktok />
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to='https://youtube.com/@pressonthese/'
              target='_blank'
              rel='noreferrer'
            >
              <FaYoutube />
            </Link>
          </li>
        </ul>

        <div className='w-full'>
          <p className='text-center text-gray-400 absolute bottom-0 p-4'>
            Made with{" "}
            <span className=' text-custom-pink inline-block'>
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
        </div>
      </div>
    </>
  );
}
