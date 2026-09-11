import React, { useState, useEffect } from 'react';
import { Download, Eye, Calendar, Sparkles, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const HERO_SLIDES = [
  {
    title: "Sector 4's World-Class Resort Estate",
    subtitle: "13-Acre Ultra-Low Density Campus • 11 G+35 Sky Towers • 75,000 Sq. Ft. Grand Clubhouse",
    price: "3+1 & 4+1 BHK Serviced Residences starting ₹ 2.96 Cr*",
    badge: "13-ACRE RESORT LANDMARK",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
  },
  {
    title: "75,000 Sq. Ft. 6-Star Private Resident Club",
    subtitle: "All-Weather Lagoon Pool • Technogym Fitness Center • AQI Monitored Oxygen Gardens",
    price: "Complimentary 3 Years Forbes Managed Concierge Privileges",
    badge: "6-STAR COUNTRY CLUB",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
  },
  {
    title: "Wrap-Around Sundecks & Sky Penthouse Views",
    subtitle: "8 Ft Deep Panoramic Balconies • Double-Height Living Volumes • VRV Air Conditioning",
    price: "3+1 BHK (2,250 - 2,650 Sq.Ft.) & 4+1 BHK (3,150 - 3,850 Sq.Ft.)",
    badge: "ARCHITECTURAL SUITES",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
  }
];

export default function Hero({ onOpenSiteVisit, onOpenBrochure, onOpenFloorPlan }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <section style={{
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `linear-gradient(to bottom, rgba(8,7,5,0.45) 0%, rgba(8,7,5,0.85) 75%, rgba(8,7,5,1) 100%), url('${currentSlide.image}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#FFFFFF',
      padding: '80px 4vw 60px',
      boxSizing: 'border-box',
      transition: 'background-image 0.8s ease-in-out'
    }}>
      {/* Top Dynamic Tag */}
      <div
        key={activeSlide}
        className="animate-fade-in"
        style={{
          backgroundColor: 'rgba(200, 164, 100, 0.12)',
          border: '1px solid rgba(200, 164, 100, 0.4)',
          backdropFilter: 'blur(8px)',
          padding: '8px 20px',
          borderRadius: '30px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '24px'
        }}
      >
        <Sparkles size={14} style={{ color: '#C8A464' }} />
        <span style={{
          fontSize: '11px',
          fontWeight: '700',
          letterSpacing: '2px',
          color: '#C8A464',
          textTransform: 'uppercase'
        }}>
          {currentSlide.badge}
        </span>
      </div>

      {/* Main Cinematic Title */}
      <div key={`title-${activeSlide}`} className="animate-fade-in" style={{ textAlign: 'center', maxWidth: '1050px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: 'clamp(38px, 5.5vw, 68px)',
          fontWeight: '800',
          lineHeight: '1.1',
          letterSpacing: '-0.5px',
          color: '#F5F2EC',
          marginBottom: '20px'
        }}>
          {currentSlide.title}
        </h1>

        <p style={{
          fontSize: 'clamp(15px, 2vw, 19px)',
          color: '#D8D0C5',
          maxWidth: '850px',
          margin: '0 auto 36px',
          lineHeight: '1.6',
          fontWeight: '400'
        }}>
          {currentSlide.subtitle}
          <br />
          <strong style={{ color: '#C8A464', fontWeight: '700' }}>{currentSlide.price}</strong>
        </p>

        {/* Hero CTAs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <button
            onClick={onOpenSiteVisit}
            style={{
              backgroundColor: '#C8A464',
              color: '#070605',
              border: 'none',
              padding: '16px 36px',
              fontSize: '12px',
              fontWeight: '800',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '4px',
              boxShadow: '0 8px 25px rgba(200, 164, 100, 0.4)',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E5BD78'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#C8A464'}
          >
            <Calendar size={16} />
            <span>BOOK PRIVATE CHAUFFEUR TOUR</span>
          </button>

          <button
            onClick={onOpenFloorPlan}
            style={{
              backgroundColor: 'rgba(8, 7, 5, 0.75)',
              border: '1px solid #C8A464',
              color: '#F5F2EC',
              padding: '16px 30px',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '4px',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(200, 164, 100, 0.2)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(8, 7, 5, 0.75)'}
          >
            <Eye size={16} style={{ color: '#C8A464' }} />
            <span>EXPLORE FLOOR PLANS</span>
          </button>

          <button
            onClick={onOpenBrochure}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#D8D0C5',
              padding: '16px 26px',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '4px',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = '#C8A464'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
          >
            <Download size={15} style={{ color: '#C8A464' }} />
            <span>DOWNLOAD PDF BROCHURE</span>
          </button>
        </div>

        {/* Dynamic Carousel Slide Selector */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '40px' }}>
          <button
            onClick={() => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            style={{ background: 'none', border: '1px solid rgba(200,164,100,0.3)', color: '#C8A464', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <ChevronLeft size={18} />
          </button>

          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              style={{
                width: activeSlide === idx ? '36px' : '10px',
                height: '8px',
                borderRadius: '10px',
                backgroundColor: activeSlide === idx ? '#C8A464' : 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}

          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            style={{ background: 'none', border: '1px solid rgba(200,164,100,0.3)', color: '#C8A464', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <ChevronRight size={18} />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            style={{ background: 'none', border: 'none', color: '#C8A464', cursor: 'pointer', marginLeft: '6px' }}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>
      </div>

      {/* Lodha-style Bottom Full-Width Metric Strip */}
      <div style={{
        maxWidth: '1600px',
        width: '100%',
        backgroundColor: 'rgba(12, 10, 8, 0.88)',
        border: '1px solid rgba(200, 164, 100, 0.3)',
        borderRadius: '6px',
        backdropFilter: 'blur(16px)',
        padding: '22px 36px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px',
        boxSizing: 'border-box'
      }}>
        <div style={{ borderRight: '1px solid rgba(200, 164, 100, 0.15)', paddingRight: '15px' }}>
          <div style={{ color: '#C8A464', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
            LOCATION
          </div>
          <div style={{ color: '#F5F2EC', fontSize: '16px', fontWeight: '700', marginTop: '4px' }}>
            Sector 4, Greater Noida West
          </div>
        </div>

        <div style={{ borderRight: '1px solid rgba(200, 164, 100, 0.15)', paddingRight: '15px' }}>
          <div style={{ color: '#C8A464', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
            CAMPUS SCALE
          </div>
          <div style={{ color: '#F5F2EC', fontSize: '16px', fontWeight: '700', marginTop: '4px' }}>
            13 Acres • 70% Open Greens
          </div>
        </div>

        <div style={{ borderRight: '1px solid rgba(200, 164, 100, 0.15)', paddingRight: '15px' }}>
          <div style={{ color: '#C8A464', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
            CLUBHOUSE
          </div>
          <div style={{ color: '#F5F2EC', fontSize: '16px', fontWeight: '700', marginTop: '4px' }}>
            75,000 Sq. Ft. Grand Club
          </div>
        </div>

        <div>
          <div style={{ color: '#C8A464', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
            STARTING PRICE
          </div>
          <div style={{ color: '#F5F2EC', fontSize: '16px', fontWeight: '700', marginTop: '4px' }}>
            ₹ 2.96 Cr* Onwards
          </div>
        </div>
      </div>
    </section>
  );
}
