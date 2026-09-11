import React, { useState } from 'react';
import { X, Eye, Compass } from 'lucide-react';

export default function VirtualTourModal({ isOpen, onClose, onOpenSiteVisit }) {
  const [activeRoom, setActiveRoom] = useState('living');

  if (!isOpen) return null;

  const ROOMS = [
    {
      id: 'living',
      title: 'Double-Height Grand Living Room',
      desc: 'High ceiling 12-ft living hall with floor-to-ceiling acoustic glass walls overlooking the 270° botanical greens.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'master',
      title: 'Master Presidential Suite',
      desc: 'Expansive master bedroom with walk-in Italian closet, hardwood flooring, and ensuite marble Jacuzzi bathroom.',
      img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'sundeck',
      title: '8-Ft Deep Sky Sundeck Deck',
      desc: 'Wrap-around balcony space with private vertical planter garden and panoramic Sector 4 skyline views.',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'clubhouse',
      title: '75,000 Sq.Ft. Forbes Grand Clubhouse',
      desc: 'Heated indoor swimming pool, private cigar bar lounge, mini bowling alley, and 24/7 concierge lobby.',
      img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const currentRoom = ROOMS.find(r => r.id === activeRoom) || ROOMS[0];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      backgroundColor: 'rgba(5, 4, 3, 0.94)',
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
        maxWidth: '1200px',
        maxHeight: '90vh',
        overflowY: 'auto',
        color: '#1A1815',
        boxShadow: '0 25px 60px rgba(166, 129, 66, 0.25)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Modal Top Header */}
        <div style={{
          padding: '24px 32px',
          borderBottom: '1px solid rgba(166, 129, 66, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#FAF7F2'
        }}>
          <div>
            <div style={{ fontSize: '11px', color: '#A68142', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Eye size={14} />
              IMMERSIVE 360° VIRTUAL WALKTHROUGH
            </div>
            <h2 style={{ fontFamily: "'Outfit', 'Cormorant Garamond', sans-serif", fontSize: '26px', color: '#1A1815', margin: '4px 0 0' }}>
              Experience Forbes Fab Luxe Residences in 3D
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #A68142',
              color: '#A68142',
              padding: '8px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          {/* Left Column: Interactive 360 Frame */}
          <div>
            <div style={{
              position: 'relative',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid #A68142',
              backgroundColor: '#FAF7F2',
              boxShadow: '0 15px 35px rgba(166, 129, 66, 0.15)'
            }}>
              <img
                src={currentRoom.img}
                alt={currentRoom.title}
                style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
              />

              {/* 360 Indicator Badge */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: 'rgba(250, 247, 242, 0.92)',
                border: '1px solid #A68142',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '11px',
                color: '#A68142',
                fontWeight: '800',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Compass size={14} />
                <span>360° INTERACTIVE VIEW</span>
              </div>
            </div>

            <div style={{ marginTop: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1A1815', marginBottom: '6px' }}>
                {currentRoom.title}
              </h3>
              <p style={{ fontSize: '13px', color: '#5E574F', lineHeight: '1.5' }}>
                {currentRoom.desc}
              </p>
            </div>
          </div>

          {/* Right Column: Room Selector & VR Booking */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '12px', color: '#A68142', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px' }}>
                SELECT RESIDENCE ZONE
              </div>

              <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
                {ROOMS.map((room) => (
                  <div
                    key={room.id}
                    onClick={() => setActiveRoom(room.id)}
                    style={{
                      backgroundColor: activeRoom === room.id ? '#FAF7F2' : '#FFFFFF',
                      border: activeRoom === room.id ? '1px solid #A68142' : '1px solid rgba(166, 129, 66, 0.2)',
                      borderRadius: '6px',
                      padding: '14px 18px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: '700', color: activeRoom === room.id ? '#A68142' : '#1A1815' }}>
                      {room.title}
                    </span>
                    <Eye size={16} style={{ color: activeRoom === room.id ? '#A68142' : '#5E574F' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* VR Headset Booking Box */}
            <div style={{
              backgroundColor: '#FAF7F2',
              border: '1px solid #A68142',
              borderRadius: '6px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#A68142', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                REQUEST AT-HOME VR HEADSET DEMO
              </div>
              <p style={{ fontSize: '12px', color: '#5E574F', marginBottom: '16px' }}>
                Our concierge will dispatch a Meta Quest VR headset directly to your residence for a private 3D walkthrough.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenSiteVisit();
                }}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#A68142',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: '800',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                REQUEST HOME VR EXPERIENCE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
