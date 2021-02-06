import Gallery from "react-photo-gallery";
import React, { useState, useCallback } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

import './App.css';

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    event.stopPropagation();
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false)
  }
  return (
    <div className="App">
      <h1>Happy 30th Birthday Maggie</h1>
      <p>30 awesome things about you. Click around.</p>

      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default App;
