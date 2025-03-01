"use client";

import { useState } from "react";
// import { Link } from "@remix-run/react";
import Image from "~/components/Image"; // Assuming a custom Image component

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

export default function ImageModal(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const closeModal = () => setIsOpen(false);

  return (
    <div className='grid grid-cols-2 md:grid-cols-5 gap-4 p-4'>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={200}
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
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
          onClick={closeModal}
        >
          <div
            className='relative bg-white p-4 rounded-lg shadow-lg'
            onClick={(e) => e.stopPropagation()}
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
  );
}
