import type { MetaFunction } from "@remix-run/cloudflare";

// import Logo from "~/components/Logo";
import Nav from "~/components/Nav";
import Social from "~/components/Social";

export const meta: MetaFunction = () => {
  return [
    { title: "Press On These - About" },
    {
      name: "description",
      content: "PRESSONTHESE.COM - HANDMADE. CUSTOM. DURABLE. RESUABLE.",
    },
  ];
};

export default function Index() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[url('/bg-marble.jpg')] w-full bg-center-bottom bg-no-repeat bg-cover">
        <header>
          <Nav />
        </header>
        <main className='w-1/2 text-black grow p-4'>
          <h2 className='mb-4'>About Page </h2>

          <div>
            <h1>Hello Super Cool...</h1>
            <p className='mb-4'>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Curabitur blandit
              tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              Curabitur blandit tempus porttitor.
            </p>
            <p className='mb-2'>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Curabitur blandit
              tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              Curabitur blandit tempus porttitor.
            </p>
          </div>
        </main>
        <footer className='p-4'>
          <Social />
        </footer>
      </div>
    </>
  );
}
