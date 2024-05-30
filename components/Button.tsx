// Button.jsx or Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: string; // Add the variant prop
  onClick?: () => void; // If your button handles click events
}

const Button: React.FC<ButtonProps> = ({ children, variant, onClick }) => {
  return (
    <button onClick={onClick} className={`your-button-class ${variant}`}>
      {children}
    </button>
  );
};

export default Button;
