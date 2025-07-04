import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const SuccessModal = ({ message, Success, autoClose = 2000, onClose }) => {
  useEffect(() => {
    if (Success) {
      const timer = setTimeout(() => {
        onClose();
      }, autoClose);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [Success, autoClose, onClose]);

  if (!Success) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-black-10 text-white relative p-6 rounded-lg shadow-lg text-center w-[90%] max-w-md">
        <button
          className="absolute top-2 right-5 cursor-pointer hover:text-red-50"
          onClick={() => Success(false)}
        >
          <FontAwesomeIcon icon={faRemove} />
        </button>
        <h2 className="mb-2 text-xl font-semibold">
          📩 Support Request Received
        </h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
