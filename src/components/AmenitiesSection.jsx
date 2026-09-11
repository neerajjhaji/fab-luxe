import React, { useState } from 'react';
import { Crown, Waves, Trees, Trophy, ShieldCheck, Activity, CheckCircle, ChevronRight, X } from 'lucide-react';

export default function AmenitiesSection({ onOpenSiteVisit, onOpenConcierge }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  const FULL_AMENITIES = [
    {
      id: 'clubhouse-main',
      title: '75,000 Sq.Ft. Forbes Grand Clubhouse',
      category: 'clubhouse',
      categoryLabel: 'Clubhouse & Leisure',
      icon: Crown,
      image: '/images/3.png',
      shortDesc: '6-Star hospitality clubhouse featuring heated indoor pool, private cigar lounge, bowling alley, and private movie screening theatre.',
      fullSpecs: [
        'Temperature-Controlled All-Weather Indoor Lap Pool',
        'Private Single-Malt & Cigar Tasting Lounge',
        '24/7 Forbes Global Properties Concierge Desk',
        'Private 30-Seater Mini-Theater Screening Room',
        '2-Lane Automated Bowling Alley & Billiards Room',
        'Banqueting Hall for 300+ Guests with Private Lawns'
      ]
    },
    {
      id: 'lagoon-pool',
      title: 'Resort-Style Olympic Lagoon Pool',
      category: 'aqua',
      categoryLabel: 'Aqua & Wellness',
      icon: Waves,
      image: '/images/banner.jpeg',
      shortDesc: 'Olympic-sized infinity edge swimming pool with cabanas, sunken pool bar, kids splash pad, and sunbathing decks surrounded by tropical palms.',
      fullSpecs: [
        'Temperature-Regulated Heated Jacuzzi & Hydrotherapy Spa',
        'Sunken Water Cabanas & Poolside Loungers',
        'Kids Splash Park with Water Slides & Fountains',
        'Juice Bar & Poolside Organic Refreshments Counter'
      ]
    },
    {
      id: 'botanical-aqi',
      title: 'AQI-Managed Oxygen Botanical Gardens',
      category: 'green',
      categoryLabel: 'Eco Wellness',
      icon: Trees,
      image: '/images/about_bg.png',
      shortDesc: 'Advanced ambient air purification microclimate in lush oxygen-rich gardens, sensory walking trails, zen reflexology pathways, and outdoor yoga lawns.',
      fullSpecs: [
        'Air-Purifying Flora (Areca Palms, Sansevieria, Peace Lilies)',
        '1.5 Km Continuous Rubberized Jogging & Running Track',
        'Aromatic Herb Garden & Zen Bamboo Reflection Pond',
        'Pet Park with Obstacle Agility Zone'
      ]
    },
    {
      id: 'sports-academy',
      title: 'Elite Sports & Athletics Academy',
      category: 'sports',
      categoryLabel: 'Sports & Active',
      icon: Trophy,
      image: '/images/1.png',
      shortDesc: 'All-weather floodlit tennis courts, squash courts, indoor badminton arena, half-court basketball, and high-tech golf simulator studio.',
      fullSpecs: [
        '2 Pro-Grade Floodlit Synthetic Surface Tennis Courts',
        'Indoor Air-Conditioned Glass Back Squash Courts',
        'Full HD Multi-Course Golf Simulator & Swing Studio',
        'Skating Rink & Table Tennis Pavilion'
      ]
    },
    {
      id: 'fitness-club',
      title: 'Technogym Equipped Olympic Fitness Club',
      category: 'sports',
      categoryLabel: 'Sports & Active',
      icon: Activity,
      image: '/images/location_bg.png',
      shortDesc: 'Equipped with Technogym machines, cross-fit zone, Pilates reformer studio, steam & sauna rooms, and personal wellness advisory.',
      fullSpecs: [
        'Latest Technogym ARTIS Line Cardiovascular Equipment',
        'Pilates Reformer Studio with Certified Trainers',
        'Finnish Pine Steam Rooms & Infrared Sauna Cabins',
        'Nutrition & Body Composition Analysis Station'
      ]
    },
    {
      id: 'security-concierge',
      title: '5-Tier Fortified Security & AI RFID Gate',
      category: 'security',
      categoryLabel: 'Security & Tech',
      icon: ShieldCheck,
      image: '/images/2.png',
      shortDesc: '24/7 dedicated white-glove concierge, valet parking, private elevator access, AI license plate recognition, and 5-tier perimeter security.',
      fullSpecs: [
        'AI Automatic Number Plate Recognition (ANPR) Gates',
        'Biometric Keyless Private Elevator Access for Select Units',
        'Video Door Phones Integrated with Smartphone App',
        '24/7 Armed Security Marshals & CCTV Surveillance Command'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Amenities (75K Sq.Ft.)' },
    { id: 'clubhouse', label: 'Clubhouse & Leisure' },
    { id: 'aqua', label: 'Aqua & Pool' },
    { id: 'sports', label: 'Sports & Athletics' },
    { id: 'green', label: 'Eco & Gardens' },
    { id: 'security', label: 'Security & Concierge' }
  ];

  const filtered = FULL_AMENITIES.filter(a => activeCategory === 'all' || a.category === activeCategory);

  return (
    <section id="amenities" style={{
      width: '100%',
      backgroundColor: '#FAF7F2',
      padding: '100px 4vw',
      color: '#1A1815',
      borderTop: '1px solid rgba(166, 129, 66, 0.2)',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        {/* Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            fontSize: '12px',
            color: '#A68142',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontWeight: '800',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <Crown size={16} />
            75,000 SQ.FT. GRAND CLUBHOUSE & WORLD-CLASS AMENITIES
          </div>
          <h2 style={{
            fontFamily: "'Outfit', 'Cormorant Garamond', sans-serif",
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '700',
            color: '#1A1815'
          }}>
            Unrivaled Resort Living & Hospitality Privileges
          </h2>
          <p style={{ fontSize: '15px', color: '#5E574F', maxWidth: '750px', margin: '12px auto 0', lineHeight: '1.6' }}>
            Immerse yourself in a 13-acre resort ecosystem featuring 70% open green reserves, Olympic aqua pools, biophilic oxygen zones, and 24/7 Forbes Global Concierge.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '45px'
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                border: activeCategory === cat.id ? '1px solid #A68142' : '1px solid rgba(166,129,66,0.2)',
                backgroundColor: activeCategory === cat.id ? '#A68142' : '#FFFFFF',
                color: activeCategory === cat.id ? '#FFFFFF' : '#A68142',
                transition: 'all 0.25s ease',
                boxShadow: activeCategory === cat.id ? '0 4px 20px rgba(166, 129, 66, 0.3)' : '0 2px 10px rgba(0,0,0,0.04)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Amenities Cards Showcase Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '30px'
        }}>
          {filtered.map(item => {
            const IconC = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedAmenity(item)}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(166, 129, 66, 0.25)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#A68142';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(166, 129, 66, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(166, 129, 66, 0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.04)';
                }}
              >
                <div>
                  {/* Photo Banner */}
                  <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      border: '1px solid #A68142',
                      padding: '4px 10px',
                      fontSize: '10px',
                      fontWeight: '800',
                      color: '#A68142',
                      borderRadius: '3px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <IconC size={12} />
                      <span>{item.categoryLabel}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '24px' }}>
                    <h3 style={{
                      fontFamily: "'Outfit', 'Cormorant Garamond', serif",
                      fontSize: '22px',
                      fontWeight: '700',
                      color: '#1A1815',
                      marginBottom: '10px'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#5E574F', lineHeight: '1.6', marginBottom: '16px' }}>
                      {item.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div style={{ padding: '0 24px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: '#A68142', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    EXPLORE FULL SPECS
                  </span>
                  <ChevronRight size={16} style={{ color: '#A68142' }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Detailed Amenity Inspection */}
        {selectedAmenity && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(26, 24, 21, 0.75)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            boxSizing: 'border-box'
          }}>
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '2px solid #A68142',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '850px',
              maxHeight: '90vh',
              overflowY: 'auto',
              color: '#1A1815',
              padding: '32px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', color: '#A68142', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  FEATURE SPECIFICATION • {selectedAmenity.categoryLabel}
                </div>
                <button
                  onClick={() => setSelectedAmenity(null)}
                  style={{
                    backgroundColor: '#FAF7F2',
                    border: '1px solid #A68142',
                    color: '#A68142',
                    padding: '6px',
                    borderRadius: '50%',
                    cursor: 'pointer'
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <img
                src={selectedAmenity.image}
                alt={selectedAmenity.title}
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '6px', marginBottom: '20px' }}
              />

              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '28px', color: '#1A1815', marginBottom: '10px' }}>
                {selectedAmenity.title}
              </h2>

              <p style={{ fontSize: '14px', color: '#5E574F', lineHeight: '1.6', marginBottom: '24px' }}>
                {selectedAmenity.shortDesc}
              </p>

              <div style={{ borderTop: '1px solid rgba(166, 129, 66, 0.2)', paddingTop: '20px', marginBottom: '28px' }}>
                <div style={{ fontSize: '12px', color: '#A68142', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>
                  HIGHLIGHT SPECIFICATIONS & INCLUSIONS
                </div>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {selectedAmenity.fullSpecs.map((spec, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#1A1815' }}>
                      <CheckCircle size={15} style={{ color: '#A68142', flexShrink: 0 }} />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                <button
                  onClick={() => {
                    setSelectedAmenity(null);
                    onOpenSiteVisit();
                  }}
                  style={{
                    flex: 1,
                    padding: '14px',
                    backgroundColor: '#A68142',
                    color: '#FFFFFF',
                    border: 'none',
                    fontWeight: '800',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(166, 129, 66, 0.3)'
                  }}
                >
                  BOOK PRIVATE CLUBHOUSE TOUR
                </button>
                <button
                  onClick={() => {
                    setSelectedAmenity(null);
                    onOpenConcierge();
                  }}
                  style={{
                    padding: '14px 24px',
                    backgroundColor: '#FAF7F2',
                    border: '1px solid #A68142',
                    color: '#A68142',
                    fontWeight: '700',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    borderRadius: '3px',
                    cursor: 'pointer'
                  }}
                >
                  REQUEST AMENITIES BROCHURE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
