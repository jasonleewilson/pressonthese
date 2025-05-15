import type { MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
// import Nav from "~/components/Nav";

export const meta: MetaFunction = () => {
  return [
    { title: "Press On These" },
    {
      name: "description",
<<<<<<< HEAD
      content: "PRESSONTHESE.COM - HANDMADE. CUSTOM. DURABLE. reusable.",
=======
      content: "PRESSONTHESE.COM - HANDMADE. CUSTOM. DURABLE. REUSABLE.",
>>>>>>> master
    },
  ];
};

export default function Homepage() {
  return (
    <>
      <div className='container mx-auto'>
        <Header />
        {/* css grid */}
        <div className=' grid grid-cols-3 gap-4'>
          <div className="rounded-[1vw] bg-[url('/photos/portfolio-1.jpg')] h-[150px] bg-cover bg-center bg-no-repeat md:h-[150px] col-span-1"></div>
          <div className="rounded-[1vw] bg-[url('/photos/portfolio-4.jpg')] h-[150px] bg-cover bg-center bg-no-repeat md:h-[150px] col-span-2"></div>
          <div className="rounded-[1vw] bg-[url('/photos/portfolio-5.jpg')] h-[150px] bg-cover bg-center bg-no-repeat md:h-[150px] col-span-3"></div>
        </div>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-5 p-10 text-center'>
          {/* <!-- Headline --> */}
          <h1 className='col-span-1 md:col-span-2 text-3xl font-bold text-gray-500'>
            💅 Elevate Your Style with Custom, Handmade Press-On Nails
          </h1>

          {/* <!-- Subheadline --> */}
          <h2 className='col-span-1 md:col-span-2 text-xl text-gray-500'>
            DURABLE. REUSABLE. Designed Just for You. Experience salon-quality
            nails without the hassle!
          </h2>

          {/* <!-- Call to Action --> */}
          <a
            href='/Gallery'
            className='col-span-1 md:col-span-2 bg-primary1 text-white inline py-4 text-lg font-semibold rounded-2xl hover:bg-pink-300 transition-all focus:ring-4 focus:ring-pink-300 focus:outline-none'
            role='button'
            aria-label='View Gallery - Find Your Perfect Set'
          >
            ✨ View Gallery
          </a>

          {/* <!-- Features --> */}
          <div
            className='bg-gray-100 p-6 rounded-2xl shadow-md text-lg text-gray-800'
            role='region'
            aria-labelledby='feature-1'
          >
            <h2 id='feature-1' className='text-xl font-semibold'>
              🎨 Custom Designs
            </h2>
            <p>Hand-painted, unique nail art tailored to your style.</p>
          </div>

          <div
            className='bg-gray-100 p-6 rounded-2xl shadow-md text-lg text-gray-800'
            role='region'
            aria-labelledby='feature-2'
          >
            <h2 id='feature-2' className='text-xl font-semibold'>
              ❤️ Reusable & Durable
            </h2>
            <p>High-quality press-ons that last and can be worn again.</p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
