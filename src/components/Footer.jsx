import React from 'react';
import { Phone, MapPin, ShieldCheck, ArrowUp, Map } from 'lucide-react';
import { FAB_LUXE_PROJECT_DETAILS } from '../data/projectsData';

export default function Footer({ onOpenSiteVisit, _onOpenBrochure, onOpenFloorPlan, onOpenSiteMap }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      backgroundColor: '#050403',
      color: '#D8D0C5',
      borderTop: '1px solid rgba(200, 164, 100, 0.25)',
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px'
    }}>
      {/* Top Footer Banner */}
      <div style={{
        borderBottom: '1px solid rgba(200, 164, 100, 0.15)',
        padding: '40px 4vw'
      }}>
        <div style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '28px',
              fontWeight: '700',
              color: '#F5F2EC',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              display: 'block'
            }}>
              FORBES <span style={{ color: '#C8A464' }}>FAB LUXE</span> RESIDENCES
            </span>
            <span style={{ color: '#B0A89C', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              SECTOR 4, GREATER NOIDA WEST • RERA NO: {FAB_LUXE_PROJECT_DETAILS.reraNo}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenSiteMap}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #C8A464',
                color: '#C8A464',
                padding: '10px 20px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Map size={14} />
              MASTER SITE MAP
            </button>

            <button
              onClick={onOpenSiteVisit}
              style={{
                backgroundColor: '#C8A464',
                color: '#070605',
                border: 'none',
                padding: '10px 20px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              BOOK SITE VISIT
            </button>
          </div>
        </div>
      </div>

      {/* Categorized Sitemap Index */}
      <div style={{ padding: '60px 4vw', borderBottom: '1px solid rgba(200, 164, 100, 0.15)' }}>
        <div style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px'
        }}>
          {/* Column 1: Residential Properties */}
          <div>
            <h4 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '18px',
              fontWeight: '700',
              color: '#C8A464',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              RESIDENTIAL TYPOLOGIES
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: '#B0A89C' }}>
              <li><a onClick={onOpenFloorPlan} style={{ cursor: 'pointer' }}>3+1 BHK Sky Residences (2,250 – 2,650 Sq.Ft.)</a></li>
              <li><a onClick={onOpenFloorPlan} style={{ cursor: 'pointer' }}>4+1 BHK Grand Penthouses (3,150 – 3,850 Sq.Ft.)</a></li>
              <li><a onClick={onOpenSiteMap} style={{ cursor: 'pointer', color: '#C8A464', fontWeight: '600' }}>🗺️ View Master Site Layout Plan</a></li>
            </ul>
          </div>

          {/* Column 2: Key Amenities */}
          <div>
            <h4 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '18px',
              fontWeight: '700',
              color: '#C8A464',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              75,000 SQ.FT. CLUBHOUSE
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: '#B0A89C' }}>
              <li>Temperature-Controlled Resort Pool</li>
              <li>World-Class Sports Academy</li>
              <li>Wellness Spa & Olympic Gym</li>
              <li>Private Mini-Theater & Sky Lounge</li>
            </ul>
          </div>

          {/* Column 3: Connectivity */}
          <div>
            <h4 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '18px',
              fontWeight: '700',
              color: '#C8A464',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              CONNECTIVITY ADVANTAGES
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: '#B0A89C' }}>
              <li><a onClick={() => scrollToSection('location')} style={{ cursor: 'pointer' }}>Delhi-Meerut Expressway — 5 mins</a></li>
              <li><a onClick={() => scrollToSection('location')} style={{ cursor: 'pointer' }}>Delhi-Meerut RRTS — 10 mins</a></li>
              <li><a onClick={() => scrollToSection('location')} style={{ cursor: 'pointer' }}>Hindon River Metro — 15 mins</a></li>
              <li><a onClick={() => scrollToSection('location')} style={{ cursor: 'pointer' }}>Noida Sector 62 Hub — 15 mins</a></li>
              <li><a onClick={() => scrollToSection('location')} style={{ cursor: 'pointer', color: '#C8A464', fontWeight: '600' }}>📍 Explore Live GPS Map & Distances</a></li>
            </ul>
          </div>

          {/* Column 4: Regulatory & Contact */}
          <div>
            <h4 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '18px',
              fontWeight: '700',
              color: '#C8A464',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              OFFICIAL CONTACT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#B0A89C' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} style={{ color: '#C8A464' }} />
                <span>Helpline: {FAB_LUXE_PROJECT_DETAILS.helpline}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={14} style={{ color: '#C8A464' }} />
                <span>Sector 4, Greater Noida West, UP</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={14} style={{ color: '#C8A464' }} />
                <span>UPRERA: UPRERAPRJ995490</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Disclaimer & Back To Top */}
      <div style={{ padding: '30px 4vw', backgroundColor: '#030202', color: '#80786C', fontSize: '11px', lineHeight: '1.6' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ maxWidth: '900px' }}>
            <p style={{ margin: '0 0 8px' }}>
              <strong>Disclaimer:</strong> Forbes Fab Luxe Residences is an authorized luxury development registered under Uttar Pradesh RERA with Registration Number UPRERAPRJ995490. All images, specifications, rendered views, and floor plans are conceptual and indicative.
            </p>
            <p style={{ margin: 0 }}>
              © {new Date().getFullYear()} Forbes Fab Luxe Residences. All rights reserved. Managed in association with Forbes Global Properties.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              backgroundColor: 'rgba(200, 164, 100, 0.1)',
              border: '1px solid #C8A464',
              color: '#C8A464',
              padding: '8px 14px',
              fontSize: '11px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
