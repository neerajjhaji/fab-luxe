import React, { useState } from 'react';
import { MapPin, Compass, ExternalLink } from 'lucide-react';
import { CONNECTIVITY_POINTS } from '../data/projectsData';

export default function ConnectivityMapSection({ onOpenSiteVisit, onOpenConcierge }) {
  const [activeCategory, setActiveCategory] = useState('expressways');

  const LANDMARKS = [
    { name: 'Delhi-Meerut Expressway (NH-9)', category: 'expressways', time: '5 Mins', dist: '3.2 Km', detail: 'Direct signal-free 14-lane corridor connecting straight to Central Delhi and Akshardham.' },
    { name: 'Noida-Greater Noida Link Road', category: 'expressways', time: '2 Mins', dist: '1.0 Km', detail: 'Arterial 130m wide sector road providing seamless access to Pari Chowk and Noida.' },
    { name: 'Delhi-Meerut RRTS Transit Station', category: 'expressways', time: '10 Mins', dist: '5.8 Km', detail: 'High-speed rapid rail system connecting NCR to Meerut and Sarai Kale Khan.' },

    { name: 'Hindon River Metro Station (Blue Line)', category: 'transit', time: '15 Mins', dist: '8.1 Km', detail: 'Direct metro connection to Rajiv Chowk, Connaught Place, and Dwarka.' },
    { name: 'Noida Sector 52 & 62 Metro Hub', category: 'transit', time: '15 Mins', dist: '8.5 Km', detail: 'Interchange hub for Blue Line and Aqua Line metro networks.' },

    { name: 'Hindon Airport (Ghaziabad)', category: 'airport', time: '20 Mins', dist: '14.5 Km', detail: 'Domestic regional airport operating flight connectivity across tier-2 cities.' },
    { name: 'Noida International Airport (Jewar)', category: 'airport', time: '45 Mins', dist: '52.0 Km', detail: 'Upcoming Asia-Pacific aviation hub driving massive capital appreciation for Greater Noida West.' },

    { name: 'Noida Sector 62 & 63 IT/Business Park', category: 'corporate', time: '15 Mins', dist: '9.0 Km', detail: 'Primary tech hub featuring TCS, Accenture, Cognizant, and major MNC headquarters.' },
    { name: 'Gaur City Mall & Galleria Commercial', category: 'corporate', time: '5 Mins', dist: '2.5 Km', detail: 'Premium retail high-street, multiplexes, international fashion brands, and fine dining.' },

    { name: 'Yashoda Medicity & Fortis Hospital', category: 'social', time: '12 Mins', dist: '7.5 Km', detail: 'Top-tier multi-specialty tertiary care hospitals and emergency healthcare facilities.' },
    { name: 'DPS, Ryan International & Lotus Valley School', category: 'social', time: '8 Mins', dist: '4.0 Km', detail: 'Renowned international K-12 educational institutions within 5 km radius.' }
  ];

  const filteredLandmarks = LANDMARKS.filter(item => activeCategory === 'all' || item.category === activeCategory);

  return (
    <section id="location" style={{
      width: '100%',
      backgroundColor: '#0A0806',
      padding: '90px 4vw',
      color: '#FFFFFF',
      borderTop: '1px solid rgba(200, 164, 100, 0.25)',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            fontSize: '12px',
            color: '#C8A464',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontWeight: '700',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <MapPin size={16} />
            STRATEGIC LOCATION & CONNECTIVITY MAP
          </div>
          <h2 style={{
            fontFamily: "'Outfit', 'Cormorant Garamond', sans-serif",
            fontSize: 'clamp(32px, 4vw, 50px)',
            fontWeight: '700',
            color: '#FFFFFF'
          }}>
            Sector 4, Greater Noida West — The Prime Gold Corridor
          </h2>
          <p style={{ fontSize: '15px', color: '#B0A89C', maxWidth: '750px', margin: '12px auto 0', lineHeight: '1.6' }}>
            Enjoy unparalleled multi-modal connectivity via 14-lane expressways, RRTS bullet transit, metro corridors, and dual international airport access points.
          </p>
        </div>

        {/* Main Grid: Interactive Map + Connectivity Info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '36px',
          marginBottom: '50px',
          alignItems: 'stretch'
        }}>
          {/* Left Column: Embed Google Map Container */}
          <div style={{
            backgroundColor: '#15120E',
            border: '1px solid #C8A464',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}>
            <div style={{
              backgroundColor: '#0D0B09',
              padding: '16px 24px',
              borderBottom: '1px solid rgba(200, 164, 100, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Compass size={18} style={{ color: '#C8A464' }} />
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Live Sector 4 GPS Map
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Sector+4+Greater+Noida+West"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#C8A464',
                  fontSize: '11px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Google Map iFrame */}
            <div style={{ width: '100%', height: '420px', position: 'relative' }}>
              <iframe
                title="Forbes Fab Luxe Location Map"
                src="https://maps.google.com/maps?q=Sector%204%20Greater%20Noida%20West&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick Map Bar */}
            <div style={{
              padding: '20px 24px',
              backgroundColor: '#0D0B09',
              borderTop: '1px solid rgba(200, 164, 100, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <div style={{ fontSize: '11px', color: '#C8A464', fontWeight: '700', textTransform: 'uppercase' }}>
                  GPS COORDINATES & ADDRESS
                </div>
                <div style={{ fontSize: '13px', color: '#FFFFFF', marginTop: '2px' }}>
                  Sector 4, Greater Noida West, Uttar Pradesh 201306
                </div>
              </div>

              <button
                onClick={onOpenSiteVisit}
                style={{
                  padding: '10px 18px',
                  backgroundColor: '#C8A464',
                  color: '#0D0B09',
                  border: 'none',
                  fontWeight: '700',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                REQUEST CAB PICKUP FOR VISIT
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Destination Tabs & List */}
          <div style={{
            backgroundColor: '#15120E',
            border: '1px solid rgba(200, 164, 100, 0.3)',
            borderRadius: '8px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ fontSize: '12px', color: '#C8A464', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>
                FILTER DESTINATION RADIUS
              </div>

              {/* Category Filter Pills */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                {[
                  { id: 'expressways', label: 'Expressways & Transit' },
                  { id: 'transit', label: 'Metro Corridors' },
                  { id: 'airport', label: 'Dual Airports' },
                  { id: 'corporate', label: 'IT Parks & Malls' },
                  { id: 'social', label: 'Hospitals & Schools' },
                  { id: 'all', label: 'All Landmarks' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      cursor: 'pointer',
                      border: activeCategory === cat.id ? '1px solid #C8A464' : '1px solid rgba(200,164,100,0.15)',
                      backgroundColor: activeCategory === cat.id ? '#C8A464' : '#0D0B09',
                      color: activeCategory === cat.id ? '#0D0B09' : '#C8A464',
                      transition: 'all 0.2s'
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Landmark Item Cards */}
              <div style={{ display: 'grid', gap: '14px', maxHeight: '360px', overflowY: 'auto', paddingRight: '6px' }}>
                {filteredLandmarks.map((item, idx) => (
                  <div key={idx} style={{
                    backgroundColor: '#0D0B09',
                    border: '1px solid rgba(200, 164, 100, 0.2)',
                    borderRadius: '6px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#FFFFFF', marginBottom: '4px' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#A0988A', lineHeight: '1.4' }}>
                        {item.detail}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', minWidth: '80px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '800', color: '#C8A464' }}>
                        {item.time}
                      </div>
                      <div style={{ fontSize: '11px', color: '#80786C' }}>
                        {item.dist}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Enquire Action */}
            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(200,164,100,0.2)', display: 'flex', gap: '12px' }}>
              <button
                onClick={onOpenSiteVisit}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#C8A464',
                  color: '#0D0B09',
                  border: 'none',
                  fontWeight: '700',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                SCHEDULE LOCATION TOUR
              </button>
              <button
                onClick={onOpenConcierge}
                style={{
                  padding: '12px 20px',
                  backgroundColor: 'transparent',
                  border: '1px solid #C8A464',
                  color: '#C8A464',
                  fontWeight: '700',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                LOCATION REPORT
              </button>
            </div>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          {CONNECTIVITY_POINTS.map((cp, idx) => (
            <div key={idx} style={{
              backgroundColor: '#15120E',
              border: '1px solid rgba(200, 164, 100, 0.25)',
              padding: '20px',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: '800', color: '#C8A464', fontFamily: "'Outfit', sans-serif" }}>
                {cp.time}
              </div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#FFFFFF', margin: '4px 0 2px' }}>
                {cp.name}
              </div>
              <div style={{ fontSize: '11px', color: '#A0988A' }}>
                Distance: {cp.distance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
