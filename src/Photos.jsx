import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://picsum.photos/v2/list";

function GetPhotos() {
  const [photos, setPhotos] = useState([]);
  const [modalOpen, setModalOpen] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState("");

  useEffect(() => {
    fetchPhotos();
  }, []);

  function fetchPhotos() {
    axios
      .get(url)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.log(error));
  }

  function handleThumbnailClick(photo) {
    setSelectedPhoto(photo);
    setModalOpen(true);
  }

  function handleModalClose() {
    setSelectedPhoto(null);
    setModalOpen(false);
  }

  function handleRefreshClick() {
    window.location.reload(true);
  }

  return (
    <div>
      <h1>Photo Randomizer</h1>
      <button onClick={handleRefreshClick}>🎲</button>
      <div className="random">
        {photos.map((photo, index) => (
          <img 
            className="thumbs"
            alt="randomly selected"
            src={`https://picsum.photos/800?random=${photo.id}`}
            key={photo.id}
            onClick={() => handleThumbnailClick(photo)}
          />
        ))}
      </div>
      {modalOpen && (
        <div className="modal" onClick={handleModalClose}>
          <img
            src={`https://picsum.photos/800?random=${selectedPhoto.id}`}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default GetPhotos;
