import React from "react";
import ClosedByEsc from "../hooks/closedByEsc";

function ImagePopup({ card, isOpen, onClose }) {
  const className = `popup popup_type_image popup_background_dark ${
    isOpen ? "popup_opened" : ""
  }`;

  ClosedByEsc({isOpen, onClose});

  return (
    <div className={className} onClick={(e) => e.target.classList.contains('popup') && onClose()}>
      <div className="popup__image-container">
        <button
          className="popup__close-icon"
          type="button"
          aria-label="Кнопка закрыть окно"
          onClick={onClose}
        ></button>
        <figure className="popup__figure">
          <img className="popup__card-image" src={card.link} alt={card.name} />
          <figcaption className="popup__image-caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
