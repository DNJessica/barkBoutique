import React, { useState } from 'react';
import Modal from 'react-modal';

const images = require.context('../images/gallery', true);
const imageList = images.keys().map(image => images(image));

function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedImageSrc, setSelectedImageSrc] = useState(null);
  const [prevImageIndex, setPrevImageIndex] = useState(null);
  const [nextImageIndex, setNextImageIndex] = useState(null);

  const openModal = (index, image) => {
    setSelectedImageIndex(index);
    setSelectedImageSrc(image);

    const prevIndex = index === 0 ? imageList.length - 1 : index - 1;
    const nextIndex = index === imageList.length - 1 ? 0 : index + 1;

    setPrevImageIndex(prevIndex);
    setNextImageIndex(nextIndex);
    console.log(imageList);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setSelectedImageSrc(null);
    setPrevImageIndex(null);
    setNextImageIndex(null);
  };

  return (
    <div className="gallery-container">
      {imageList.map((image, index) => (
        <div
          className="gallery-img-container"
          key={index}
          onClick={() => openModal(index, image)}
        >
          <img
            className="gallery-img"
            key={index}
            src={image}
            alt={`img-${index}`}
          />
        </div>
      ))}
      <Modal
        isOpen={selectedImageIndex !== null}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Image Modal"
        shouldCloseOnOverlayClick={true}
      >
        {selectedImageIndex !== null && (
          <div>
            {prevImageIndex !== null && (
              <div
                className="arrow left-arrow"
                onClick={() =>
                  openModal(prevImageIndex, imageList[prevImageIndex])
                }
              >
                &#8249;
              </div>
            )}
            <div className="modal-content">
            <img
              className="modal-image"
              src={selectedImageSrc}
              alt={`img-${selectedImageIndex}`}
            />
            </div>
            {nextImageIndex !== null && (
              <div
                className="arrow right-arrow"
                onClick={() =>
                  openModal(nextImageIndex, imageList[nextImageIndex])
                }
              >
                &#8250;
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Gallery;
