import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-[10px] px-6 py-[14px]";
  
  const variants = {
    primary: "bg-navy text-surface hover:bg-navy-light hover:text-white shadow-sm",
    secondary: "bg-transparent text-surface border border-surface/30 hover:border-surface hover:bg-surface/10",
    outline: "bg-transparent text-navy border border-navy/20 hover:border-navy hover:bg-navy/5",
    gold: "bg-gold text-navy hover:bg-gold-hover shadow-sm"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
