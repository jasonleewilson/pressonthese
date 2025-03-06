export default function Logo() {
  return (
    <div className='w-[260px] mx-auto'>
      <a href='/'>
        <img
          alt='PressOnThese.com logo'
          src={"/logo-pressonthese.png"}
          className='p-2'
          // onError={(this.src = "https://picsum.photos/200")}
        />
      </a>
    </div>
  );
}
