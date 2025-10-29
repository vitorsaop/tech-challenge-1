"use client";
import Modal from "./Modal";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title,
  message,
  buttonText = "OK"
}: SuccessModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} type="success">
      <p className="mb-6">{message}</p>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="px-6 py-2 bg-[#47A138] text-white rounded-md hover:bg-[#3a8a2e] focus:outline-none focus:ring-2 focus:ring-[#47A138]"
        >
          {buttonText}
        </button>
      </div>
    </Modal>
  );
}