import React from 'react';
import { BUYER_JOURNEY_STEPS } from '../data/projectsData';
import { Calendar } from 'lucide-react';

export default function BuyerJourneySteps({ onOpenSiteVisit, onOpenConcierge }) {
  return (
    <section id="buyer-journey" style={{
      width: '100%',
      backgroundColor: '#15120E',
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
            EXCLUSIVE SEAMLESS EXPERIENCE
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '400',
            color: '#FFFFFF'
          }}>
            The 4-Step Forbes Buyer Journey
          </h2>
          <p style={{ fontSize: '15px', color: '#B0A89C', maxWidth: '640px', margin: '12px auto 0' }}>
            From your initial private consultation to key handover, experience absolute transparency and white-glove executive care.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {BUYER_JOURNEY_STEPS.map((step, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#0D0B09',
                border: '1px solid rgba(200, 164, 100, 0.2)',
                borderRadius: '4px',
                padding: '32px 24px',
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
                e.currentTarget.style.borderColor = 'rgba(200, 164, 100, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{
                  fontSize: '36px',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: '700',
                  color: '#C8A464',
                  marginBottom: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>{step.step}</span>
                  <div style={{ width: '32px', height: '1px', background: 'rgba(200,164,100,0.3)' }} />
                </div>

                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  marginBottom: '10px',
                  lineHeight: '1.3'
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '13px',
                  color: '#A0988A',
                  lineHeight: '1.6'
                }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{
          marginTop: '50px',
          backgroundColor: '#0D0B09',
          border: '1px solid #C8A464',
          borderRadius: '4px',
          padding: '32px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{ fontSize: '22px', fontFamily: "'Cormorant Garamond', serif", color: '#FFFFFF', fontWeight: '600' }}>
              Ready to Begin Your Private Journey?
            </div>
            <div style={{ fontSize: '14px', color: '#B0A89C', marginTop: '4px' }}>
              Request a private chauffeur pickup & guided site visit to Sector 4, Greater Noida West.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenSiteVisit}
              style={{
                background: 'linear-gradient(135deg, #C8A464 0%, #A68142 100%)',
                color: '#0D0B09',
                border: 'none',
                padding: '14px 28px',
                fontWeight: '700',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderRadius: '2px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Calendar size={16} />
              <span>Request VIP Visit</span>
            </button>

            <button
              onClick={onOpenConcierge}
              style={{
                background: 'transparent',
                border: '1px solid #C8A464',
                color: '#C8A464',
                padding: '14px 24px',
                fontWeight: '600',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
            >
              Request Call Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
