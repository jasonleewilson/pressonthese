import { Link } from "@remix-run/react";

export default function Logo() {
  return (
    <div className='w-[260px]'>
      <Link to='/'>
        <img
          src={"/PressOnThese-logo-final.svg"}
          alt='PressOnThese.com logo'
          width={260}
          height={64}
          // onError={(this.src = "https://picsum.photos/200")}
        />
      </Link>
    </div>
  );
}
