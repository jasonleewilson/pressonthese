import { useState } from "react";
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
