import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

/* ─── Inline-safe constants for v4 token reliability ─── */
const NAVY       = '#0A1627';
const NAVY_LIGHT = '#162A4B';
const GOLD       = '#F5C451';
const GOLD_HOVER = '#fcd36c';
const BORDER_DARK = 'rgba(255,255,255,0.08)';

/* ─── Gold CTA Button ─── */
const GoldButton = ({ children, className = '', ...props }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className={`inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-[10px] px-6 py-3 text-[15px] leading-none ${className}`}
      style={{
        background: hovered ? GOLD_HOVER : GOLD,
        color: NAVY,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
};

/* ─── Nav Link with gold hover + underline ─── */
const NavLink = ({ children, href = '#' }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className="relative flex flex-col items-start text-[15px] font-medium py-2 transition-colors duration-200"
      style={{ color: hovered ? GOLD : '#FFFFFF' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <span
        className="absolute -bottom-0.5 left-0 h-[2px] transition-all duration-200"
        style={{
          background: GOLD,
          width: hovered ? '100%' : '0%',
        }}
      />
    </a>
  );
};

/* ─── Dropdown nav item ─── */
const NavDropdown = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  const [labelHovered, setLabelHovered] = useState(false);

  return (
    <div
      className="relative flex items-center h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="relative flex flex-col items-start text-[15px] font-medium py-2 transition-colors duration-200 focus:outline-none"
        style={{ color: open || labelHovered ? GOLD : '#FFFFFF' }}
        onMouseEnter={() => setLabelHovered(true)}
        onMouseLeave={() => setLabelHovered(false)}
        aria-expanded={open}
      >
        {label}
        <span
          className="absolute -bottom-0.5 left-0 h-[2px] transition-all duration-200"
          style={{
            background: GOLD,
            width: open ? '100%' : '0%',
          }}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className="absolute top-full left-0 pt-3 z-50 transition-all duration-200"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(8px)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <div
          className="rounded-xl py-2 w-56 shadow-lg"
          style={{
            background: NAVY_LIGHT,
            border: `1px solid ${BORDER_DARK}`,
          }}
        >
          {items.map((item, idx) => (
            <DropdownItem key={idx} href="#">{item}</DropdownItem>
          ))}
        </div>
      </div>
    </div>
  );
};

const DropdownItem = ({ children, href = '#' }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className="block px-5 py-2.5 text-sm transition-all duration-200"
      style={{
        color: hovered ? GOLD : 'rgba(255,255,255,0.85)',
        paddingLeft: hovered ? '24px' : '20px',
        background: hovered ? 'rgba(255,255,255,0.04)' : 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
};

/* ─── Main Navbar ─── */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Product',   items: ['Asset Management', 'Maintenance', 'Field Service', 'Operations'] },
    { label: 'Solutions', items: ['Asset Operations', 'Maintenance Operations', 'Field Service', 'Service Management'] },
    { label: 'Modules',   items: ['Asset Registry', 'Work Orders', 'Preventive Maintenance', 'Inventory', 'Service Requests'] },
    { label: 'Resources', items: ['Documentation', 'Product Overview', 'Guides', 'Contact'] },
  ];

  const navbarStyle = {
    background: NAVY,
    borderBottom: `1px solid ${isScrolled ? BORDER_DARK : 'transparent'}`,
    boxShadow: isScrolled ? '0 2px 12px rgba(0,0,0,0.3)' : 'none',
  };

  const mobileMenuStyle = {
    background: NAVY,
    borderTop: `1px solid ${BORDER_DARK}`,
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={navbarStyle}
      aria-label="Main navigation"
    >
      {/* ── Desktop / Main Row ── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[76px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Center nav — desktop only */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {navItems.map((nav, idx) => (
            <NavDropdown key={idx} label={nav.label} items={nav.items} />
          ))}
          <NavLink>Features</NavLink>
          <NavLink>About</NavLink>
        </div>

        {/* Right actions — desktop only */}
        <div className="hidden lg:flex items-center gap-6">
          <SignInLink />
          <GoldButton className="group">
            Get Started
            <ArrowUpRight
              size={18}
              className="ml-1.5 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </GoldButton>
        </div>

        {/* Hamburger — mobile only */}
        <MobileToggle open={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} />
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className="lg:hidden overflow-y-auto transition-all duration-300"
        style={{
          ...mobileMenuStyle,
          maxHeight: mobileOpen ? 'calc(100vh - 76px)' : '0',
          overflow: mobileOpen ? 'auto' : 'hidden',
          borderTop: mobileOpen ? `1px solid ${BORDER_DARK}` : 'none',
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navItems.map((nav, idx) => (
            <div key={idx} style={{ borderBottom: `1px solid ${BORDER_DARK}` }} className="pb-4">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {nav.label}
              </p>
              <div className="flex flex-col gap-3 pl-3" style={{ borderLeft: `2px solid ${BORDER_DARK}` }}>
                {nav.items.map((item, i) => (
                  <MobileNavLink key={i} href="#">{item}</MobileNavLink>
                ))}
              </div>
            </div>
          ))}

          <MobileNavLink href="#">Features</MobileNavLink>
          <MobileNavLink href="#">About</MobileNavLink>

          <div className="my-1" style={{ height: '1px', background: BORDER_DARK }} />

          <MobileNavLink href="#" centered>Sign In</MobileNavLink>
          <GoldButton className="w-full mt-1 justify-center group">
            Get Started
            <ArrowUpRight
              size={18}
              className="ml-1.5 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </GoldButton>
        </div>
      </div>
    </nav>
  );
};

/* ─── Small helpers ─── */
const SignInLink = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      className="text-[15px] font-medium transition-colors duration-200"
      style={{ color: hovered ? GOLD : '#FFFFFF' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Sign In
    </a>
  );
};

const MobileNavLink = ({ children, href = '#', centered = false }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className={`text-[15px] font-medium py-1 transition-colors duration-200 ${centered ? 'text-center' : ''}`}
      style={{ color: hovered ? GOLD : '#FFFFFF' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
};

const MobileToggle = ({ open, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className="lg:hidden p-1 transition-colors duration-200 focus:outline-none"
      style={{ color: hovered ? GOLD : '#FFFFFF' }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Toggle mobile menu"
      aria-expanded={open}
    >
      {open ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
};

export default Navbar;
