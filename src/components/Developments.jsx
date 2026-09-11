import React from 'react';
import { Eye, Calendar, CheckCircle2 } from 'lucide-react';
import { TYPOLOGIES } from '../data/projectsData';

export default function Developments({ onOpenSiteVisit, onOpenFloorPlan }) {
  return (
    <section id="developments" style={{
      backgroundColor: '#FAF8F5',
      color: '#1A1815',
      padding: '100px 4vw',
      borderBottom: '1px solid rgba(166, 129, 66, 0.15)'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>

        {/* Header */}
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
            OUR PRESENCE & PORTFOLIO
          </span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '700',
            lineHeight: '1.15',
            color: '#1A1815'
          }}>
            The Flagship <span style={{ color: '#A68142', fontStyle: 'italic' }}>Residences Collection</span>
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#5E574F',
            marginTop: '12px',
            maxWidth: '700px',
            margin: '12px auto 0'
          }}>
            Sector 4, Greater Noida West • UPRERAPRJ995490 • 13-Acre Resort Living
          </p>
        </div>

        {/* Project Typologies Showcase Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '36px'
        }}>
          {TYPOLOGIES.map((typo) => {
            const featureList = typo.highlights || typo.features || [];
            return (
              <div key={typo.id} style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(166, 129, 66, 0.25)',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 12px 36px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s, border-color 0.3s'
              }}>
                {/* Image Container with Badges */}
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img
                    src={typo.image}
                    alt={typo.title || typo.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    border: '1px solid #A68142',
                    padding: '4px 12px',
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#A68142',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    backdropFilter: 'blur(6px)'
                  }}>
                    {typo.superArea || typo.size}
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    backgroundColor: '#A68142',
                    color: '#FFFFFF',
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '700',
                    fontFamily: 'Cormorant Garamond, serif'
                  }}>
                    {typo.price}
                  </div>
                </div>

                {/* Details Body */}
                <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#A68142',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: '6px'
                  }}>
                    FORBES FAB LUXE • SECTOR 4
                  </div>

                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#1A1815',
                    margin: '0 0 12px'
                  }}>
                    {typo.title || typo.name}
                  </h3>

                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: '#5E574F',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    {typo.description}
                  </p>

                  {/* Key Features List */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '24px',
                    borderTop: '1px solid rgba(166, 129, 66, 0.15)',
                    paddingTop: '16px'
                  }}>
                    {featureList.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#2D2821' }}>
                        <CheckCircle2 size={14} style={{ color: '#A68142', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                    <button
                      onClick={onOpenFloorPlan}
                      style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        border: '1px solid #A68142',
                        color: '#A68142',
                        padding: '10px',
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <Eye size={13} />
                      <span>FLOOR PLAN</span>
                    </button>

                    <button
                      onClick={onOpenSiteVisit}
                      style={{
                        flex: 1,
                        backgroundColor: '#A68142',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '10px',
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <Calendar size={13} />
                      <span>BOOK TOUR</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
