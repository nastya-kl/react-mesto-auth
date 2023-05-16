import ClosedByEsc from "../hooks/closedByEsc";

const Popup = ({ isOpen, onClose, name, children }) => {

  ClosedByEsc({isOpen, onClose});

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""} popup_type_${name}`}
      onMouseDown={handleOverlay}
    >
      <div className={'popup__container'}>
        {children}
        <button
          className="popup__close-icon"
          type="button"
          aria-label="Кнопка закрыть окно"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Popup;
