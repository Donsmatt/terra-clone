import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="video-modal">
      <div className="video-cta">
        <button onClick={openModal} className="video-button">
          <FaCirclePlay />
          Play to see Previous Experiences
        </button>
      </div>

      <Dialog open={isOpen} onClose={closeModal} className="video-dialog">
        {/* Backdrop */}
        <div className="video-overlay" onClick={closeModal} aria-hidden="true" />

        <div className="video-dialog-content">
          <Dialog.Panel className="video-container">
            <button
              onClick={closeModal}
              className="close-button"
              aria-label="Close video"
            >
              <IoCloseCircleSharp size={24} />
              Close
            </button>

            <video controls muted playsInline autoPlay width="100%">
              <track kind="captions" srcLang="en" />
              <source src="/testimonials.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default VideoModal;
