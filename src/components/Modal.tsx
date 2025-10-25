"use client";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  type?: "success" | "warning" | "error" | "info";
}

export default function Modal({ isOpen, onClose, title, children, type = "info" }: ModalProps) {
  if (!isOpen) return null;

  const getColorClasses = () => {
    switch (type) {
      case "success":
        return "border-green-200 bg-white";
      case "warning":
        return "border-yellow-200 bg-white";
      case "error":
        return "border-red-200 bg-white";
      default:
        return "border-gray-200 bg-white";
    }
  };

  const getIconColor = () => {
    switch (type) {
      case "success":
        return "text-green-600";
      case "warning":
        return "text-yellow-600";
      case "error":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`max-w-md w-full rounded-lg border ${getColorClasses()} shadow-2xl`}>
        <div className="p-6">
          <div className="flex items-center mb-4">
            {type === "success" && (
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${getIconColor()}`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            {type === "warning" && (
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${getIconColor()}`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            {type === "error" && (
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${getIconColor()}`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          <div className="text-gray-700 mb-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}