import { Link } from "@remix-run/react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

export default function Social() {
  return (
    <>
      <ul className='flex flex-wrap items-center justify-center text-3xl '>
        <li className='p-4'>
          <Link
            to='https://www.facebook.com/pressonthese/'
            className='text-white hover:text-primary1'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebookF />
          </Link>
        </li>
        <li className='p-4'>
          <Link
            to='https://x.com/pressonthese/'
            className='text-white hover:text-primary1'
            target='_blank'
            rel='noreferrer'
          >
            <FaXTwitter />
          </Link>
        </li>
        <li className='p-4'>
          <Link
            to='https://www.instagram.com/pressonthese/'
            className='text-white hover:text-primary1'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram />
          </Link>
        </li>
        <li className='p-4'>
          <Link
            to='https://www.tiktok.com/@pressonthese/'
            className='text-white hover:text-primary1'
            target='_blank'
            rel='noreferrer'
          >
            <FaTiktok />
          </Link>
        </li>
        <li className='p-4'>
          <Link
            to='https://youtube.com/@pressonthese/'
            className='text-white hover:text-primary1'
            target='_blank'
            rel='noreferrer'
          >
            <FaYoutube />
          </Link>
        </li>
      </ul>
    </>
  );
}
