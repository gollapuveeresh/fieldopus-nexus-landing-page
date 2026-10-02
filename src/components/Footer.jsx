import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-border-dark pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-6">
              Connect assets, maintenance, field teams, service workflows and operational data in one unified platform designed for modern enterprise operations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gold mb-5 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-gold transition-colors">Asset Management</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Work Orders</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Preventive Maintenance</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Inventory</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gold mb-5 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-gold transition-colors">Asset Operations</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Field Service</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Manufacturing</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Facilities Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} FieldOps Nexus. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-surface transition-colors">Privacy</a>
            <a href="#" className="hover:text-surface transition-colors">Terms</a>
            <a href="#" className="hover:text-surface transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
