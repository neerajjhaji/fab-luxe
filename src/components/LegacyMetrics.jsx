import React from 'react';
import { Crown, Building2, Trees, ShieldCheck } from 'lucide-react';

export default function LegacyMetrics() {
  const stats = [
    {
      icon: Trees,
      value: '13 Acres',
      label: 'Ultra Resort Campus',
      subtext: '70% Land Dedicated to Natural Oxygen Gardens & Lagoons'
    },
    {
      icon: Crown,
      value: '75,000 Sq.Ft.',
      label: 'Grand Club House',
      subtext: '6-Star Rated Private Resident Country Club'
    },
    {
      icon: Building2,
      value: '11 Towers',
      label: 'Sky High Landmarks',
      subtext: 'G+35 Architectural Marvels with Panoramic Sundeck Views'
    },
    {
      icon: ShieldCheck,
      value: '3 Years',
      label: 'Forbes Global Services',
      subtext: 'Complimentary White-Glove Managed Concierge Service'
    }
  ];

  return (
    <section id="highlights" style={{
      width: '100%',
      backgroundColor: '#0D0B09',
      padding: '80px 4vw',
      position: 'relative',
      borderTop: '1px solid rgba(200, 164, 100, 0.15)',
      borderBottom: '1px solid rgba(200, 164, 100, 0.15)',
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
            ARCHITECTURAL BENCHMARKS
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            color: '#FFFFFF',
            fontWeight: '400',
            maxWidth: '750px',
            margin: '0 auto 16px'
          }}>
            A Benchmark of Excellence Crafted for the Global Elite
          </h2>
          <div style={{ width: '80px', height: '2px', background: '#C8A464', margin: '0 auto' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#15120E',
                  border: '1px solid rgba(200, 164, 100, 0.2)',
                  borderRadius: '4px',
                  padding: '36px 28px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C8A464';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(200, 164, 100, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200, 164, 100, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(200, 164, 100, 0.1)',
                  border: '1px solid rgba(200, 164, 100, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: '#C8A464'
                }}>
                  <Icon size={26} />
                </div>

                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '40px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  lineHeight: '1.1',
                  marginBottom: '8px'
                }}>
                  {stat.value}
                </div>

                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#C8A464',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '10px'
                }}>
                  {stat.label}
                </div>

                <p style={{
                  fontSize: '13px',
                  color: '#A0988A',
                  lineHeight: '1.5'
                }}>
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
