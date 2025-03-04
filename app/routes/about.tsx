import type { MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Press On These - About" },
    {
      name: "description",
      content: "PRESSONTHESE.COM - HANDMADE. CUSTOM. DURABLE. RESUABLE.",
    },
  ];
};

export default function About() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[url('/bg-marble.jpg')] w-full bg-center-bottom bg-no-repeat bg-cover">
        <Header />
        <header className='block'>
          <h1 className='bg-primary mb-4 p-4'>About</h1>
        </header>
        <main className='container mx-auto text-black grow p-4'>
          <div className='text-2xl'>
            <p className='mb-3'>
              Hi, I&apos;m Kaye, a passionate press-on nail artist dedicated to
              creating handmade, custom, durable, and reusable nail sets. As a
              licensed cosmetologist since 2012, I&apos;ve spent years
              perfecting my craft, blending beauty with art to design nails that
              let you express yourself effortlessly. Whether you prefer bold,
              elegant, or trendy styles, I take pride in crafting each set with
              precision and care.
            </p>

            <p className='mb-3'>
              My journey began with a deep love for art and beauty, leading me
              to explore different techniques and materials to ensure my
              press-on nails not only look stunning but also last. Every set is
              designed to be durable, comfortable, and easy to wear, giving you
              a salon-quality experience without the hassle. From intricate
              hand-painted designs to sleek modern finishes, I customize each
              piece to fit your unique style.
            </p>

            <p className='mb-3'>
              At the heart of my work is a passion for helping clients feel
              confident and beautiful. My goal is to provide high-quality,
              reusable press-on nails that give you the freedom to switch up
              your look whenever you want. Whether you&apos;re dressing up for a
              special occasion or just want to elevate your everyday style,
              I&apos;m here to bring your nail dreams to life—one custom set at
              a time!
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
