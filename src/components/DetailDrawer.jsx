import React from 'react';
import { X, CheckCircle2, Building2 } from 'lucide-react';
import { FAB_LUXE_PROJECT_DETAILS } from '../data/projectsData';

export default function DetailDrawer({ isOpen, onClose, onOpenSiteVisit, onOpenBrochure }) {
  if (!isOpen) return null;

  const specs = [
    { category: 'Structure & Tower Engineering', items: ['Earthquake Zone V Compliant RCC Framed Superstructure', 'High-speed Mitsubishi / Otis elevators (3.5 m/s) with ARD', 'Double Glazed Low-E Glass Windows for Heat & Sound Insulation'] },
    { category: 'Flooring & Wall Finishes', items: ['Imported Italian Marble in Living, Dining & Master Foyer', 'Engineered Wooden Flooring in Master Suite', 'Pop Punning with Premium Acrylic Emulsion Paints'] },
    { category: 'Kitchen & Plumbing', items: ['Siemens / Miele Modular Kitchen with Quartz Countertops', 'Hansgrohe / Kohler Concealed Thermostatic Bath Fittings', 'Dual Water Supply (Ro Purified + Softened Utility)'] },
    { category: 'Electrical & Automation', items: ['Schneider / Legrand Smart Home Automation Hub', 'VRV Air Conditioning System in Living & Bedrooms', '3-Phase 100% DG Power Back-up with Individual Sub-metering'] },
    { category: 'Security & Concierge', items: ['5-Tier Security with Biometric Elevator Access', 'AI Perimeter Cameras & 24/7 Security Marshals', 'Dedicated Forbes Global Concierge Desk in Tower Lobby'] }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'flex-end',
      animation: 'fadeIn 0.3s'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '560px',
        height: '100%',
        backgroundColor: '#15120E',
        borderLeft: '1px solid #C8A464',
        padding: '36px 32px',
        overflowY: 'auto',
        color: '#FFFFFF',
        position: 'relative',
        boxShadow: '-10px 0 30px rgba(0,0,0,0.8)'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'transparent',
            border: 'none',
            color: '#C8A464',
            cursor: 'pointer'
          }}
        >
          <X size={28} />
        </button>

        <div style={{ fontSize: '11px', color: '#C8A464', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600', marginBottom: '8px' }}>
          ARCHITECTURAL SPECIFICATIONS
        </div>

        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#FFFFFF', fontWeight: '600', marginBottom: '8px' }}>
          Forbes Fab Luxe Technical Portfolio
        </h2>

        <p style={{ fontSize: '13px', color: '#B0A89C', marginBottom: '28px' }}>
          RERA Registered: {FAB_LUXE_PROJECT_DETAILS.reraNo} • Sector 4, Greater Noida West
        </p>

        {/* Specifications Accordion List */}
        <div style={{ display: 'grid', gap: '24px', marginBottom: '36px' }}>
          {specs.map((group, idx) => (
            <div key={idx} style={{ backgroundColor: '#0D0B09', border: '1px solid rgba(200, 164, 100, 0.25)', borderRadius: '4px', padding: '20px' }}>
              <h3 style={{ fontSize: '15px', color: '#C8A464', fontWeight: '600', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building2 size={16} />
                {group.category}
              </h3>
              <div style={{ display: 'grid', gap: '8px' }}>
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#D0D0D0', lineHeight: '1.4' }}>
                    <CheckCircle2 size={15} style={{ color: '#C8A464', marginTop: '2px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => { onClose(); onOpenSiteVisit(); }}
            style={{
              flex: 1,
              padding: '14px',
              background: 'linear-gradient(135deg, #C8A464 0%, #A68142 100%)',
              color: '#0D0B09',
              border: 'none',
              fontWeight: '700',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderRadius: '2px',
              cursor: 'pointer'
            }}
          >
            Book Site Visit
          </button>

          <button
            onClick={() => { onClose(); onOpenBrochure(); }}
            style={{
              flex: 1,
              padding: '14px',
              background: 'transparent',
              border: '1px solid #C8A464',
              color: '#C8A464',
              fontWeight: '600',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderRadius: '2px',
              cursor: 'pointer'
            }}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
