import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Menu, X, ArrowUpRight, ArrowRight, ChevronDown,
  Building2, Clock, FileText, Map, Package, CheckCircle2,
  Wrench, BookOpen, Phone, LayoutGrid, Settings2, Activity, Shield,
} from 'lucide-react';
import Logo from './Logo';

/* ─────────────────────────────────────────────
   COLOR TOKENS
───────────────────────────────────────────────*/
const C = {
  // Dark theme (for mega menu)
  navy:       '#0A1627',
  navyMid:    '#101F34',
  navyCard:   '#16263D',
  gold:       '#F5C451',
  goldHover:  '#fcd36c',
  border:     'rgba(255,255,255,0.08)',
  borderCard: 'rgba(255,255,255,0.10)',
  text:       '#FFFFFF',
  muted:      '#94A3B8',
  subtle:     '#CBD5E1',

  // Light theme (for navbar top bar & mobile menu surface)
  navBg:      '#FFFFFF',
  navText:    '#0B1F3B',
  navBorder:  '#E5E7EB',
  navShadow:  '0 1px 8px rgba(11,31,59,0.06)',
  navyBtn:    '#0B1F3B',
  navyBtnHov: '#162A4B',
};

/* ─────────────────────────────────────────────
   MEGA-MENU DATA  (existing project content)
───────────────────────────────────────────────*/
const MEGA_DATA = {
  Product: {
    columns: [
      {
        heading: 'Asset Operations',
        items: [
          { icon: Building2,    title: 'Asset Lifecycle',         desc: 'Track history, performance and maintenance needs from procurement to retirement.' },
          { icon: Clock,        title: 'Preventive Maintenance',  desc: 'Automate schedules to reduce downtime and extend the life of critical equipment.' },
        ],
      },
      {
        heading: 'Field & Service',
        items: [
          { icon: Map,          title: 'Field Service Operations', desc: 'Dispatch technicians with mobile access to asset context and checklists.' },
          { icon: CheckCircle2, title: 'Service Requests & SLA',   desc: 'Capture issues quickly and automatically enforce service level agreements.' },
        ],
      },
      {
        heading: 'Work & Inventory',
        items: [
          { icon: FileText, title: 'Work Order Management',  desc: 'Create, assign, and track work orders with complete visibility into status.' },
          { icon: Package,  title: 'Spare Parts & Inventory', desc: 'Manage stock, reservations, and consumption connected directly to work orders.' },
        ],
      },
    ],
    card: {
      eyebrow: 'Platform Overview',
      heading: 'Everything connected around the work.',
      desc:    'Connect assets, maintenance, field teams and operational data in one unified platform.',
      cta:     'Explore Platform',
    },
  },

  Solutions: {
    columns: [
      {
        heading: 'Operations',
        items: [
          { icon: Activity, title: 'Asset Operations',       desc: 'Unify asset data, service history and maintenance in one operational view.' },
          { icon: Wrench,   title: 'Maintenance Operations', desc: 'Plan and execute preventive and corrective maintenance at scale.' },
        ],
      },
      {
        heading: 'Service',
        items: [
          { icon: Map,    title: 'Field Service',       desc: 'Equip field teams with real-time work context, checklists and parts.' },
          { icon: Shield, title: 'Service Management', desc: 'Manage SLAs, contracts and escalations across service workflows.' },
        ],
      },
    ],
    card: {
      eyebrow: 'One Connected Model',
      heading: 'Bring assets, people and workflows into one view.',
      desc:    'FieldOps Nexus connects the operational lifecycle from service request through closure.',
      cta:     'See Solutions',
    },
  },

  Modules: {
    columns: [
      {
        heading: 'Assets & Maintenance',
        items: [
          { icon: Building2,    title: 'Asset Registry',         desc: 'Central register for all assets, documents and service records.' },
          { icon: Clock,        title: 'Preventive Maintenance', desc: 'Automated schedules, checklists and compliance tracking.' },
          { icon: CheckCircle2, title: 'Inspections',            desc: 'Checklist-driven inspections linked to assets and work orders.' },
        ],
      },
      {
        heading: 'Operations',
        items: [
          { icon: FileText, title: 'Work Orders',      desc: 'Full work order lifecycle from creation to sign-off.' },
          { icon: Package,  title: 'Inventory',        desc: 'Warehouses, parts, stock levels, reservations and transfers.' },
          { icon: Map,      title: 'Service Requests', desc: 'Capture, triage and route incoming service requests.' },
        ],
      },
    ],
    card: {
      eyebrow: 'Full Module Coverage',
      heading: 'From request to resolution.',
      desc:    'REQUEST → TRIAGE → WORK ORDER → ASSIGN → EXECUTE → VERIFY → CLOSE.',
      cta:     'View All Modules',
    },
  },

  Resources: {
    columns: [
      {
        heading: 'Learn',
        items: [
          { icon: BookOpen,   title: 'Documentation',    desc: 'Reference guides, API docs and integration walkthroughs.' },
          { icon: LayoutGrid, title: 'Product Overview', desc: 'A high-level view of the FieldOps Nexus platform.' },
        ],
      },
      {
        heading: 'Support',
        items: [
          { icon: Settings2, title: 'Guides',  desc: 'Step-by-step setup and configuration guides.' },
          { icon: Phone,     title: 'Contact', desc: 'Get in touch with the FieldOps Nexus team.' },
        ],
      },
    ],
    card: {
      eyebrow: 'Get Started',
      heading: 'Bring every field operation into focus.',
      desc:    'Connect assets, service workflows and field execution through one operational platform.',
      cta:     'Get Started',
    },
  },
};

