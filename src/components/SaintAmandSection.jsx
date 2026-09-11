import React from 'react';
import { ConciergeBell, PhoneCall } from 'lucide-react';
import { FORBES_SERVICES_LIST } from '../data/projectsData';

export default function SaintAmandSection({ onOpenConcierge }) {
  return (
    <section id="hospitality" style={{
      backgroundColor: '#070605',
      color: '#F5F2EC',
      padding: '100px 4vw',
      borderBottom: '1px solid rgba(200, 164, 100, 0.15)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>

        {/* Section Header */}
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
            OUR SIGNATURE SERVICES
          </span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '700',
            lineHeight: '1.15',
            color: '#F5F2EC'
          }}>
            Elevating the Everyday. <span style={{ color: '#C8A464', fontStyle: 'italic' }}>3 Years Forbes Managed.</span>
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#B0A89C',
            maxWidth: '750px',
            margin: '12px auto 0',
            lineHeight: '1.6'
          }}>
            Every resident enjoys 3 Years Complimentary White-Glove Hospitality Managed by Forbes Global Properties Association.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
          marginBottom: '50px'
        }}>
          {FORBES_SERVICES_LIST.map((srv, idx) => (
            <div key={srv.title || idx} style={{
              backgroundColor: '#0D0B09',
              border: '1px solid rgba(200, 164, 100, 0.2)',
              padding: '32px 24px',
              borderRadius: '2px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s'
            }}>
              <div style={{
                backgroundColor: 'rgba(200, 164, 100, 0.1)',
                border: '1px solid #C8A464',
                width: '50px',
                height: '50px',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <ConciergeBell size={24} style={{ color: '#C8A464' }} />
              </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '24px',
                fontWeight: '700',
                color: '#F5F2EC',
                margin: '0 0 10px'
              }}>
                {srv.title}
              </h3>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#B0A89C',
                lineHeight: '1.6',
                margin: 0
              }}>
                {srv.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{
          backgroundColor: '#110F0C',
          border: '1px solid #C8A464',
          padding: '36px',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '28px',
            fontWeight: '700',
            color: '#F5F2EC',
            margin: '0 0 12px'
          }}>
            Experience Personalized Concierge Consultation
          </h3>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#B0A89C',
            marginBottom: '24px',
            maxWidth: '650px',
            margin: '0 auto 24px'
          }}>
            Schedule a confidential call with our Forbes Hospitality Advisor to discuss tailored amenities, valet privileges, and residence management.
          </p>
          <button
            onClick={onOpenConcierge}
            style={{
              backgroundColor: '#C8A464',
              color: '#070605',
              border: 'none',
              padding: '12px 30px',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <PhoneCall size={14} />
            <span>REQUEST PRIVATE CONSULTATION</span>
          </button>
        </div>

      </div>
    </section>
  );
}
