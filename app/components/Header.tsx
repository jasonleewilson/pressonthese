import Navbar from "./Navbar";
import Logo from "./Logo";

function Header() {
  return (
    <div className='p-4 sticky top-0'>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <div className='col-span-1 md:col-span2 lg:col-span-2'>
          <Logo />
        </div>
        <div className='col-span-1 md:col-span2 lg:col-span-2 my-auto'>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Header;
