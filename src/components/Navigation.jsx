import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronRight, PhoneCall, Calendar } from 'lucide-react';

export default function Navigation({ onOpenSiteVisit, onOpenConcierge, onOpenSearch, onOpenFloorPlan }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        { id: 'philosophy', name: 'overview' },
        { id: 'developments', name: 'residences' },
        { id: 'amenities', name: 'amenities' },
        { id: 'location', name: 'location' }
      ];

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 200) {
            setActiveSection(sec.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id, sectionName) => {
    setMobileMenuOpen(false);
    if (sectionName) setActiveSection(sectionName);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'overview', label: 'OVERVIEW', targetId: 'philosophy' },
    { name: 'residences', label: 'RESIDENCES', targetId: 'developments' },
    { name: 'amenities', label: 'AMENITIES', targetId: 'amenities' },
    { name: 'location', label: 'LOCATION', targetId: 'location' }
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 99,
      backgroundColor: scrolled ? 'rgba(8, 6, 5, 0.98)' : 'rgba(13, 11, 9, 0.92)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(200, 164, 100, 0.2)',
      width: '100%',
      boxSizing: 'border-box',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: scrolled ? '12px 4vw' : '16px 4vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        transition: 'padding 0.3s ease'
      }}>
        {/* Forbes Fab Luxe Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <div style={{
            borderLeft: '2.5px solid #C8A464',
            paddingLeft: '14px'
          }}>
            <span style={{
              fontFamily: "'Outfit', 'Cormorant Garamond', serif",
              fontSize: '22px',
              fontWeight: '700',
              color: '#F5F2EC',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              display: 'block',
              lineHeight: '1.0'
            }}>
              FORBES <span style={{ color: '#C8A464' }}>FAB LUXE</span>
            </span>
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '8px',
              color: '#B0A89C',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginTop: '4px',
              display: 'block',
              fontWeight: '600'
            }}>
              RESIDENCES • SECTOR 4, GREATER NOIDA WEST
            </span>
          </div>
        </a>

        {/* Dynamic Desktop Link Items */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }} className="desktop-nav-links">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.targetId, link.name)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? '#C8A464' : '#E0D8CC',
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '8px 0',
                  fontWeight: isActive ? '700' : '500',
                  transition: 'color 0.25s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#C8A464'}
                onMouseOut={(e) => e.currentTarget.style.color = isActive ? '#C8A464' : '#E0D8CC'}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#C8A464',
                    borderRadius: '2px'
                  }} />
                )}
              </button>
            );
          })}

          {/* Floor Plans Quick Trigger Link */}
          <button
            onClick={onOpenFloorPlan}
            style={{
              background: 'none',
              border: 'none',
              color: '#E0D8CC',
              cursor: 'pointer',
              padding: '8px 0',
              fontWeight: '500',
              transition: 'color 0.25s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#C8A464'}
            onMouseOut={(e) => e.currentTarget.style.color = '#E0D8CC'}
          >
            FLOOR PLANS
          </button>
        </div>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            style={{
              background: 'none',
              border: '1px solid rgba(200, 164, 100, 0.35)',
              color: '#C8A464',
              padding: '8px 14px',
              borderRadius: '2px',
              fontSize: '11px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#C8A464';
              e.currentTarget.style.backgroundColor = 'rgba(200, 164, 100, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(200, 164, 100, 0.35)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            title="Search Residences"
          >
            <Search size={13} />
            <span className="search-label">SEARCH</span>
          </button>

          {/* Book Site Visit Button */}
          <button
            onClick={onOpenSiteVisit}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #C8A464',
              color: '#C8A464',
              padding: '9px 18px',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#C8A464';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#C8A464';
            }}
            className="desktop-visit-btn"
          >
            <Calendar size={13} />
            <span>SITE VISIT</span>
          </button>

          {/* Enquire Now Button */}
          <button
            onClick={onOpenConcierge}
            style={{
              background: 'linear-gradient(135deg, #C8A464 0%, #A68142 100%)',
              color: '#070605',
              border: 'none',
              padding: '10px 22px',
              fontSize: '11px',
              fontWeight: '800',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 18px rgba(200, 164, 100, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 22px rgba(200, 164, 100, 0.45)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(200, 164, 100, 0.3)';
            }}
          >
            <PhoneCall size={13} />
            <span>ENQUIRE NOW</span>
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: '1px solid #C8A464',
              color: '#C8A464',
              padding: '6px',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#0A0907',
          borderTop: '1px solid rgba(200, 164, 100, 0.3)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.targetId, link.name)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === link.name ? '#C8A464' : '#F5F2EC',
                fontSize: '13px',
                fontWeight: '700',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                letterSpacing: '1px'
              }}
            >
              <span>{link.label}</span>
              <ChevronRight size={14} style={{ color: '#C8A464' }} />
            </button>
          ))}

          <button
            onClick={() => { setMobileMenuOpen(false); onOpenFloorPlan(); }}
            style={{
              background: 'none',
              border: 'none',
              color: '#F5F2EC',
              fontSize: '13px',
              fontWeight: '700',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              letterSpacing: '1px'
            }}
          >
            <span>FLOOR PLANS</span>
            <ChevronRight size={14} style={{ color: '#C8A464' }} />
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSiteVisit(); }}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #C8A464',
                color: '#C8A464',
                padding: '12px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              SCHEDULE SITE VISIT
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenConcierge(); }}
              style={{
                background: 'linear-gradient(135deg, #C8A464 0%, #A68142 100%)',
                color: '#070605',
                border: 'none',
                padding: '12px',
                fontSize: '12px',
                fontWeight: '800',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              ENQUIRE NOW
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav-links {
            display: none !important;
          }
          .desktop-visit-btn {
            display: none !important;
          }
          .search-label {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
