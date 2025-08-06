import { useState, useEffect } from "react";

export default function Toast({ message, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Call the onClose function when auto-dismissed
    }, 3000); // Auto-dismiss after 3s

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-5 right-5 bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in">
      <span>{message}</span>
      <button onClick={() => setVisible(false)} className="text-white hover:text-gray-300">
        ✖
      </button>
    </div>
  );
}
