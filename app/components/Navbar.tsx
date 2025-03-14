import { useEffect } from "react";
import { Link } from "@remix-run/react";

// import Link from "@remix-run/cloudflare";

const Navbar = () => {
  useEffect(() => {
    const burgers =
      document.querySelectorAll<HTMLButtonElement>(".navbar-burger");
    const menus = document.querySelectorAll<HTMLDivElement>(".navbar-menu");
    const closes =
      document.querySelectorAll<HTMLButtonElement>(".navbar-close");
    const backdrops =
      document.querySelectorAll<HTMLDivElement>(".navbar-backdrop");

    const toggleMenu = () => {
      menus.forEach((menu) => menu.classList.toggle("hidden"));
    };

    burgers.forEach((burger) => burger.addEventListener("click", toggleMenu));
    closes.forEach((close) => close.addEventListener("click", toggleMenu));
    backdrops.forEach((backdrop) =>
      backdrop.addEventListener("click", toggleMenu)
    );

    return () => {
      burgers.forEach((burger) =>
        burger.removeEventListener("click", toggleMenu)
      );
      closes.forEach((close) => close.removeEventListener("click", toggleMenu));
      backdrops.forEach((backdrop) =>
        backdrop.removeEventListener("click", toggleMenu)
      );
    };
  }, []);

  return (
    <>
      <div className=''>
        <nav className='navbar'>
          <div className='navbar-menu flex align-items justify-end md:hidden'>
            <button className='navbar-burger text-5xl'>☰</button>
          </div>
        </nav>
        <div className='navbar-menu hidden md:inline'>
          <div className='flex'>
            <button className='navbar-close text-5xl ml-auto md:hidden'>
              ✖
            </button>
          </div>

          <div className='navbar-backdrop'></div>

          {/* Menu items go here */}
          <ul className='grid mt-8 primary-font font-semibold text-2xl md:flex md:m-0 justify-end text-right'>
            <li className='text-black hover:text-white uppercase'>
              <Link to='/about' aria-label='about' className='px-2'>
                about
              </Link>
            </li>

            <li className='text-black hover:text-white uppercase'>
              <Link to='/gallery' aria-label='gallery' className='px-2'>
                gallery
              </Link>
            </li>

            <li className='text-black hover:text-white uppercase'>
              <Link to='/faq' aria-label='faq' className='px-2'>
                faq
              </Link>
            </li>

            <li className='text-black hover:text-white uppercase'>
              <Link to='/contact' aria-label='contact' className='px-2'>
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
