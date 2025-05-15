"use client";

import { useState } from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

import Lightbox from "yet-another-react-lightbox";
import { slides } from "../data";
import "yet-another-react-lightbox/styles.css";
import {
  // Captions,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "../Images";

export const meta: MetaFunction = () => {
  return [
    { title: "Press On These - Gallery" },
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
      content: "https://pressonthese.com/gallery",
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

function Gallery() {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);

  return (
    <>
      <div className='container mx-auto'>
        <Header />
      </div>
      <header className='block bg-lightblack'>
        <h1 className='container mx-auto primary-font text-3xl text-primary1 p-4 uppercase'>
          Gallery
        </h1>
      </header>
      <main className='container mx-auto text-black grow p-4'>
        <Images
          data={slides}
          onClick={(currentIndex) => setIndex(currentIndex)}
        />

        <Lightbox
          plugins={[Fullscreen, Zoom, Thumbnails]}
          captions={{
            showToggle: true,
            descriptionTextAlign: "end",
          }}
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </main>
      <Footer />
    </>
  );
}

export default Gallery;
