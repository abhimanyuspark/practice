import React, { useState, useEffect } from "react";

const Dropdown = () => {
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const calculateDropdownPosition = () => {
    // Replace with your own logic to get trigger element position
    const triggerElement = document.getElementById("triggerElement");
    const triggerRect = triggerElement.getBoundingClientRect();

    const dropdownWidth = 200; // Set your dropdown width
    const dropdownHeight = 150; // Set your dropdown height

    // Calculate position based on trigger element and viewport dimensions
    const top = Math.min(
      triggerRect.bottom,
      window.innerHeight - dropdownHeight
    );
    const left = Math.min(triggerRect.left, window.innerWidth - dropdownWidth);

    setDropdownPosition({ top, left });
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      calculateDropdownPosition();
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("resize", calculateDropdownPosition);
    return () => {
      window.removeEventListener("resize", calculateDropdownPosition);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <button id="triggerElement" onClick={handleToggleDropdown}>
        Toggle Dropdown
      </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            width: 200, // Set your dropdown width
            height: 150, // Set your dropdown height
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          {/* Dropdown content */}
          Dropdown Content
        </div>
      )}
    </div>
  );
};

export default Dropdown;
