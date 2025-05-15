import type { MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import ContactForm from "~/components/ContactForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Press On These - Contact" },
    {
      name: "description",
      content: "PRESSONTHESE.COM - HANDMADE. CUSTOM. DURABLE. REUSABLE.",
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
      content: "https://pressonthese.com/contact",
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
        <ContactForm />
        {/* Email address only */}
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
