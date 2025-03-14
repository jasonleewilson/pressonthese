import type { MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Press On These - Contact" },
    {
      name: "description",
      content: "PRESSONTHESE.COM - HANDMADE. CUSTOM. DURABLE. RESUABLE.",
    },
  ];
};

export default function Contact() {
  return (
    <>
      <div className='container mx-auto'>
        <Header />
      </div>

      <header className='block bg-lightblack'>
        <h1 className='container mx-auto primary-font text-3xl text-primary1 p-4 uppercase'>
          Contact{" "}
          {/* <img src='/nail.png' className='nail' width={150} alt='nail' /> */}
        </h1>
      </header>
      <main className='container mx-auto primary-font text-black grow p-4'>
        <div className='text-center text-2xl rounded-[1vw] p-8'>
          Email:{" "}
          <a
            className='underline text-black hover:text-white visited:text-purple-600'
            href='mailto:pressonthese@gmail.com'
          >
            pressonthese@gmail.com
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
