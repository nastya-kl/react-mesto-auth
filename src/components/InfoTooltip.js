import React from "react";

function InfoTooltip(props) {
  const className = `popup popup_type_auth ${props.isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={className} onClick={(e) => e.target.classList.contains('popup') && props.onClose()}>
      <div className="popup__container">
        <button
          className="popup__close-icon"
          type="button"
          aria-label="Кнопка закрыть окно"
          onClick={props.onClose}
        ></button>
        <div className={`popup__auth-image ${props.isCorrect ? 'popup__auth-image_type_correct' : 'popup__auth-image_type_incorrect'}`}/>
        <h2 className="popup__auth-heading">{props.title}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip;