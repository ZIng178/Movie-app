import React, { useState } from "react";
import Modal from "react-modal";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const custModalStyles = {
  content: {
    background: "black",
    height: "80%",
    width: "50%",
    left: "20%",
  },
};

const Movie = ({ title, poster_path, overview, vote_average }) => {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
    console.log("closing");
  };
  return (
    <div>
      <div className="movie">
        <img src={IMG_API + poster_path} alt={title} />
        <div className="movie-info">
          <h3>{title}</h3>
          <span> {vote_average}</span>
        </div>
        <div className="movie-over">
          <button className="view-button" onClick={openModal}>
            {" "}
            View
          </button>
          <h2> Overview:</h2>
          <p> {overview}</p>

          <Modal
            isOpen={showModal}
            onRequestClose={closeModal}
            style={custModalStyles}
          >
            <button className="close-modal" onClick={closeModal}>
              x
            </button>
            <img
              src={IMG_API + poster_path}
              alt={title}
              className="modal-image"
            />
            <h2 className="modal-title"> {title}</h2>
            <p className="modal-overview"> {overview}</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Movie;
