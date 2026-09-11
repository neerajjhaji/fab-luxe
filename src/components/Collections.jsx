import React from 'react';
import { COLLECTIONS_DATA } from '../data/projectsData';
import { Layers, Check } from 'lucide-react';

export default function Collections({ onOpenFloorPlan, onOpenSiteVisit }) {
  return (
    <section id="collections" style={{
      width: '100%',
      backgroundColor: '#0D0B09',
      padding: '100px 4vw',
      color: '#FFFFFF',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            fontSize: '12px',
            color: '#C8A464',
            textTransform: 'uppercase',
            letterSpacing: '2.5px',
            fontWeight: '600',
            marginBottom: '10px'
          }}>
            CURATED LIVABLE SPACES
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '400',
            color: '#FFFFFF'
          }}>
            The Residential Collections
          </h2>
          <p style={{ fontSize: '15px', color: '#B0A89C', maxWidth: '640px', margin: '12px auto 0' }}>
            Choose from meticulous layouts crafted with high-ceiling volumes, wrap-around terraces, and private lift access.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px'
        }}>
          {COLLECTIONS_DATA.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#15120E',
                border: '1px solid rgba(200, 164, 100, 0.25)',
                borderRadius: '6px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C8A464';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(200, 164, 100, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200, 164, 100, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Image */}
                <div style={{ position: 'relative', height: '240px' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: '#C8A464',
                    color: '#0D0B09',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '4px 10px',
                    borderRadius: '2px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px'
                  }}>
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '28px 24px' }}>
                  <div style={{ fontSize: '12px', color: '#A0988A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                    {item.subtitle}
                  </div>

                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '26px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    marginBottom: '8px'
                  }}>
                    {item.title}
                  </h3>

                  <div style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#C8A464',
                    fontFamily: "'Cormorant Garamond', serif",
                    marginBottom: '16px'
                  }}>
                    {item.price} <span style={{ fontSize: '13px', color: '#A0988A', fontWeight: '400', fontFamily: 'sans-serif' }}>({item.area})</span>
                  </div>

                  {/* Feature Checklist */}
                  <div style={{ borderTop: '1px solid rgba(200,164,100,0.15)', paddingTop: '16px', display: 'grid', gap: '8px' }}>
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#CCCCCC' }}>
                        <Check size={14} style={{ color: '#C8A464', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div style={{ padding: '0 24px 24px 24px', display: 'flex', gap: '10px' }}>
                <button
                  onClick={onOpenFloorPlan}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: 'transparent',
                    border: '1px solid #C8A464',
                    color: '#C8A464',
                    fontWeight: '600',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <Layers size={14} />
                  <span>View Plan</span>
                </button>

                <button
                  onClick={onOpenSiteVisit}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: '#C8A464',
                    color: '#0D0B09',
                    border: 'none',
                    fontWeight: '700',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    borderRadius: '2px',
                    cursor: 'pointer'
                  }}
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