const MEGA_KEYS = Object.keys(MEGA_DATA);

/* ─────────────────────────────────────────────
   ICON CONTAINER (Dark Mega Menu)
───────────────────────────────────────────────*/
const IconBox = ({ icon: Icon, active }) => (
  <div
    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-150"
    style={{ background: C.navyCard, border: `1px solid ${C.border}` }}
  >
    <Icon size={17} style={{ color: active ? C.gold : C.muted }} />
  </div>
);

/* ─────────────────────────────────────────────
   MEGA MENU ITEM (Dark Mega Menu)
───────────────────────────────────────────────*/
const MegaItem = ({ icon, title, desc }) => {
  const [hov, setHov] = useState(false);
  return (
    <a
      href="#"
      className="flex items-start gap-3 p-3 rounded-xl transition-all duration-150 cursor-pointer"
      style={{ background: hov ? C.navyMid : 'transparent' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <IconBox icon={icon} active={hov} />
      <div>
        <div className="text-[13.5px] font-semibold leading-snug transition-colors duration-150"
          style={{ color: hov ? C.gold : C.text }}>
          {title}
        </div>
        <div className="text-[12px] leading-relaxed mt-0.5"
          style={{ color: hov ? C.subtle : C.muted }}>
          {desc}
        </div>
      </div>
    </a>
  );
};

/* ─────────────────────────────────────────────
   RIGHT-SIDE HIGHLIGHT CARD (Dark Mega Menu)
───────────────────────────────────────────────*/
const HighlightCard = ({ card }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="rounded-2xl p-7 flex flex-col justify-between h-full min-h-[220px] transition-all duration-200"
      style={{ background: C.navyMid, border: `1px solid ${hov ? C.gold : C.borderCard}` }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>
          {card.eyebrow}
        </div>
        <h3 className="text-[16px] font-bold leading-snug mb-3" style={{ color: C.text }}>
          {card.heading}
        </h3>
        <p className="text-[12.5px] leading-relaxed" style={{ color: C.muted }}>
          {card.desc}
        </p>
      </div>
      <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold"
        style={{ color: C.gold }}>
        {card.cta} <ArrowRight size={14} />
      </a>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MEGA MENU PANEL (Dark full-width dropdown)
───────────────────────────────────────────────*/
const MegaMenuPanel = ({ menuKey, visible }) => {
  const data = MEGA_DATA[menuKey];
  if (!data) return null;

  return (
    <div
      className="fixed left-0 right-0 transition-all duration-200"
      style={{
        top:           '76px', // Matches navbar height exactly
        transform:     `translateY(${visible ? '0px' : '-4px'})`,
        opacity:       visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        background:    C.navy,
        borderTop:     `1px solid ${C.border}`,
        borderBottom:  `1px solid ${C.border}`,
        boxShadow:     '0 16px 40px rgba(0,0,0,0.4)',
        zIndex:        60,
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-8">
        <div className="flex gap-6">
          {/* Content Columns */}
          <div className="flex flex-1 gap-0 min-w-0">
            {data.columns.map((col, ci) => (
              <div
                key={ci}
                className="flex-1 min-w-0 px-4"
                style={{ borderLeft: ci > 0 ? `1px solid ${C.border}` : 'none' }}
              >
                <div className="text-[10px] font-bold uppercase tracking-widest mb-4 pb-2"
                  style={{ color: C.muted, borderBottom: `1px solid ${C.border}` }}>
                  {col.heading}
                </div>
                <div className="flex flex-col gap-1">
                  {col.items.map((item, ii) => (
                    <MegaItem key={ii} icon={item.icon} title={item.title} desc={item.desc} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Separator */}
          <div className="w-px self-stretch" style={{ background: C.border }} />
          {/* Right card */}
          <div className="w-[260px] flex-shrink-0">
            <HighlightCard card={data.card} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   HOVER WRAPPER (Light text for white navbar)
───────────────────────────────────────────────*/
const HoverMenuWrapper = ({ menuKey, activeMenu, onOpen, onClose }) => {
  const isOpen = activeMenu === menuKey;
  const [labelHov, setLabelHov] = useState(false);
  const active = isOpen || labelHov;

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => onOpen(menuKey)}
      onMouseLeave={onClose}
    >
      {/* Trigger button */}
      <button
        className="relative flex items-center gap-1 text-[15px] font-[500] py-2 h-full transition-colors duration-200 focus:outline-none select-none"
        style={{ color: active ? C.gold : C.navText }}
        onMouseEnter={() => setLabelHov(true)}
        onMouseLeave={() => setLabelHov(false)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {menuKey}
        <ChevronDown
          size={14}
          className="transition-transform duration-200"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: active ? C.gold : C.navText,
            opacity: active ? 1 : 0.6
          }}
        />
        <span
          className="absolute -bottom-0 left-0 h-[2px] transition-all duration-200"
          style={{ background: C.gold, width: active ? '100%' : '0%' }}
        />
      </button>

      {/* Mega panel */}
      <MegaMenuPanel menuKey={menuKey} visible={isOpen} />
    </div>
  );
};

/* ─────────────────────────────────────────────
   PLAIN NAV LINK (Features / About)
───────────────────────────────────────────────*/
const NavLink = ({ children, href = '#' }) => {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      className="relative flex items-center text-[15px] font-[500] py-2 transition-colors duration-200"
      style={{ color: hov ? C.gold : C.navText }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
      <span
        className="absolute -bottom-0 left-0 h-[2px] transition-all duration-200"
        style={{ background: C.gold, width: hov ? '100%' : '0%' }}
      />
    </a>
  );
};

/* ─────────────────────────────────────────────
   NAVY CTA BUTTON (Replaces GoldButton)
───────────────────────────────────────────────*/
const NavyButton = ({ children, className = '', ...props }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      className={`group inline-flex items-center justify-center font-[600] transition-all duration-200 rounded-[10px] px-6 py-3 text-[15px] leading-none ${className}`}
      style={{ background: hov ? C.navyBtnHov : C.navyBtn, color: '#FFFFFF' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      {...props}
    >
      {children}
      <ArrowUpRight 
        size={17} 
        className="ml-1.5 transition-transform duration-200" 
        style={{ transform: hov ? 'translate(2px, -2px)' : 'translate(0px, 0px)' }}
      />
    </button>
  );
};

/* ─────────────────────────────────────────────
   SIGN IN LINK
───────────────────────────────────────────────*/
const SignInLink = () => {
  const [hov, setHov] = useState(false);
  return (
    <a
      href="#"
      className="text-[15px] font-[600] transition-colors duration-200"
      style={{ color: hov ? C.gold : C.navText }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      Sign In
    </a>
  );
};

/* ─────────────────────────────────────────────
   MOBILE NAV LINK
───────────────────────────────────────────────*/
const MobileNavLink = ({ children, href = '#', centered = false }) => {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      className={`block px-3 py-2 text-[15px] font-[500] rounded-lg transition-all duration-150 ${centered ? 'text-center' : ''}`}
      style={{ 
        color: hov ? C.gold : C.navText, 
        background: hov ? '#F1F5F9' : 'transparent' 
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  );
};

/* ─────────────────────────────────────────────
   MOBILE ACCORDION (Light Surface)
───────────────────────────────────────────────*/
const MobileAccordion = ({ label, data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.navBorder}` }}>
      <button
        className="w-full flex items-center justify-between py-4 text-[15px] font-[600] transition-colors duration-200"
        style={{ color: open ? C.gold : C.navText }}
        onClick={() => setOpen(p => !p)}
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          size={16}
          className="transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', color: open ? C.gold : C.navText, opacity: open ? 1 : 0.6 }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '600px' : '0px' }}
      >
        <div className="pb-4 flex flex-col gap-4 mt-2">
          {data.columns.map((col, ci) => (
            <div key={ci}>
              <div className="text-[11px] font-[700] uppercase tracking-widest mb-2 px-2" style={{ color: '#64748B' }}>
                {col.heading}
              </div>
              <div className="flex flex-col gap-1">
                {col.items.map((item, ii) => (
                  <MobileNavLink key={ii} href="#">{item.title}</MobileNavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MOBILE HAMBURGER (Light surface)
───────────────────────────────────────────────*/
const MobileToggle = ({ open, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      className="lg:hidden p-1 transition-colors duration-200 focus:outline-none"
      style={{ color: hov ? C.gold : C.navText }}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label="Toggle mobile menu"
      aria-expanded={open}
    >
      {open ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
};

/* ─────────────────────────────────────────────
   MAIN NAVBAR
───────────────────────────────────────────────*/
const Navbar = () => {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // hover-controlled
  const closeTimer = useRef(null);

  /* Scroll tracking */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Escape key closes mega menu */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setActiveMenu(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const openMenu = useCallback((key) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(key);
  }, []);

  const closeMenu = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  }, []);

  useEffect(() => {
    return () => clearTimeout(closeTimer.current);
  }, []);

  const hasOpenMenu = activeMenu !== null;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background:   C.navBg,
        borderBottom: `1px solid ${C.navBorder}`,
        boxShadow:    scrolled ? C.navShadow : 'none',
      }}
      aria-label="Main navigation"
    >
      {/* ── TOP BAR ── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[76px] flex items-center justify-between relative">

        {/* Logo */}
        <div className="flex-shrink-0 z-50">
          <Logo theme="light" />
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {MEGA_KEYS.map((key) => (
            <HoverMenuWrapper
              key={key}
              menuKey={key}
              activeMenu={activeMenu}
              onOpen={openMenu}
              onClose={closeMenu}
            />
          ))}
          <NavLink>Features</NavLink>
          <NavLink>About</NavLink>
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-6 z-50">
          <SignInLink />
          <NavyButton>
            Get Started
          </NavyButton>
        </div>

        {/* Mobile hamburger */}
        <MobileToggle open={mobileOpen} onClick={() => setMobileOpen(p => !p)} />
      </div>

      {/* ── MOBILE MENU (accordion / tap) ── */}
      <div
        className="lg:hidden overflow-y-auto transition-all duration-300"
        style={{
          background:  C.navBg,
          maxHeight:   mobileOpen ? 'calc(100vh - 76px)' : '0px',
          overflow:    mobileOpen ? 'auto' : 'hidden',
          borderTop:   mobileOpen ? `1px solid ${C.navBorder}` : 'none',
        }}
      >
        <div className="px-6 py-4">
          {MEGA_KEYS.map((key) => (
            <MobileAccordion key={key} label={key} data={MEGA_DATA[key]} />
          ))}
          <div className="py-3" style={{ borderBottom: `1px solid ${C.navBorder}` }}>
            <MobileNavLink href="#">Features</MobileNavLink>
          </div>
          <div className="py-3" style={{ borderBottom: `1px solid ${C.navBorder}` }}>
            <MobileNavLink href="#">About</MobileNavLink>
          </div>
          <div className="pt-5 pb-6 flex flex-col gap-3">
            <MobileNavLink href="#" centered>Sign In</MobileNavLink>
            <NavyButton className="w-full justify-center">
              Get Started
            </NavyButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
