import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically open the popup on every visit or refresh
  useEffect(() => {
    setIsOpen(true); // Opens the popup immediately on load
  }, []); // The empty dependency array ensures it runs only on the first render

  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
            <p className="mb-4">This popup appears every time the page is visited or refreshed.</p>
            
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
