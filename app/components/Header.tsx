import Nav from "./Nav";
// import Logo from "./Logo";

function Header() {
  return (
    <>
      <div className='bg-white px-4 py-14 sticky top-0'>
        {/* <Logo /> */}
        <Nav />
      </div>
    </>
  );
}

export default Header;
