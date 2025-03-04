"use client";

import { useState } from "react";
import Image from "~/components/Image"; // Assuming a custom Image component
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const images = [
  { src: "/photos/portfolio-1.jpg", alt: "Image 1" },
  { src: "/photos/portfolio-2.jpg", alt: "Image 2" },
  { src: "/photos/portfolio-3.jpg", alt: "Image 3" },
  { src: "/photos/portfolio-4.jpg", alt: "Image 4" },
  { src: "/photos/portfolio-5.jpg", alt: "Image 5" },

  { src: "/photos/portfolio-1.jpg", alt: "Image 6" },
  { src: "/photos/portfolio-2.jpg", alt: "Image 7" },
  { src: "/photos/portfolio-3.jpg", alt: "Image 8" },
  { src: "/photos/portfolio-4.jpg", alt: "Image 9" },
  { src: "/photos/portfolio-5.jpg", alt: "Image 10" },
];

export default function Portfolio(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[url('/bg-marble.jpg')] w-full bg-center-bottom bg-no-repeat bg-cover">
        <Header />
        <header className='block'>
          <h1 className='bg-primary text-blacklight mb-4 p-4'>Portfolio</h1>
        </header>
        <main className='container mx-auto text-black grow p-4'>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={300}
                height={150}
                className='cursor-pointer rounded-lg shadow-lg'
                onClick={() => {
                  setSelectedImage(image.src);
                  setIsOpen(true);
                }}
              />
            ))}

            {/* Modal */}
            {isOpen && (
              <div
                className='fixed inset-0 flex items-center justify-center bg-blacklight bg-opacity-50'
                onClick={closeModal}
                aria-hidden='true'
              >
                <div
                  className='relative bg-white p-4 rounded-lg shadow-lg'
                  onClick={(e) => e.stopPropagation()}
                  // aria-hidden='true'
                >
                  <button
                    className='absolute top-2 right-2 text-gray-700 hover:text-gray-900'
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
      </div>
    </>
  );
}
