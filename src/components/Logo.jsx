import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract, technical enterprise logo mark */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded bg-navy-dark shrink-0 border border-[rgba(255,255,255,0.08)]">
        <div className="absolute w-3 h-3 border-2 border-gold rounded-sm transform rotate-45"></div>
        <div className="absolute w-1.5 h-1.5 bg-surface rounded-full"></div>
      </div>
      <div className="font-bold tracking-tight text-xl leading-none">
        <span className="text-surface">FieldOps</span>{' '}
        <span className="text-gold">Nexus</span>
      </div>
    </div>
  );
};

export default Logo;
