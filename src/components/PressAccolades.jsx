import React from 'react';
import { PRESS_ACCOLADES } from '../data/projectsData';
import { Trophy } from 'lucide-react';

export default function PressAccolades() {
  return (
    <section style={{
      width: '100%',
      backgroundColor: '#0D0B09',
      padding: '90px 4vw',
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
            RECOGNITION & HONORS
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '400',
            color: '#FFFFFF'
          }}>
            Global Accolades & Press Coverage
          </h2>
          <div style={{ width: '80px', height: '2px', background: '#C8A464', margin: '14px auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {PRESS_ACCOLADES.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#15120E',
                border: '1px solid rgba(200, 164, 100, 0.25)',
                borderRadius: '4px',
                padding: '32px 28px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C8A464';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200, 164, 100, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(200, 164, 100, 0.1)',
                    border: '1px solid rgba(200, 164, 100, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C8A464'
                  }}>
                    <Trophy size={20} />
                  </div>
                  <span style={{ fontSize: '12px', color: '#C8A464', fontWeight: '700', backgroundColor: '#0D0B09', padding: '2px 10px', borderRadius: '12px', border: '1px solid #C8A46433' }}>
                    {item.year}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  marginBottom: '8px',
                  lineHeight: '1.25'
                }}>
                  {item.award}
                </h3>

                <div style={{ fontSize: '13px', color: '#C8A464', fontWeight: '600', marginBottom: '16px' }}>
                  Conferred by {item.by}
                </div>

                <p style={{
                  fontSize: '13px',
                  color: '#A0988A',
                  fontStyle: 'italic',
                  lineHeight: '1.6',
                  position: 'relative',
                  paddingLeft: '16px',
                  borderLeft: '2px solid rgba(200, 164, 100, 0.3)'
                }}>
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
