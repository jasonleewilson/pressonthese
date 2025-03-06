import Logo from "~/components/Logo";

export default function Nav() {
  return (
    <>
      <nav className='w-full px-8 md:px-auto'>
        <div className='md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap'>
          {/* <!-- Logo --> */}
          <div className='text-primary md:order-1'>
            {/* <!-- Heroicon - Chip Outline LOGO GOES HERE--> */}
            <Logo />
          </div>
          <div className='text-gray-500 order-2 w-1/2 md:w-auto md:order-2'>
            <ul className='flex font-semibold justify-between'>
              {/* <!-- Active Link = text-indigo-500
                Inactive Link = hover:text-indigo-500 --> */}
              <li className='md:px-4 md:py-2 text-indigo-500'>
                <a href='/'>Home</a>
              </li>
              <li className='md:px-4 md:py-2 hover:text-indigo-400'>
                <a href='/about'>About</a>
              </li>
              <li className='md:px-4 md:py-2 hover:text-indigo-400'>
                <a href='/portfolio'>Portfolio</a>
              </li>
              <li className='md:px-4 md:py-2 hover:text-indigo-400'>
                <a href='/faq'>Faq</a>
              </li>
              <li className='md:px-4 md:py-2 hover:text-indigo-400'>
                <a href='/contact'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
