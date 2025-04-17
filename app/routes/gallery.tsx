"use client";

import { useState } from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import Image from "~/components/Image";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const images = [
  {
    src: "/gallery/MASTER-gallery-photos-IMG_3200.jpg",
    alt: "Image 1",
    // title: "test-title1",
  },
  { src: "/gallery/MASTER-gallery-photos-IMG_3225.jpg", alt: "Image 2" },
  { src: "/gallery/MASTER-gallery-photos-IMG_3246.jpg", alt: "Image 3" },
  { src: "/gallery/MASTER-gallery-photos-IMG_3300.jpg", alt: "Image 4" },
  { src: "/gallery/MASTER-gallery-photos-IMG_3335.jpg", alt: "Image 5" },
  { src: "/gallery/MASTER-gallery-photos-IMG_3384.jpg", alt: "Image 6" },
  { src: "/gallery/MASTER-gallery-photos-IMG_3471.jpg", alt: "Image 7" },
  { src: "/gallery/MASTER-gallery-photos-IMG_3484.jpg", alt: "Image 8" },
  { src: "/gallery/MASTER-gallery-photos-IMG_3508.jpg", alt: "Image 9" },
  { src: "/gallery/MASTER-gallery-photos-IMG_3611.jpg", alt: "Image 10" },
  { src: "/gallery/MASTER-gallery-photos-IMG_3660.jpg", alt: "Image 11" },
  { src: "/gallery/MASTER-gallery-photos-IMG_3685.jpg", alt: "Image 12" },
  { src: "/gallery/MASTER-gallery-photos-IMG_3770.jpg", alt: "Image 13" },
  { src: "/gallery/MASTER-gallery-photos-IMG_3967.jpg", alt: "Image 14" },
  { src: "/gallery/MASTER-gallery-photos-IMG_4014.jpg", alt: "Image 15" },
  { src: "/gallery/MASTER-gallery-photos-IMG_4024.jpg", alt: "Image 16" },
  { src: "/gallery/MASTER-gallery-photos-IMG_4224.jpg", alt: "Image 17" },
  { src: "/gallery/MASTER-gallery-photos-IMG_4264.jpg", alt: "Image 18" },
  { src: "/gallery/MASTER-gallery-photos-IMG_4304.jpg", alt: "Image 19" },
  { src: "/gallery/MASTER-gallery-photos-IMG_4312.jpg", alt: "Image 20" },
  { src: "/gallery/MASTER-gallery-photos-IMG_4336.jpg", alt: "Image 21" },
  { src: "/gallery/MASTER-gallery-photos-IMG_4395.jpg", alt: "Image 22" },
  //April 2025
  { src: "/gallery/april/IMG_4524.jpg", alt: "Image 23" },
  { src: "/gallery/april/IMG_4622.jpg", alt: "Image 24" },
  { src: "/gallery/april/IMG_4664.jpg", alt: "Image 25" },
  { src: "/gallery/april/IMG_4726.jpg", alt: "Image 26" },
  { src: "/gallery/april/IMG_4731.jpg", alt: "Image 27" },
  { src: "/gallery/april/IMG_4755.jpg", alt: "Image 28" },
  { src: "/gallery/april/IMG_4757.jpg", alt: "Image 29" },
  { src: "/gallery/april/IMG_4879.jpg", alt: "Image 30" },
  { src: "/gallery/april/IMG_4917.jpg", alt: "Image 31" },
  { src: "/gallery/april/IMG_4991.jpg", alt: "Image 32" },
  { src: "/gallery/april/IMG_5017.jpg", alt: "Image 33" },
  { src: "/gallery/april/IMG_5179.jpg", alt: "Image 34" },
  { src: "/gallery/april/IMG_5214.jpg", alt: "Image 35" },
  { src: "/gallery/april/IMG_5249.jpg", alt: "Image 36" },
  { src: "/gallery/april/IMG_4425.jpg", alt: "Image 37" },
  { src: "/gallery/april/IMG_4465.jpg", alt: "Image 38" },
];

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

export default function Gallery(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className='container mx-auto '>
        <Header />
      </div>
      <header className='block bg-lightblack'>
        <h1 className='container mx-auto primary-font text-3xl text-primary1 p-4 uppercase'>
          Gallery
        </h1>
      </header>
      <main className='container mx-auto text-black grow p-4'>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              // aria-label={image.title}
              // loading={image.title}
              width={300}
              height={150}
              className='cursor-pointer no-right-click rounded-lg shadow-lg'
              onClick={() => {
                setSelectedImage(image.src);
                setIsOpen(true);
              }}
            />
          ))}

          {/* Modal */}
          {isOpen && (
            <div
              className='fixed inset-0 flex items-center justify-center bg-lightblack bg-opacity-50'
              onClick={closeModal}
              aria-hidden='true'
            >
              <div
                className='relative bg-white p-4 rounded-lg shadow-lg'
                onClick={(e) => e.stopPropagation()}
                aria-hidden='true'
              >
                <button
                  className='absolute top-2 right-2 text-black hover:text-primary1 text-6xl pr-2'
                  onClick={closeModal}
                >
                  &times;
                </button>
                <Image
                  src={selectedImage}
                  alt='Selected'
                  width={600}
                  height={400}
                  className='rounded-lg'
                />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
