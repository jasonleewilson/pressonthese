import { useEffect } from "react";
import Logo from "./Logo";

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
      <div className='container mx-auto'>
        <nav className='navbar'>
          <div className='grid grid-cols-4'>
            <div className='col-span-2 sm:col-span-3 md:col-span-1'>
              <Logo />
            </div>
            <div className='col-span-2 sm:col-span-1 md:col-span-3 p-5'>
              <div className='navbar-menu inline md:hidden'>
                <button className='navbar-burger text-5xl'>☰</button>
              </div>
              <div className='navbar-menu hidden md:inline'>
                <button className='navbar-close text-5xl inline md:hidden'>
                  ✖
                </button>
                <div className='navbar-backdrop'></div>
                {/* Menu items go here */}
                <ul className='flex font-semibold flex-row items-center justify-center'>
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
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
