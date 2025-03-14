import type { MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
// import Nav from "~/components/Nav";

export const meta: MetaFunction = () => {
  return [
    { title: "Press On These" },
    {
      name: "description",
      content: "PRESSONTHESE.COM - HANDMADE. CUSTOM. DURABLE. RESUABLE.",
    },
    {
      property: "og:title",
      content: "PRESSONTHESE.COM - HANDMADE. CUSTOM. DURABLE. RESUABLE.",
    },
    {
      property: "og:description",
      content:
        "Express yourself with handmade, custom press-on nails created by me for you.",
    },
    {
      property: "og:image",
      content: "/og-pressonthese.jpg",
    },
    {
      property: "og:url",
      content: "https://pressonthese.com",
    },
    {
      property: "og:site_name",
      content: "Press On These",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-96x96.png",
      sizes: "96x96",
    },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "shortcut icon", href: "/favicon.ico" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    { name: "apple-mobile-web-app-title", content: "PressOn" },
    { rel: "manifest", href: "/site.webmanifest" },
  ];
};

export default function Index() {
  return (
    <>
      <div className='container mx-auto'>
        <Header />
        {/* css grid */}
        {/* <div className=' grid grid-cols-3 gap-1'>
          <div className="bg-[url('/photos/portfolio-1.jpg')] h-[550px] bg-cover bg-center bg-no-repeat md:h-[150px] col-span-1"></div>
          <div className="bg-[url('/photos/portfolio-4.jpg')] h-[550px] bg-cover bg-center bg-no-repeat md:h-[150px] col-span-2"></div>
          <div className="bg-[url('/photos/portfolio-5.jpg')] h-[550px] bg-cover bg-center bg-no-repeat md:h-[150px] col-span-3"></div>
        </div> */}

        <div className=' grid grid-cols-3 gap-1'>
          <div className='col-span-3'>
            <h1 className='mt-16 text-custom-homepage primary-font font-extrabold'>
              PRESSON<span className='text-white'>THESE</span>.
            </h1>
          </div>
        </div>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-5 p-10 text-left'>
          {/* <!-- Headline --> */}
          <h1 className='primary-font text-6xl'>
            Express yourself with handmade, custom press-on nails created by me
            for you.
          </h1>
          <p className='secondary-font text-2xl'>
            It&apos;s time to upgrade your manicure game with Press On These.
            These aren&apos;t your everyday press-ons. You get to experience
            salon quality nails without having to sit in a chair for hours. Plus
            they are not only durable but reusable. Just press and go!
            <br />
            <br />
            {/* <!-- Call to Action --> */}
            <a
              href='/gallery'
              className='bg-primary1 primary-font text-black inline p-4 text-lg font-semibold hover:bg-secondary1 transition-all focus:ring-4 focus:ring-pink-300 focus:outline-none'
              role='button'
              aria-label='View Gallery - Find Your Perfect Set'
            >
              View Gallery
            </a>
          </p>

          {/* <!-- Subheadline --> */}
          {/* <h2 className='col-span-1 md:col-span-2 text-xl text-gray-500'>
            It&apos;s time to upgrade your manicure game with Press On These.
            These aren&apos;t your everyday press-ons. You get to experience
            salon quality nails without having to sit in a chair for hours. Plus
            they are not only durable but reusable. Just press and go!
          </h2> */}

          {/* <!-- Features --> */}
          {/* <div
            className='bg-gray-100 p-6 shadow-md text-lg text-gray-800'
            role='region'
            aria-labelledby='feature-1'
          >
            <h2 id='feature-1' className='text-xl font-semibold'>
              🎨 Custom Designs
            </h2>
            <p>Hand-painted, unique nail art tailored to your style.</p>
          </div>

          <div
            className='bg-gray-100 p-6 shadow-md text-lg text-gray-800'
            role='region'
            aria-labelledby='feature-2'
          >
            <h2 id='feature-2' className='text-xl font-semibold'>
              ♥️ Reusable & Durable
            </h2>
            <p>High-quality press-ons that last and can be worn again.</p>
          </div> */}
        </section>
        <Footer />
      </div>
    </>
  );
}
