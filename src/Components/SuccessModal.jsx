import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const SuccessModal = ({ message, isOpen, autoClose = 3000, onClose }) => {
  useEffect(() => {
    let audio;
    if (isOpen) {
      audio = new Audio("/soundFXTwitch.mp3");
      audio.play();

      const timer = setTimeout(() => {
        onClose();
      }, autoClose);
      return () => {
        audio.pause();
        audio.currentTime = 0;
        clearTimeout(timer);
      };
    }
  }, [isOpen, autoClose, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-black-10 text-white relative p-6 rounded-lg shadow-lg text-center w-[90%] max-w-md">
        <button
          className="absolute top-2 right-5"
          onClick={() => isOpen(false)}
        >
          <FontAwesomeIcon icon={faRemove} />
        </button>
        <h2 className="mb-2 text-xl font-semibold">✅ Success</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
