import React, { useState } from 'react';
import { X, Download } from 'lucide-react';

export default function SiteMapModal({ isOpen, onClose, onOpenSiteVisit, onOpenBrochure }) {
  const [selectedHotspot, setSelectedHotspot] = useState('all');

  if (!isOpen) return null;

  const HOTSPOTS = [
    { id: 'clubhouse', title: '75,000 Sq.Ft. Forbes Grand Clubhouse', zone: 'Central Zone', desc: '6-Star hospitality clubhouse featuring heated indoor pool, bowling alley, cigar lounge, and mini theatre.' },
    { id: 'towers', title: '11 Sky Towers (G+35 Floors)', zone: 'Perimeter Ring', desc: 'Iconic architectural high-rises designed for 270° green park and lagoon views with private elevators.' },
    { id: 'lagoon', title: 'Resort Lagoon Pool & Waterfalls', zone: 'Heart Zone', desc: 'Temperature-controlled infinity pool with sunken seating cabanas and palm garden walkways.' },
    { id: 'sports', title: 'World-Class Sports Academy', zone: 'North Court', desc: 'Pro-grade tennis courts, squash courts, badminton arena, and Olympic-length running track.' },
    { id: 'entry', title: 'Grand Entry Plaza & Security Check', zone: 'South Entrance', desc: 'Triple-height grand entrance archway with AI license plate recognition and RFID security gates.' }
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      backgroundColor: 'rgba(5, 4, 3, 0.92)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '2px solid #A68142',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '1200px',
        maxHeight: '90vh',
        overflowY: 'auto',
        color: '#1A1815',
        boxShadow: '0 25px 60px rgba(166, 129, 66, 0.25)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Modal Top Header */}
        <div style={{
          padding: '24px 32px',
          borderBottom: '1px solid rgba(166, 129, 66, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#FAF7F2',
          sticky: 'top'
        }}>
          <div>
            <div style={{ fontSize: '11px', color: '#A68142', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>
              MASTER PLAN & ARCHITECTURAL SITE LAYOUT
            </div>
            <h2 style={{ fontFamily: "'Outfit', 'Cormorant Garamond', sans-serif", fontSize: '26px', color: '#1A1815', margin: '4px 0 0' }}>
              13-Acre Master Site Map — Sector 4, Greater Noida West
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #A68142',
              color: '#A68142',
              padding: '8px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          {/* Left Column: Interactive Site Plan Image */}
          <div>
            <div style={{
              position: 'relative',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid #A68142',
              backgroundColor: '#FAF7F2',
              boxShadow: '0 10px 30px rgba(166, 129, 66, 0.15)'
            }}>
              <img
                src="/images/1.png"
                alt="Forbes Fab Luxe Master Site Plan"
                style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.95 }}
              />

              {/* Hotspot Badge Overlays */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: 'rgba(250, 247, 242, 0.92)',
                border: '1px solid #A68142',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '11px',
                color: '#A68142',
                fontWeight: '700',
                letterSpacing: '1px'
              }}>
                13-ACRE CAMPUS • 70% OPEN GREENS
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              <button
                onClick={() => {
                  onClose();
                  onOpenBrochure();
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#A68142',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: '700',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <Download size={14} />
                DOWNLOAD HD MASTER PLAN PDF
              </button>
            </div>
          </div>

          {/* Right Column: Hotspots & Specifications */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '12px', color: '#A68142', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px' }}>
                EXPLORE CAMPUS ZONES
              </div>

              {/* Hotspot List Cards */}
              <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
                {HOTSPOTS.map((hs) => (
                  <div
                    key={hs.id}
                    onClick={() => setSelectedHotspot(hs.id)}
                    style={{
                      backgroundColor: selectedHotspot === hs.id ? '#FAF7F2' : '#FFFFFF',
                      border: selectedHotspot === hs.id ? '1px solid #A68142' : '1px solid rgba(166, 129, 66, 0.2)',
                      borderRadius: '6px',
                      padding: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: '#1A1815' }}>{hs.title}</span>
                      <span style={{ fontSize: '10px', color: '#A68142', textTransform: 'uppercase', fontWeight: '700' }}>{hs.zone}</span>
                    </div>
                    <p style={{ fontSize: '12px', color: '#5E574F', margin: 0, lineHeight: '1.4' }}>
                      {hs.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ borderTop: '1px solid rgba(166, 129, 66, 0.2)', paddingTop: '20px', display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  onClose();
                  onOpenSiteVisit();
                }}
                style={{
                  flex: 1,
                  padding: '14px',
                  backgroundColor: '#A68142',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: '800',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                BOOK VIP SITE MAP TOUR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
