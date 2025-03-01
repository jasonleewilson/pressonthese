export default function Logo() {
  return (
    <div className='w-[250px] justify-center'>
      <a href='/'>
        <img
          alt='PressOnThese.com logo'
          src={"/logo-PressOnThese.svg"}
          className='mb-4'
          // onError={(this.src = "https://picsum.photos/200")}
        />
      </a>
    </div>
  );
}
