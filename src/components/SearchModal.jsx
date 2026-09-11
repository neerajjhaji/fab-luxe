import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onOpenSiteVisit, onOpenFloorPlan, onOpenBrochure }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchableItems = [
    { type: 'Typology', title: '3+1 BHK Resort Suite (2,250 - 2,650 Sq.Ft.)', desc: 'Starting ₹ 2.96 Cr* Onwards', action: onOpenFloorPlan },
    { type: 'Typology', title: '4+1 BHK Grand Suite (3,150 - 3,850 Sq.Ft.)', desc: 'Price On Request', action: onOpenFloorPlan },
    { type: 'Amenity', title: '75,000 Sq.Ft. Grand Clubhouse', desc: '6-Star Rated Private Country Club', action: onOpenSiteVisit },
    { type: 'Amenity', title: 'Resort Lagoon Swimming Pool', desc: 'Infinity pool with sun cabanas & splash pad', action: onOpenSiteVisit },
    { type: 'Location', title: 'Delhi-Meerut Expressway', desc: '5 Mins direct drive from Sector 4', action: onOpenSiteVisit },
    { type: 'Service', title: '3 Years Forbes Managed Concierge', desc: 'White-glove 24/7 resident privileges', action: onOpenSiteVisit },
    { type: 'Document', title: 'Official PDF Brochure Download', desc: 'Full project masterplan and specs', action: onOpenBrochure }
  ];

  const results = searchableItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '60px 20px 20px'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #A68142',
        borderRadius: '6px',
        maxWidth: '680px',
        width: '100%',
        color: '#1A1815',
        padding: '28px',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(166, 129, 66, 0.25)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: '#A68142',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        {/* Input */}
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <input
            type="text"
            autoFocus
            placeholder="Search 3+1 BHK, 4+1 BHK, Price, Amenities, Location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#FAF7F2',
              color: '#1A1815',
              border: '1px solid #A68142',
              padding: '16px 20px 16px 48px',
              borderRadius: '4px',
              fontSize: '16px',
              outline: 'none',
              fontFamily: 'inherit',
              boxSizing: 'border-box'
            }}
          />
          <Search size={20} style={{ position: 'absolute', left: '16px', top: '16px', color: '#A68142' }} />
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', display: 'grid', gap: '10px' }}>
          {results.length > 0 ? (
            results.map((item, idx) => (
              <div
                key={idx}
                onClick={() => { onClose(); if (item.action) item.action(); }}
                style={{
                  backgroundColor: '#FAF7F2',
                  border: '1px solid rgba(166, 129, 66, 0.2)',
                  borderRadius: '4px',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#A68142'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(166, 129, 66, 0.2)'}
              >
                <div>
                  <span style={{ fontSize: '10px', color: '#A68142', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {item.type}
                  </span>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: '#1A1815' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '12px', color: '#5E574F', marginTop: '2px' }}>
                    {item.desc}
                  </div>
                </div>

                <ArrowRight size={18} style={{ color: '#A68142' }} />
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '40px', color: '#5E574F' }}>
              No exact matches found for "{query}". Try searching for <strong>3+1 BHK</strong>, <strong>Clubhouse</strong>, or <strong>Location</strong>.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
