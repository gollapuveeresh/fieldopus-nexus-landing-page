import React from 'react';

const Logo = ({ className = '', theme = 'dark' }) => {
  const isLight = theme === 'light';
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract, technical enterprise logo mark */}
      <div 
        className="relative flex items-center justify-center w-8 h-8 rounded shrink-0 border"
        style={{
          background: '#0B1F3B',
          borderColor: isLight ? 'transparent' : 'rgba(255,255,255,0.08)'
        }}
      >
        <div className="absolute w-3 h-3 border-2 rounded-sm transform rotate-45" style={{ borderColor: '#F5C451' }}></div>
        <div className="absolute w-1.5 h-1.5 rounded-full" style={{ background: '#FFFFFF' }}></div>
      </div>
      <div className="font-bold tracking-tight text-xl leading-none">
        <span style={{ color: isLight ? '#0B1F3B' : '#FFFFFF' }}>FieldOps</span>{' '}
        <span style={{ color: '#F5C451' }}>Nexus</span>
      </div>
    </div>
  );
};

export default Logo;
