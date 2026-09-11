import React, { useState } from 'react';
import LiveBuyerTicker from './components/LiveBuyerTicker';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LegacyMetrics from './components/LegacyMetrics';
import Developments from './components/Developments';
import AmenitiesSection from './components/AmenitiesSection';
import Philosophy from './components/Philosophy';
import SaintAmandSection from './components/SaintAmandSection';
import PressAccolades from './components/PressAccolades';
import BuyerJourneySteps from './components/BuyerJourneySteps';
import Collections from './components/Collections';
import PropertyFinder from './components/PropertyFinder';
import ConnectivityMapSection from './components/ConnectivityMapSection';
import InvestmentROICalculator from './components/InvestmentROICalculator';
import Footer from './components/Footer';

// Modals
import SiteVisitModal from './components/SiteVisitModal';
import FloorPlanModal from './components/FloorPlanModal';
import BrochureModal from './components/BrochureModal';
import ConciergeModal from './components/ConciergeModal';
import SearchModal from './components/SearchModal';
import DetailDrawer from './components/DetailDrawer';
import SiteMapModal from './components/SiteMapModal';
import VirtualTourModal from './components/VirtualTourModal';

// Conversational AI Bot
import AIBotWidget from './components/AIBotWidget';

export default function App() {
  const [siteVisitOpen, setSiteVisitOpen] = useState(false);
  const [floorPlanOpen, setFloorPlanOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [detailDrawerOpen, setDetailDrawerOpen] = useState(false);
  const [siteMapOpen, setSiteMapOpen] = useState(false);
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);

  return (
    <div style={{ backgroundColor: '#0D0B09', color: '#FFFFFF', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Live Real-Time Buyer Signal Bar */}
      <LiveBuyerTicker
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenConcierge={() => setConciergeOpen(true)}
      />

      {/* Main Navigation */}
      <Navigation
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenConcierge={() => setConciergeOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenFloorPlan={() => setFloorPlanOpen(true)}
        onOpenBrochure={() => setBrochureOpen(true)}
        onOpenSiteMap={() => setSiteMapOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenBrochure={() => setBrochureOpen(true)}
        onOpenFloorPlan={() => setFloorPlanOpen(true)}
      />

      {/* Legacy & Counter Metrics */}
      <LegacyMetrics />

      {/* Flagship Developments Showcase */}
      <Developments
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenBrochure={() => setBrochureOpen(true)}
        onOpenFloorPlan={() => setFloorPlanOpen(true)}
      />

      {/* 75,000 Sq.Ft. Clubhouse & World-Class Amenities Section */}
      <AmenitiesSection
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenConcierge={() => setConciergeOpen(true)}
      />

      {/* Architectural Collections */}
      <Collections
        onOpenFloorPlan={() => setFloorPlanOpen(true)}
        onOpenBrochure={() => setBrochureOpen(true)}
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
      />

      {/* Brand Philosophy */}
      <Philosophy />

      {/* Interactive Property Finder & Loan Estimator */}
      <PropertyFinder
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenFloorPlan={() => setFloorPlanOpen(true)}
      />

      {/* Location & Interactive Connectivity Map Section */}
      <ConnectivityMapSection
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenConcierge={() => setConciergeOpen(true)}
      />

      {/* Capital Growth & ROI Investment Estimator */}
      <InvestmentROICalculator onOpenConcierge={() => setConciergeOpen(true)} />

      {/* Forbes Managed Hospitality Section */}
      <SaintAmandSection onOpenConcierge={() => setConciergeOpen(true)} />

      {/* Press & Accolades */}
      <PressAccolades />

      {/* 4-Step Buyer Journey */}
      <BuyerJourneySteps
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenConcierge={() => setConciergeOpen(true)}
      />

      {/* Footer */}
      <Footer
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenBrochure={() => setBrochureOpen(true)}
        onOpenFloorPlan={() => setFloorPlanOpen(true)}
        onOpenConcierge={() => setConciergeOpen(true)}
        onOpenSiteMap={() => setSiteMapOpen(true)}
      />

      {/* Floating Action Buttons */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <button
          onClick={() => setVirtualTourOpen(true)}
          style={{
            backgroundColor: '#C8A464',
            color: '#070605',
            border: 'none',
            padding: '10px 18px',
            borderRadius: '30px',
            fontSize: '11px',
            fontWeight: '800',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(200, 164, 100, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span>🕶️ 360° VR Tour</span>
        </button>

        <button
          onClick={() => setDetailDrawerOpen(true)}
          style={{
            backgroundColor: '#15120E',
            border: '1px solid #C8A464',
            color: '#C8A464',
            padding: '10px 18px',
            borderRadius: '30px',
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>📐 Technical Specs</span>
        </button>
      </div>

      {/* MODALS */}
      <SiteVisitModal isOpen={siteVisitOpen} onClose={() => setSiteVisitOpen(false)} />
      <FloorPlanModal
        isOpen={floorPlanOpen}
        onClose={() => setFloorPlanOpen(false)}
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenBrochure={() => setBrochureOpen(true)}
      />
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
      <ConciergeModal isOpen={conciergeOpen} onClose={() => setConciergeOpen(false)} />
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenFloorPlan={() => setFloorPlanOpen(true)}
        onOpenBrochure={() => setBrochureOpen(true)}
      />
      <DetailDrawer
        isOpen={detailDrawerOpen}
        onClose={() => setDetailDrawerOpen(false)}
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenBrochure={() => setBrochureOpen(true)}
      />
      <SiteMapModal
        isOpen={siteMapOpen}
        onClose={() => setSiteMapOpen(false)}
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenBrochure={() => setBrochureOpen(true)}
      />
      <VirtualTourModal
        isOpen={virtualTourOpen}
        onClose={() => setVirtualTourOpen(false)}
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
      />

      {/* FLOATING CONVERSATIONAL AI BOT */}
      <AIBotWidget
        onOpenSiteVisit={() => setSiteVisitOpen(true)}
        onOpenFloorPlan={() => setFloorPlanOpen(true)}
      />
    </div>
  );
}
