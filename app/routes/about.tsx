import type { MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Press On These - About" },
    {
      name: "description",
      content: "PRESSONTHESE.COM - HANDMADE. CUSTOM. DURABLE. .REUSABLE.",
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
      content: "https://pressonthese.com/about",
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

export default function About() {
  return (
    <>
      <div className='container mx-auto '>
        <Header />
      </div>
      <div className=''>
        <header className='block bg-lightblack'>
          <h1 className='container mx-auto primary-font text-3xl text-primary1 p-4 uppercase'>
            About
            {/* <img src='/nail.png' className='nail' width={150} alt='nail' /> */}
          </h1>
        </header>
        <main className='container mx-auto text-black grow p-4'>
          {/* css grid */}
          {/* <div className='grid grid-cols-3 gap-4'>
            <div className="rounded-[1vw] bg-[url('/photos/portfolio-1.jpg')] w-full h-[250px] bg-cover bg-center bg-no-repeat mb-8 md:h-[350px]"></div>
            <div className="rounded-[1vw] bg-[url('/photos/portfolio-1.jpg')] h-[150px] bg-cover bg-center bg-no-repeat md:h-[150px] col-span-1"></div>
            <div className="rounded-[1vw] bg-[url('/photos/portfolio-4.jpg')] h-[150px] bg-cover bg-center bg-no-repeat md:h-[150px] col-span-2"></div>
            <div className="rounded-[1vw] bg-[url('/photos/portfolio-5.jpg')] h-[150px] bg-cover bg-center bg-no-repeat md:h-[150px] col-span-3"></div>
          </div> */}

          <div className='primary-font text-2xl p-8'>
            <p className='mb-3'>
              Hi, I&apos;m Kaye, a small town Texas gal with a passion for art
              and beauty. I create handmade, custom, durable, and reusable nail
              and toenail sets. As a licensed cosmetologist since 2012,
              I&apos;ve spent years perfecting my craft, blending beauty with
              art to design nails that let you express yourself effortlessly.
              Whether you prefer bold, elegant, or trendy styles, I take pride
              in crafting each set with precision and care.
            </p>

            <p className='mb-3'>
              My journey began with a deep love for art and beauty, leading me
              to explore different techniques and materials to ensure my
              press-on nails not only look stunning but also last. Every set is
              designed to be durable, comfortable, and easy to wear, giving you
              a salon-quality experience within minutes. I customize each piece
              to fit your unique style.
            </p>

            <p className='mb-3'>
              My goal is to provide durable, reusable press-on nails that give
              you the freedom to switch up your look whenever you want. Whether
              you&apos;re dressing up for a special occasion or just want to
              elevate your everyday style, I&apos;m here to bring your nail
              dreams to life—one custom set at a time!
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
