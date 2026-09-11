import React from 'react';
import { Sparkles } from 'lucide-react';
import { PHILOSOPHY_POINTS } from '../data/projectsData';

export default function Philosophy() {
  return (
    <section id="philosophy" style={{
      backgroundColor: '#070605',
      color: '#F5F2EC',
      padding: '100px 4vw',
      borderBottom: '1px solid rgba(200, 164, 100, 0.15)'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>

        {/* Lodha-style Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '3px',
            color: '#C8A464',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '10px'
          }}>
            OUR PURPOSE
          </span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '700',
            lineHeight: '1.15',
            color: '#F5F2EC'
          }}>
            Do Good. Do Well. <span style={{ color: '#C8A464', fontStyle: 'italic' }}>Crafting Iconic Residences.</span>
          </h2>
          <div style={{
            width: '60px',
            height: '2px',
            backgroundColor: '#C8A464',
            margin: '20px auto 0'
          }} />
        </div>

        {/* Editorial Split Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Column: Vision Card */}
          <div style={{
            position: 'relative',
            borderRadius: '2px',
            overflow: 'hidden',
            border: '1px solid rgba(200, 164, 100, 0.25)'
          }}>
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
              alt="Forbes Fab Luxe Architectural Excellence"
              style={{
                width: '100%',
                height: '480px',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.85)'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(7,6,5,0.95), transparent)',
              padding: '30px',
              color: '#F5F2EC'
            }}>
              <div style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '2px',
                color: '#C8A464',
                textTransform: 'uppercase',
                marginBottom: '6px'
              }}>
                FORBES GLOBAL PROPERTIES ASSOCIATION
              </div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '26px',
                fontWeight: '700',
                margin: 0
              }}>
                Uncompromising Standards in High-Rise Luxury
              </h3>
            </div>
          </div>

          {/* Right Column: Key Philosophy Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {PHILOSOPHY_POINTS.map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                gap: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(200, 164, 100, 0.15)',
                padding: '24px',
                borderRadius: '2px',
                transition: 'border-color 0.2s'
              }}>
                <div style={{
                  backgroundColor: 'rgba(200, 164, 100, 0.1)',
                  border: '1px solid #C8A464',
                  width: '48px',
                  height: '48px',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Sparkles size={22} style={{ color: '#C8A464' }} />
                </div>
                <div>
                  <h4 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#F5F2EC',
                    margin: '0 0 6px'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#B0A89C',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
