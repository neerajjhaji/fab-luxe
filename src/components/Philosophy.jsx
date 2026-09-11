import React from 'react';
import { Sparkles } from 'lucide-react';
import { PHILOSOPHY_POINTS } from '../data/projectsData';

export default function Philosophy() {
  return (
    <section id="philosophy" style={{
      backgroundColor: '#FAF8F5',
      color: '#1A1815',
      padding: '100px 4vw',
      borderBottom: '1px solid rgba(166, 129, 66, 0.15)'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>

        {/* Lodha-style Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '3px',
            color: '#A68142',
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
            color: '#1A1815'
          }}>
            Do Good. Do Well. <span style={{ color: '#A68142', fontStyle: 'italic' }}>Crafting Iconic Residences.</span>
          </h2>
          <div style={{
            width: '60px',
            height: '2px',
            backgroundColor: '#A68142',
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
            borderRadius: '6px',
            overflow: 'hidden',
            border: '1px solid rgba(166, 129, 66, 0.25)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.06)'
          }}>
            <img
              src="/images/about_bg.png"
              alt="Forbes Fab Luxe Architectural Excellence"
              style={{
                width: '100%',
                height: '480px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(26,24,21,0.92), transparent)',
              padding: '30px',
              color: '#FFFFFF'
            }}>
              <div style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '2px',
                color: '#A68142',
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
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(166, 129, 66, 0.2)',
                padding: '24px',
                borderRadius: '6px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  backgroundColor: '#FAF7F2',
                  border: '1px solid #A68142',
                  width: '48px',
                  height: '48px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Sparkles size={22} style={{ color: '#A68142' }} />
                </div>
                <div>
                  <h4 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#1A1815',
                    margin: '0 0 6px'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#5E574F',
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
