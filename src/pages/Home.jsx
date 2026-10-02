import React from 'react';
import Button from '../components/Button';
import { ArrowRight, ArrowUpRight, BarChart3, Wrench, Package, Activity, Map, Clock, Network, Building2, Zap, FileText, CheckCircle2, Cloud, Server, Database } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* 
        ========================================================
        HERO SECTION (DARK)
        ========================================================
      */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 hero-bg overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-10">
          
          {/* Hero Content */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-border-dark mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              <span className="text-xs font-semibold tracking-wider text-surface uppercase">Enterprise Field Operations Platform</span>
            </div>
            
            <h1 className="text-[42px] leading-[1.05] md:text-[56px] lg:text-[72px] lg:leading-[1] font-extrabold text-surface mb-8 tracking-tight">
              Connected Operations.<br/>
              Smarter <span className="text-gold">Field Service.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-surface/80 mb-10 max-w-xl font-light leading-relaxed">
              Connect assets, maintenance, field teams, service workflows and operational data in one unified platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" className="text-base px-8 py-4 group">
                Get Started 
                <ArrowUpRight size={20} className="ml-1.5 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </Button>
              <Button variant="secondary" className="text-base px-8 py-4 group text-surface border-white/20 hover:border-gold hover:text-gold hover:bg-transparent">
                Explore Platform 
                <ArrowRight size={20} className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Hero Product Visual (STATIC PREVIEW) */}
          <div className="flex-1 w-full max-w-2xl relative">
            <div className="relative w-full aspect-[4/3] bg-navy-deep rounded-xl border border-border-dark shadow-2xl p-4 flex flex-col gap-4 overflow-hidden backdrop-blur-sm">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-border-dark pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-navy-light flex items-center justify-center border border-border-dark">
                    <Activity size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-surface">FieldOps Nexus</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide">Operations Platform</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/10"></div>
                  <div className="w-2 h-2 rounded-full bg-white/10"></div>
                  <div className="w-2 h-2 rounded-full bg-white/10"></div>
                </div>
              </div>

              {/* Workflow Nodes */}
              <div className="flex-1 relative flex flex-col justify-center">
                
                {/* Node 1: Asset */}
                <div className="absolute top-4 left-4 w-48 bg-navy-light border border-border-dark rounded-lg p-3 z-10 animate-[fade-in_1s_ease-out_0.2s_both]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[10px] font-medium text-slate-400 uppercase">Asset Status</div>
                    <div className="w-2 h-2 rounded-full bg-functional-success shadow-[0_0_8px_#10B981]"></div>
                  </div>
                  <div className="font-semibold text-surface text-sm">RTU-Roof-04</div>
                  <div className="text-xs text-slate-400 mt-1">HVAC System • Zone B</div>
                </div>

                {/* Node 2: Work Order */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 bg-navy border border-gold/30 rounded-lg p-4 shadow-[0_0_30px_rgba(245,196,81,0.1)] z-20 animate-[fade-in_1s_ease-out_0.4s_both]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[10px] font-bold text-gold uppercase tracking-wider">Work Order Active</div>
                    <span className="text-[10px] bg-functional-error/10 text-functional-error px-2 py-0.5 rounded font-medium border border-functional-error/20">CRITICAL</span>
                  </div>
                  <div className="font-semibold text-surface text-sm mb-1">WO-2026-8901</div>
                  <div className="text-xs text-slate-400 line-clamp-2">Routine filter replacement & pressure test required immediately.</div>
                </div>

                {/* Node 3: Technician / Parts */}
                <div className="absolute bottom-4 right-4 w-52 bg-navy-light border border-border-dark rounded-lg p-3 z-10 animate-[fade-in_1s_ease-out_0.6s_both]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-navy border border-border-dark flex items-center justify-center text-xs font-bold text-surface">AS</div>
                    <div>
                      <div className="text-xs font-semibold text-surface">Alex Smith</div>
                      <div className="text-[10px] text-slate-400">Dispatched • 12m away</div>
                    </div>
                  </div>
                  <div className="h-px w-full bg-border-dark mb-2"></div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span className="flex items-center gap-1"><Package size={10} /> Parts allocated</span>
                    <span className="text-functional-success font-medium">Ready</span>
                  </div>
                </div>

                {/* Abstract Connectors */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  <path d="M100,60 C 150,60 150,150 200,150" stroke="rgba(245,196,81,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" className="animate-[pulse_2s_ease-in-out_infinite]" />
                  <path d="M350,150 C 400,150 400,250 350,250" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================
        TRUST / INTRODUCTION SECTION (LIGHT)
        ========================================================
      */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center max-w-4xl">
          <div className="text-xs font-bold tracking-widest text-navy/50 uppercase mb-4">ONE CONNECTED OPERATING MODEL</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-8 tracking-tight">
            Bring assets, people and service workflows into one operational view.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            FieldOps Nexus is designed to connect the operational lifecycle from service request and triage through work execution, verification and closure.
          </p>
        </div>
      </section>

      {/* 
        ========================================================
        CAPABILITIES SECTION (DARK)
        ========================================================
      */}
      <section className="py-20 lg:py-28 bg-navy border-y border-border-dark">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-surface tracking-tight">Everything connected around the work.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Building2, title: 'Asset Lifecycle', desc: 'Track asset history, performance, and maintenance needs from procurement to retirement.' },
              { icon: Clock, title: 'Preventive Maintenance', desc: 'Automate maintenance schedules to reduce downtime and extend the life of critical equipment.' },
              { icon: FileText, title: 'Work Order Management', desc: 'Create, assign, and track work orders with complete visibility into execution status.' },
              { icon: Map, title: 'Field Service Operations', desc: 'Dispatch technicians efficiently with mobile access to asset context and checklists.' },
              { icon: Package, title: 'Spare Parts & Inventory', desc: 'Manage stock levels, reservations, and consumption connected directly to work orders.' },
              { icon: CheckCircle2, title: 'Service Requests & SLA', desc: 'Capture issues quickly and automatically enforce service level agreements.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-navy-light rounded-xl p-8 border border-border-dark shadow-sm hover:border-gold/30 transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-navy-dark border border-border-dark flex items-center justify-center mb-6 group-hover:bg-navy transition-colors">
                  <feature.icon size={24} className="text-surface group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-surface mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================
        WORKFLOW SECTION (LIGHT)
        ========================================================
      */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">From request to resolution.</h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0"></div>
            
            {['REQUEST', 'TRIAGE', 'WORK ORDER', 'ASSIGN', 'EXECUTE', 'VERIFY', 'CLOSE'].map((step, idx) => (
              <div key={idx} className="w-full lg:w-auto flex flex-col items-center relative z-10">
                <div className={`w-32 h-12 lg:w-36 lg:h-14 rounded-lg border bg-surface flex items-center justify-center shadow-sm font-semibold text-sm tracking-wider transition-colors duration-300
                  ${idx === 2 ? 'border-gold text-navy shadow-[0_0_15px_rgba(245,196,81,0.2)]' : 'border-border text-slate-500 hover:border-navy/20 hover:text-navy'}
                `}>
                  {step}
                </div>
                {/* Mobile connector */}
                {idx < 6 && <div className="h-6 w-0.5 bg-border lg:hidden my-1"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================
        ASSET LIFECYCLE SECTION (DARK)
        ========================================================
      */}
      <section className="py-20 lg:py-28 bg-navy border-y border-border-dark overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 lg:pr-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-surface tracking-tight mb-6">
              Keep every asset connected to its service history.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Eliminate disconnected data. FieldOps Nexus links every breakdown, inspection, and routine maintenance directly to the asset record, building a comprehensive lifecycle view.
            </p>
          </div>

          <div className="flex-1 w-full flex flex-col gap-4 relative">
            {/* Visual Lifecycle Layout */}
            <div className="bg-navy-light rounded-xl border border-border-dark shadow-sm p-6 flex flex-col gap-3 ml-0 lg:ml-12 z-20">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Asset Metadata</div>
              <div className="flex justify-between items-center pb-2 border-b border-border-dark">
                <span className="text-sm font-medium text-surface">PMP-Water-12</span>
                <span className="text-xs px-2 py-0.5 rounded bg-functional-success/10 text-functional-success font-medium border border-functional-success/20">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border-dark">
                <span className="text-sm text-slate-400">Location</span>
                <span className="text-sm font-medium text-surface">Facility B, Sector 4</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border-dark">
                <span className="text-sm text-slate-400">Service History</span>
                <span className="text-sm font-medium text-surface">12 Records</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Next Maintenance</span>
                <span className="text-sm font-medium text-gold">In 14 Days</span>
              </div>
            </div>

            <div className="bg-navy-light rounded-xl border border-gold/30 shadow-[0_4px_20px_rgba(245,196,81,0.08)] p-5 z-10 lg:-ml-4 transition-transform hover:-translate-y-1">
              <div className="text-[10px] font-bold text-gold uppercase tracking-wider mb-2">Current Lifecycle Phase</div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center border border-border-dark">
                  <Wrench size={20} className="text-surface" />
                </div>
                <div>
                  <div className="font-bold text-surface">Maintenance Execution</div>
                  <div className="text-xs text-slate-400 mt-0.5">Assigned to Field Team Alpha</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================================
        FIELD OPERATIONS SECTION (LIGHT)
        ========================================================
      */}
      <section className="py-24 lg:py-32 bg-background-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 50%, #0B1F3B 0%, transparent 60%)' }}></div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight mb-6">Give field teams the context they need.</h2>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Static App Preview */}
          <div className="bg-surface rounded-t-2xl border-x border-t border-border shadow-xl p-6 lg:p-10 pb-0 overflow-hidden relative">
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column: Work Order Details */}
              <div className="flex-1 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-navy">Pump Seal Replacement</h3>
                    <p className="text-sm text-slate-500 mt-1">WO-2026-8902</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-surface font-bold text-sm shadow-sm">MJ</div>
                </div>
                
                <div className="p-4 rounded-lg bg-surface-alt border border-border">
                  <div className="text-xs font-semibold text-slate-400 uppercase mb-3">Required Checklist</div>
                  <div className="space-y-3 text-sm font-medium text-navy">
                    <div className="flex items-center gap-3 opacity-50 line-through"><CheckCircle2 size={16} className="text-functional-success" /> Lockout/Tagout confirmed</div>
                    <div className="flex items-center gap-3 opacity-50 line-through"><CheckCircle2 size={16} className="text-functional-success" /> Drain system pressure</div>
                    <div className="flex items-center gap-3"><div className="w-4 h-4 rounded-full border-2 border-border"></div> Remove old seal housing</div>
                    <div className="flex items-center gap-3"><div className="w-4 h-4 rounded-full border-2 border-border"></div> Install and calibrate new seal</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Execution */}
              <div className="w-full md:w-72 flex flex-col gap-4">
                <div className="p-4 rounded-lg bg-surface border border-border shadow-sm">
                  <div className="text-xs font-semibold text-slate-400 uppercase mb-2">Parts Required</div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-medium text-navy">O-Ring Seal Pack</span>
                    <span className="text-slate-500">x2</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-navy">Lubricant Tube</span>
                    <span className="text-slate-500">x1</span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button variant="gold" className="w-full shadow-md justify-center">Complete Work Order</Button>
                </div>
              </div>
            </div>

            {/* Gradient fade out at bottom */}
            <div className="h-16 w-full bg-gradient-to-t from-surface to-transparent relative -mt-4"></div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================
        INTEGRATION SECTION (DARK)
        ========================================================
      */}
      <section className="py-20 lg:py-28 bg-navy border-y border-border-dark">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-surface tracking-tight mb-16">Connect the systems around your operation.</h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Center Node */}
            <div className="w-24 h-24 mx-auto rounded-2xl bg-navy-light border border-border-dark flex items-center justify-center shadow-lg relative z-20">
              <Network size={40} className="text-gold" />
            </div>

            {/* Orbiting Nodes (Static layout for simplicity and responsiveness) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 relative z-10">
              {['ERP', 'Accounting', 'Business Intelligence', 'IoT / Sensors', 'Fleet', 'Productivity', 'API', 'Webhooks'].map((sys, idx) => (
                <div key={idx} className="bg-navy-light border border-border-dark rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:border-gold/30 transition-colors">
                  {idx === 0 && <Database size={24} className="text-surface/50" />}
                  {idx === 3 && <Zap size={24} className="text-surface/50" />}
                  {idx === 6 && <Server size={24} className="text-surface/50" />}
                  {idx === 7 && <Cloud size={24} className="text-surface/50" />}
                  {[1,2,4,5].includes(idx) && <div className="w-6 h-6 rounded bg-navy-dark border border-border-dark"></div>}
                  <span className="text-sm font-semibold text-surface">{sys}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================
        FINAL CTA (DARK)
        ========================================================
      */}
      <section className="py-24 bg-navy-deep">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-surface tracking-tight mb-6">Bring every field operation into focus.</h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Connect assets, service workflows and field execution through one operational platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="gold" className="text-base px-8 py-4 group">
              Get Started 
              <ArrowUpRight size={20} className="ml-1.5 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </Button>
            <Button variant="secondary" className="text-base px-8 py-4 group text-surface border-white/20 hover:border-gold hover:text-gold hover:bg-transparent">
              Explore Platform 
              <ArrowRight size={20} className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
