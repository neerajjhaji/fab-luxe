import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Download, Sparkles, Database, PhoneCall, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { FAB_LUXE_PROJECT_DETAILS } from '../data/projectsData';
import { dispatchBuyerLead, exportLeadsToCSV, getStoredLeads } from '../data/dispatchUtils';

export function CrestLogo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#FAF7F2" />
      <circle cx="50" cy="50" r="44" stroke="#A68142" strokeWidth="3" />
      <circle cx="50" cy="50" r="38" stroke="#A68142" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M50 18 L58 32 L68 26 L62 44 L38 44 L32 26 L42 32 Z" fill="#A68142" stroke="#D4AF37" strokeWidth="1" />
      <text x="50" y="72" fontFamily="'Cormorant Garamond', serif" fontSize="28" fontWeight="700" fill="#1A1815" textAnchor="middle">
        F
      </text>
      <circle cx="34" cy="58" r="2" fill="#A68142" />
      <circle cx="66" cy="58" r="2" fill="#A68142" />
    </svg>
  );
}

export default function AIBotWidget({ onOpenSiteVisit, onOpenFloorPlan }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showCrmModal, setShowCrmModal] = useState(false);
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [showMatchmakerModal, setShowMatchmakerModal] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [storedLeadCount, setStoredLeadCount] = useState(0);

  // User Relationship Profile State (Persisted in localStorage for repeat visits)
  const [userProfile, setUserProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('forbes_luxe_user_profile');
      return saved ? JSON.parse(saved) : { name: '', goal: '', layout: '', budget: '', scheduledCall: null };
    } catch {
      return { name: '', goal: '', layout: '', budget: '', scheduledCall: null };
    }
  });

  // Math CAPTCHA State
  const [num1, setNum1] = useState(() => Math.floor(Math.random() * 8) + 2);
  const [num2, setNum2] = useState(() => Math.floor(Math.random() * 7) + 1);
  const correctAnswer = num1 + num2;

  const refreshCaptcha = () => {
    setNum1(Math.floor(Math.random() * 8) + 2);
    setNum2(Math.floor(Math.random() * 7) + 1);
  };

  const [verifyForm, setVerifyForm] = useState({
    name: userProfile.name || '',
    email: '',
    phone: '',
    captchaAnswer: ''
  });

  const [callbackForm, setCallbackForm] = useState({
    name: userProfile.name || '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:00 AM - 01:00 PM',
    topic: 'Personalized Project Briefing & Layout Selection'
  });

  const [matchmakerStep, setMatchmakerStep] = useState(1);
  const [matchmakerAnswers, setMatchmakerAnswers] = useState({
    purpose: 'End-User Family Living',
    typology: '3+1 BHK Resort Suite (2,250 - 2,650 Sq.Ft.)',
    priority: '75,000 Sq.Ft. Clubhouse & Resort Amenities',
    horizon: '1-2 Years (Construction Phase)'
  });

  const [verifyError, setVerifyError] = useState('');
  const [callbackSuccess, setCallbackSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initial Welcome Dialogue with personalized memory
  const [messages, setMessages] = useState(() => {
    const greetingName = userProfile.name ? ` ${userProfile.name}` : '';
    return [
      {
        sender: 'bot',
        text: `Welcome back${greetingName}! I am Fab Luxe Concierge AI, your dedicated relationship manager for Forbes Fab Luxe Residences in Greater Noida West Sector 4.\n\nHow can I best assist your home journey today?\n• Tailor a property match based on your family requirements\n• Schedule a private 1-on-1 callback with a Senior Director\n• Compare Noida sectors, connectivity, and investment metrics\n• Review architectural floor plans and payment plans`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });

  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    try {
      localStorage.setItem('forbes_luxe_user_profile', JSON.stringify(userProfile));
    } catch {
      // ignore storage errors
    }
  }, [userProfile]);

  const quickPrompts = [
    '🎯 Interactive Property Matchmaker',
    '📞 Schedule Private Advisory Call',
    '⚖️ Compare Sector 4 vs Noida Expressway',
    '🛡️ UPRERA Approval & Trust Assurance',
    '📄 Download Official Master Brochure PDF',
    '🚗 Request VIP Chauffeur Site Visit'
  ];

  // Comprehensive Relationship-First Real Estate Knowledgebase
  const processQuery = (query) => {
    const q = query.toLowerCase().trim();

    // MATCHMAKER TRIGGER
    if (q.includes('match') || q.includes('recommend') || q.includes('suitable') || q.includes('find my')) {
      setShowMatchmakerModal(true);
      return {
        text: `I have opened our Interactive Property Matchmaker. Answer 3 quick questions to receive a custom recommendation tailored to your lifestyle and investment goals.`
      };
    }

    // CALLBACK TRIGGER
    if (q.includes('call') || q.includes('speak') || q.includes('meeting') || q.includes('director') || q.includes('consult')) {
      setShowCallbackModal(true);
      return {
        text: `I have opened our VIP Callback Scheduler. Please select your preferred date and time slot for a private 1-on-1 consultation with our Senior Relationship Director.`
      };
    }

    // TRUST, SECURITY & UPRERA REASSURANCE
    if (q.includes('trust') || q.includes('safe') || q.includes('rera') || q.includes('approval') || q.includes('builder') || q.includes('legal')) {
      return {
        text: `TRUST & REGULATORY TRANSPARENCY:\n\n• UPRERA Registration: Officially registered under UPRERAPRJ995490 (Fully compliant with all Uttar Pradesh Real Estate Regulatory Authority standards).\n• Bank Approval: Pre-approved for instant home loans and subvention schemes by HDFC Bank, ICICI Bank, State Bank of India (SBI), and Axis Bank.\n• Land Title: 100% clear freehold land title with clear municipal approvals.\n• Hospitality Partner: Post-handover luxury estate management curated by Saint Amand 6-Star Hospitality Services.\n\nWould you like me to send full legal compliance documents to your email?`
      };
    }

    // SECTOR COMPARISON
    if (q.includes('compare') || q.includes('versus') || q.includes('vs') || q.includes('difference')) {
      if (q.includes('expressway') || q.includes('sector 150') || q.includes('sector 128')) {
        return {
          text: `REAL ESTATE COMPARISON: Sector 4 Greater Noida West vs Noida Expressway (Sec 150 / 128)\n\n• Price & Value:\n  - Noida Expressway: ₹ 14,000 – ₹ 18,000 / Sq.Ft. (Entry price: ₹ 4.5 Cr+)\n  - Sector 4 Gr. Noida West (Forbes Fab Luxe): ₹ 11,500 – ₹ 13,500 / Sq.Ft. (Launch price: ₹ 2.96 Cr*)\n\n• Connectivity & Travel Time:\n  - Sector 4: 5 mins to 14-lane Delhi-Meerut Expressway (NH-9), 15 mins to Sector 62 IT Hub, and direct access to upcoming RRTS Bullet Rail.\n  - Expressway: Direct access to Noida-Gr. Noida Expressway and ~45 mins to Jewar Airport.\n\n• Living Space & Amenities:\n  - Forbes Fab Luxe (Sec 4): 13-Acre Resort campus with 70% open green space and a 75,000 Sq.Ft. Forbes-managed Clubhouse.\n\nRecommendation: Sector 4 offers attractive value with strong growth potential over the next 3 to 5 years due to lower entry prices and upcoming transit links.`,
          hasComparisonCard: true,
          compData: {
            title: 'Sector 4 vs Noida Expressway',
            tag1: 'Forbes Fab Luxe (Sec 4)',
            val1: '₹ 2.96 Cr* (13-Acre Resort)',
            tag2: 'Noida Expressway (Sec 150)',
            val2: '₹ 4.50 Cr+ (High Entry)'
          }
        };
      }

      if (q.includes('end user') || q.includes('end-user') || q.includes('investor') || q.includes('roi')) {
        return {
          text: `BUYER GUIDANCE: End-User vs Investor Highlights\n\nFor Families & End-Users:\n• Low-density design with only 11 Sky Towers on 13 Acres\n• 75,000 Sq.Ft. Clubhouse with 24/7 Concierge Services\n• Spacious 3+1 & 4+1 BHK layouts featuring 8-ft wrap-around sundecks\n• Oxygen-rich botanical gardens and 5-tier security\n\nFor Property Investors:\n• Projected 12-15% annual capital appreciation supported by Jewar Airport & Delhi-Meerut Expressway connectivity\n• Expected Rental Yield: 4.5% – 5.2% P.A. (High IT executive rental demand from Sector 62 & 63)\n• 20:80 bank subvention payment plans available`,
          actionType: 'sitevisit'
        };
      }

      return {
        text: `DELHI NCR & NOIDA SECTOR COMPARISON:\n\n1. Greater Noida West Sector 4 (Forbes Fab Luxe): Excellent luxury value starting at ₹ 2.96 Cr*. Features a 13-acre resort layout with a 75,000 sq.ft. clubhouse.\n2. Noida Expressway (Sec 150/128): Established corporate corridor with higher starting prices (₹ 4.2 Cr – ₹ 7.5 Cr).\n3. Yamuna Expressway / Jewar Corridor: High long-term growth area ideal for long-term land investments.\n4. Central Noida (Sec 75-78): Convenient central location with established markets.\n\nWhich location would you like to explore further?`
      };
    }

    // JEWAR AIRPORT & INFRASTRUCTURE
    if (q.includes('jewar') || q.includes('airport') || q.includes('infra') || q.includes('expressway') || q.includes('rrts')) {
      return {
        text: `NOIDA & GREATER NOIDA INFRASTRUCTURE & CAPITAL GROWTH DRIVERS:\n\n• Noida International Airport (Jewar): Commencing operations soon; driving 25-30% land value escalation across Greater Noida West corridor.\n• Delhi-Meerut Expressway (NH-9): Just 5 mins from Sector 4; 14-lane signal-free connection to Akshardham & Central Delhi in 20 mins.\n• Delhi-Meerut RRTS Rapid Rail: High-speed bullet transit station 10 mins away.\n• Noida Sector 62 & 63 IT Parks: 15 mins away (TCS, Accenture, Cognizant MNC employment drivers).`
      };
    }

    // PRICING & PAYMENT
    if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('payment') || q.includes('subvention')) {
      return {
        text: `FORBES FAB LUXE NOIDA PRICING & SUBVENTION PLANS:\n\n• 3+1 BHK Resort Suite (2,250 – 2,650 Sq.Ft.): ₹ 2.96 Cr* Onwards\n• 4+1 BHK Grand Presidential Suite (3,150 – 3,850 Sq.Ft.): Price On Request (VIP Allotment)\n• Flexible Payment Plans: 20:80 Subvention, Construction-Linked Payment (CLP), and Special NRI Installment Plans.\n• Pre-Approved Banks: HDFC Bank, ICICI Bank, State Bank of India (SBI) & Axis Bank.`
      };
    }

    // FLOOR PLANS
    if (q.includes('floor') || q.includes('plan') || q.includes('3bhk') || q.includes('4bhk') || q.includes('layout')) {
      return {
        text: `ARCHITECTURAL SUITE TYPOLOGIES:\n\n• 3+1 BHK Resort Residence: 3 Bedrooms + Servant Quarters + 8-Ft Deep Italian Marble Sundeck + VRV Air Conditioning.\n• 4+1 BHK Presidential Penthouse: 4 Bedrooms + Maid Room + Private Elevator Lobby + 270° Panoramic Park View Balconies.\n\nWould you like to review floor plan blueprints or schedule a 3D VR walkthrough?`,
        actionType: 'floorplan'
      };
    }

    // AMENITIES
    if (q.includes('amenit') || q.includes('clubhouse') || q.includes('75k') || q.includes('pool') || q.includes('gym')) {
      return {
        text: `75,000 SQ.FT. FORBES CLUBHOUSE & RESORT AMENITIES:\n\n• All-Weather Heated Indoor Swimming Pool & Hydrotherapy Spa\n• Private Single-Malt & Cigar Lounge + 30-Seater Movie Theater\n• Technogym ARTIS Fitness Center & Pilates Studio\n• Floodlit Pro Tennis Courts, Squash Arena & Golf Simulator\n• AQI-Monitored Botanical Oxygen Gardens & 24/7 Forbes Concierge.`
      };
    }

    // DEFAULT ADVISORY RESPONSE
    return {
      text: `I am Fab Luxe Concierge AI, your dedicated real estate advisor.\n\nHow can I help guide your decision today?\n• Interactive Property Matchmaker\n• Schedule a VIP Advisory Callback\n• Sector Comparisons & Connectivity\n• Floor Plans & Rate Sheets`
    };
  };

  const handleSendMessage = (textToSend = null) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = {
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    const lower = text.toLowerCase();

    // Check if user is sharing their name
    if (lower.startsWith('my name is ') || lower.startsWith('i am ')) {
      const extractedName = text.replace(/my name is /i, '').replace(/i am /i, '').trim();
      if (extractedName) {
        setUserProfile((prev) => ({ ...prev, name: extractedName }));
        setVerifyForm((prev) => ({ ...prev, name: extractedName }));
        setCallbackForm((prev) => ({ ...prev, name: extractedName }));
      }
    }

    const requiresVerification =
      lower.includes('brochure') ||
      lower.includes('send pdf') ||
      lower.includes('download') ||
      lower.includes('floor plan');

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      if (requiresVerification && !isVerified) {
        setShowVerifyModal(true);
        const botReply = {
          sender: 'bot',
          text: `To dispatch official PDF brochures, floor plan blueprints, and rate sheets directly to your email & WhatsApp, please complete a quick verification below.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, botReply]);
        return;
      }

      const responseObj = processQuery(text);
      const botReply = {
        sender: 'bot',
        text: responseObj.text,
        hasComparisonCard: responseObj.hasComparisonCard,
        compData: responseObj.compData,
        actionType: responseObj.actionType,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botReply]);
    }, 500);
  };

  const handleVerifySubmit = (e) => {
    e.preventDefault();
    if (!verifyForm.name || !verifyForm.email || !verifyForm.phone) {
      setVerifyError('Please complete all required fields.');
      return;
    }
    if (parseInt(verifyForm.captchaAnswer, 10) !== correctAnswer) {
      setVerifyError('Security CAPTCHA verification failed. Please try again.');
      refreshCaptcha();
      return;
    }

    setIsSubmitting(true);

    // Save user profile name
    setUserProfile((prev) => ({ ...prev, name: verifyForm.name }));

    const leadData = {
      name: verifyForm.name,
      email: verifyForm.email,
      phone: verifyForm.phone,
      project_name: 'Forbes Fab Luxe Residences',
      source: 'Fab Luxe Concierge AI',
      extraData: { verifiedAt: new Date().toISOString() }
    };

    dispatchBuyerLead(leadData).then(() => {
      setIsSubmitting(false);
      setIsVerified(true);
      setShowVerifyModal(false);
      setVerifyError('');

      const confirmMsg = {
        sender: 'bot',
        text: `Thank you, ${verifyForm.name}! Your verification is complete.\n\nYou can now download official PDF brochures, floor plans, and access priority pricing allotment.`,
        hasBrochureCard: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, confirmMsg]);
    });
  };

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (!callbackForm.name || !callbackForm.phone) {
      setVerifyError('Please provide your name and phone number.');
      return;
    }

    setIsSubmitting(true);

    const leadData = {
      name: callbackForm.name,
      phone: callbackForm.phone,
      project_name: 'Forbes Fab Luxe Residences',
      source: 'VIP Callback Request',
      extraData: {
        preferredDate: callbackForm.date,
        preferredTime: callbackForm.timeSlot,
        topic: callbackForm.topic
      }
    };

    dispatchBuyerLead(leadData).then(() => {
      setIsSubmitting(false);
      setCallbackSuccess(true);
      setUserProfile((prev) => ({ ...prev, name: callbackForm.name, scheduledCall: `${callbackForm.date} at ${callbackForm.timeSlot}` }));

      setTimeout(() => {
        setShowCallbackModal(false);
        setCallbackSuccess(false);

        const botReply = {
          sender: 'bot',
          text: `Your private 1-on-1 advisory call has been confirmed for ${callbackForm.date} between ${callbackForm.timeSlot}.\n\nOur Senior Relationship Director will reach out to you directly at ${callbackForm.phone}.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, botReply]);
      }, 1500);
    });
  };

  const handleMatchmakerFinish = () => {
    setShowMatchmakerModal(false);
    setMatchmakerStep(1);

    const recommendationText = `RECOMMENDED PROPERTY MATCH FOR YOU:\n\n• Unit Selection: ${matchmakerAnswers.typology}\n• Primary Focus: ${matchmakerAnswers.purpose}\n• Top Priority Feature: ${matchmakerAnswers.priority}\n• Target Horizon: ${matchmakerAnswers.horizon}\n\nWhy This Fits:\nForbes Fab Luxe in Greater Noida West Sector 4 perfectly combines 13-acre low-density luxury with high growth potential near the Delhi-Meerut Expressway and Jewar Airport.`;

    const botReply = {
      sender: 'bot',
      text: recommendationText,
      actionType: 'sitevisit',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, botReply]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999 }}>
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            style={{
              backgroundColor: '#FAF7F2',
              border: '2px solid #A68142',
              borderRadius: '50px',
              padding: '10px 20px',
              color: '#1A1815',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              boxShadow: '0 12px 36px rgba(166, 129, 66, 0.25)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 18px 45px rgba(166, 129, 66, 0.35)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 12px 36px rgba(166, 129, 66, 0.25)';
            }}
          >
            <CrestLogo size={32} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', color: '#1A1815' }}>
                FAB LUXE CONCIERGE AI
              </div>
              <div style={{ fontSize: '9px', color: '#A68142', fontWeight: '700', letterSpacing: '0.5px' }}>
                {userProfile.name ? `Welcome back, ${userProfile.name}` : 'Noida Market & Relationship Advisor'}
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Main Chat Drawer */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: 'calc(100vw - 48px)',
          maxWidth: '430px',
          height: '630px',
          maxHeight: 'calc(100vh - 100px)',
          backgroundColor: '#FAF8F5',
          border: '2px solid #A68142',
          borderRadius: '16px',
          boxShadow: '0 25px 70px rgba(0,0,0,0.18)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>
          {/* Header */}
          <div style={{
            backgroundColor: '#FAF7F2',
            padding: '14px 18px',
            borderBottom: '1px solid rgba(166, 129, 66, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CrestLogo size={34} />
              <div>
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#1A1815', letterSpacing: '1px' }}>
                  FAB LUXE CONCIERGE AI
                </div>
                <div style={{ fontSize: '10px', color: '#2E7D32', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', backgroundColor: '#2E7D32', borderRadius: '50%' }} />
                  <span>VIP Relationship Advisory Online</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => setShowCallbackModal(true)}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #A68142',
                  color: '#A68142',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: '10px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                title="Schedule 1-on-1 Call"
              >
                <PhoneCall size={11} />
                <span>Callback</span>
              </button>

              <button
                onClick={() => {
                  setStoredLeadCount(getStoredLeads().length);
                  setShowCrmModal(true);
                }}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(166, 129, 66, 0.3)',
                  color: '#5E574F',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: '10px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                title="Open Lead Vault & CRM"
              >
                <Database size={11} />
                <span>CRM</span>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                style={{ background: 'none', border: 'none', color: '#A68142', cursor: 'pointer', padding: '4px' }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Relationship Notification Strip if Call Scheduled */}
          {userProfile.scheduledCall && (
            <div style={{ backgroundColor: '#FAF7F2', padding: '8px 14px', borderBottom: '1px solid rgba(166,129,66,0.2)', fontSize: '10px', color: '#A68142', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={12} color="#2E7D32" />
              <span>Confirmed Advisory Call: <strong>{userProfile.scheduledCall}</strong></span>
            </div>
          )}

          {/* Messages Body */}
          <div style={{
            flex: 1,
            padding: '16px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            backgroundColor: '#FAF8F5'
          }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div style={{
                  backgroundColor: msg.sender === 'user' ? '#A68142' : '#FFFFFF',
                  color: msg.sender === 'user' ? '#FFFFFF' : '#1A1815',
                  border: msg.sender === 'user' ? 'none' : '1px solid rgba(166, 129, 66, 0.25)',
                  padding: '12px 16px',
                  borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                  fontSize: '12.5px',
                  lineHeight: '1.55',
                  maxWidth: '88%',
                  boxShadow: msg.sender === 'user' ? '0 4px 12px rgba(166, 129, 66, 0.2)' : '0 2px 8px rgba(0,0,0,0.04)',
                  whiteSpace: 'pre-line'
                }}>
                  {msg.text}

                  {/* Interactive Comparison Card */}
                  {msg.hasComparisonCard && msg.compData && (
                    <div style={{
                      marginTop: '12px',
                      backgroundColor: '#FAF7F2',
                      border: '1px solid #A68142',
                      borderRadius: '8px',
                      padding: '12px'
                    }}>
                      <div style={{ fontSize: '10px', color: '#A68142', fontWeight: '800', textTransform: 'uppercase', marginBottom: '8px' }}>
                        {msg.compData.title}
                      </div>
                      <div style={{ display: 'grid', gap: '6px', fontSize: '11px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#1A1815' }}>
                          <span>{msg.compData.tag1}:</span>
                          <strong style={{ color: '#A68142' }}>{msg.compData.val1}</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#5E574F' }}>
                          <span>{msg.compData.tag2}:</span>
                          <strong>{msg.compData.val2}</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Interactive Brochure Download Card */}
                  {msg.hasBrochureCard && (
                    <div style={{ marginTop: '12px', borderTop: '1px solid rgba(166,129,66,0.2)', paddingTop: '10px' }}>
                      <a
                        href={FAB_LUXE_PROJECT_DETAILS.brochureUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          backgroundColor: '#A68142',
                          color: '#FFFFFF',
                          padding: '8px 14px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '800',
                          textDecoration: 'none',
                          textTransform: 'uppercase',
                          boxShadow: '0 4px 12px rgba(166, 129, 66, 0.3)'
                        }}
                      >
                        <Download size={13} />
                        <span>DOWNLOAD BROCHURE PDF</span>
                      </a>
                    </div>
                  )}

                  {/* Action Buttons */}
                  {msg.actionType === 'sitevisit' && (
                    <div style={{ marginTop: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <button
                        onClick={onOpenSiteVisit}
                        style={{
                          backgroundColor: '#A68142',
                          color: '#FFFFFF',
                          border: 'none',
                          padding: '8px 14px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '800',
                          cursor: 'pointer',
                          textTransform: 'uppercase',
                          boxShadow: '0 4px 12px rgba(166, 129, 66, 0.25)'
                        }}
                      >
                        BOOK VIP CHAUFFEUR VISIT
                      </button>
                      <button
                        onClick={() => setShowCallbackModal(true)}
                        style={{
                          backgroundColor: '#FAF7F2',
                          border: '1px solid #A68142',
                          color: '#A68142',
                          padding: '8px 14px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          textTransform: 'uppercase'
                        }}
                      >
                        REQUEST DIRECT CALL
                      </button>
                    </div>
                  )}

                  {msg.actionType === 'floorplan' && (
                    <div style={{ marginTop: '10px' }}>
                      <button
                        onClick={onOpenFloorPlan}
                        style={{
                          backgroundColor: '#FAF7F2',
                          border: '1px solid #A68142',
                          color: '#A68142',
                          padding: '8px 14px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          textTransform: 'uppercase'
                        }}
                      >
                        VIEW BLUEPRINT PLANS
                      </button>
                    </div>
                  )}
                </div>

                <span style={{ fontSize: '9px', color: '#8A8275', marginTop: '3px', padding: '0 4px' }}>
                  {msg.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div style={{ alignSelf: 'flex-start', color: '#A68142', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={13} className="animate-spin" />
                <span>Consulting relationship metrics & market data...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div style={{
            padding: '10px 12px',
            backgroundColor: '#FAF7F2',
            borderTop: '1px solid rgba(166, 129, 66, 0.2)',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto'
          }}>
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(166, 129, 66, 0.3)',
                  color: '#A68142',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '10px',
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#A68142';
                  e.currentTarget.style.backgroundColor = '#A68142';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(166, 129, 66, 0.3)';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#A68142';
                }}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div style={{
            padding: '12px 16px',
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid rgba(166, 129, 66, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <input
              type="text"
              placeholder="Ask a question or type your name..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              style={{
                flex: 1,
                backgroundColor: '#FAF7F2',
                border: '1px solid rgba(166, 129, 66, 0.3)',
                color: '#1A1815',
                padding: '10px 14px',
                borderRadius: '20px',
                fontSize: '12px',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />

            <button
              onClick={() => handleSendMessage()}
              style={{
                backgroundColor: '#A68142',
                color: '#FFFFFF',
                border: 'none',
                padding: '10px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 3px 10px rgba(166, 129, 66, 0.3)'
              }}
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Property Matchmaker Modal */}
      {showMatchmakerModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 10000,
          backgroundColor: 'rgba(26, 24, 21, 0.75)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #A68142',
            borderRadius: '12px',
            padding: '28px',
            width: '100%',
            maxWidth: '460px',
            color: '#1A1815',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ fontSize: '11px', color: '#A68142', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <HeartHandshake size={14} />
                <span>PROPERTY MATCHMAKER (STEP {matchmakerStep} OF 3)</span>
              </div>
              <button onClick={() => setShowMatchmakerModal(false)} style={{ background: 'none', border: 'none', color: '#A68142', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            {matchmakerStep === 1 && (
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', color: '#1A1815', marginBottom: '12px' }}>
                  What is your primary goal for this property?
                </h3>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {['End-User Family Living', 'High Appreciation Capital Investment', 'Rental Income & IT Hub Proximity'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setMatchmakerAnswers({ ...matchmakerAnswers, purpose: opt });
                        setMatchmakerStep(2);
                      }}
                      style={{
                        padding: '12px',
                        backgroundColor: matchmakerAnswers.purpose === opt ? '#A68142' : '#FAF7F2',
                        color: matchmakerAnswers.purpose === opt ? '#FFFFFF' : '#1A1815',
                        border: '1px solid rgba(166,129,66,0.3)',
                        borderRadius: '6px',
                        textAlign: 'left',
                        fontWeight: '700',
                        fontSize: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {matchmakerStep === 2 && (
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', color: '#1A1815', marginBottom: '12px' }}>
                  Which layout suits your family requirement best?
                </h3>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {['3+1 BHK Resort Suite (2,250 - 2,650 Sq.Ft.)', '4+1 BHK Presidential Penthouse (3,150 - 3,850 Sq.Ft.)', 'Open to Recommendation'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setMatchmakerAnswers({ ...matchmakerAnswers, typology: opt });
                        setMatchmakerStep(3);
                      }}
                      style={{
                        padding: '12px',
                        backgroundColor: matchmakerAnswers.typology === opt ? '#A68142' : '#FAF7F2',
                        color: matchmakerAnswers.typology === opt ? '#FFFFFF' : '#1A1815',
                        border: '1px solid rgba(166,129,66,0.3)',
                        borderRadius: '6px',
                        textAlign: 'left',
                        fontWeight: '700',
                        fontSize: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {matchmakerStep === 3 && (
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', color: '#1A1815', marginBottom: '12px' }}>
                  What is your top priority amenity or feature?
                </h3>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {['75,000 Sq.Ft. Clubhouse & Resort Amenities', 'Low Density (Only 11 Towers on 13 Acres)', 'Delhi-Meerut Expressway & RRTS Connectivity'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setMatchmakerAnswers({ ...matchmakerAnswers, priority: opt });
                        handleMatchmakerFinish();
                      }}
                      style={{
                        padding: '12px',
                        backgroundColor: matchmakerAnswers.priority === opt ? '#A68142' : '#FAF7F2',
                        color: matchmakerAnswers.priority === opt ? '#FFFFFF' : '#1A1815',
                        border: '1px solid rgba(166,129,66,0.3)',
                        borderRadius: '6px',
                        textAlign: 'left',
                        fontWeight: '700',
                        fontSize: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 1-on-1 Callback Scheduler Modal */}
      {showCallbackModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 10000,
          backgroundColor: 'rgba(26, 24, 21, 0.75)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #A68142',
            borderRadius: '12px',
            padding: '30px',
            width: '100%',
            maxWidth: '440px',
            color: '#1A1815',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ fontSize: '11px', color: '#A68142', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <PhoneCall size={14} />
                <span>SCHEDULE 1-ON-1 ADVISORY CALL</span>
              </div>
              <button onClick={() => setShowCallbackModal(false)} style={{ background: 'none', border: 'none', color: '#A68142', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '12px', color: '#5E574F', marginBottom: '18px' }}>
              Book a direct consultation with our Senior Relationship Director to discuss priority allotment, floor plan selection, and bank subvention plans.
            </p>

            <form onSubmit={handleCallbackSubmit} style={{ display: 'grid', gap: '12px' }}>
              <input
                type="text"
                placeholder="Your Full Name *"
                value={callbackForm.name}
                onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
                style={{ width: '100%', padding: '10px', backgroundColor: '#FAF7F2', border: '1px solid rgba(166,129,66,0.3)', color: '#1A1815', borderRadius: '4px', fontSize: '12px' }}
              />
              <input
                type="tel"
                placeholder="Mobile Number *"
                value={callbackForm.phone}
                onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                style={{ width: '100%', padding: '10px', backgroundColor: '#FAF7F2', border: '1px solid rgba(166,129,66,0.3)', color: '#1A1815', borderRadius: '4px', fontSize: '12px' }}
              />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '10px', color: '#A68142', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Preferred Date</label>
                  <input
                    type="date"
                    value={callbackForm.date}
                    onChange={(e) => setCallbackForm({ ...callbackForm, date: e.target.value })}
                    style={{ width: '100%', padding: '8px', backgroundColor: '#FAF7F2', border: '1px solid rgba(166,129,66,0.3)', color: '#1A1815', borderRadius: '4px', fontSize: '11px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '10px', color: '#A68142', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Preferred Time</label>
                  <select
                    value={callbackForm.timeSlot}
                    onChange={(e) => setCallbackForm({ ...callbackForm, timeSlot: e.target.value })}
                    style={{ width: '100%', padding: '8px', backgroundColor: '#FAF7F2', border: '1px solid rgba(166,129,66,0.3)', color: '#1A1815', borderRadius: '4px', fontSize: '11px' }}
                  >
                    <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                    <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                    <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                    <option value="04:00 PM - 07:00 PM">04:00 PM - 07:00 PM</option>
                  </select>
                </div>
              </div>

              {callbackSuccess ? (
                <div style={{ backgroundColor: 'rgba(46,125,50,0.15)', color: '#2E7D32', border: '1px solid #2E7D32', padding: '10px', borderRadius: '4px', fontSize: '11px', textAlign: 'center' }}>
                  Call Request Submitted Successfully!
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '12px',
                    backgroundColor: '#A68142',
                    color: '#FFFFFF',
                    border: 'none',
                    fontWeight: '800',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '8px',
                    boxShadow: '0 4px 12px rgba(166, 129, 66, 0.3)'
                  }}
                >
                  {isSubmitting ? 'Confirming...' : 'CONFIRM CALLBACK'}
                </button>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Verification Modal */}
      {showVerifyModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 10000,
          backgroundColor: 'rgba(26, 24, 21, 0.75)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #A68142',
            borderRadius: '12px',
            padding: '30px',
            width: '100%',
            maxWidth: '420px',
            color: '#1A1815',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ fontSize: '11px', color: '#A68142', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                BUYER VERIFICATION
              </div>
              <button onClick={() => setShowVerifyModal(false)} style={{ background: 'none', border: 'none', color: '#A68142', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', color: '#1A1815', marginBottom: '8px' }}>
              Unlock Master PDF & Blueprints
            </h3>
            <p style={{ fontSize: '12px', color: '#5E574F', marginBottom: '20px' }}>
              Verify details to receive floor plans, rate sheets, and subvention plans on WhatsApp & Email.
            </p>

            <form onSubmit={handleVerifySubmit} style={{ display: 'grid', gap: '12px' }}>
              <input
                type="text"
                placeholder="Full Name *"
                value={verifyForm.name}
                onChange={(e) => setVerifyForm({ ...verifyForm, name: e.target.value })}
                style={{ width: '100%', padding: '10px', backgroundColor: '#FAF7F2', border: '1px solid rgba(166,129,66,0.3)', color: '#1A1815', borderRadius: '4px', fontSize: '12px' }}
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={verifyForm.email}
                onChange={(e) => setVerifyForm({ ...verifyForm, email: e.target.value })}
                style={{ width: '100%', padding: '10px', backgroundColor: '#FAF7F2', border: '1px solid rgba(166,129,66,0.3)', color: '#1A1815', borderRadius: '4px', fontSize: '12px' }}
              />
              <input
                type="tel"
                placeholder="Mobile Phone Number *"
                value={verifyForm.phone}
                onChange={(e) => setVerifyForm({ ...verifyForm, phone: e.target.value })}
                style={{ width: '100%', padding: '10px', backgroundColor: '#FAF7F2', border: '1px solid rgba(166,129,66,0.3)', color: '#1A1815', borderRadius: '4px', fontSize: '12px' }}
              />

              <div style={{ backgroundColor: '#FAF7F2', padding: '10px', borderRadius: '4px', border: '1px solid rgba(166,129,66,0.2)' }}>
                <div style={{ fontSize: '11px', color: '#A68142', fontWeight: '700', marginBottom: '6px' }}>
                  Security Math CAPTCHA: Solve <strong>{num1} + {num2} = ?</strong>
                </div>
                <input
                  type="number"
                  placeholder="Enter Sum *"
                  value={verifyForm.captchaAnswer}
                  onChange={(e) => setVerifyForm({ ...verifyForm, captchaAnswer: e.target.value })}
                  style={{ width: '100%', padding: '8px', backgroundColor: '#FFFFFF', border: '1px solid rgba(166,129,66,0.3)', color: '#1A1815', borderRadius: '4px', fontSize: '12px' }}
                />
              </div>

              {verifyError && <div style={{ color: '#D32F2F', fontSize: '11px', fontWeight: '700' }}>{verifyError}</div>}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '12px',
                  backgroundColor: '#A68142',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: '800',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '8px',
                  boxShadow: '0 4px 12px rgba(166, 129, 66, 0.3)'
                }}
              >
                {isSubmitting ? 'Verifying...' : 'VERIFY & ACCESS DOWNLOADS'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Local Lead Vault & CRM Modal */}
      {showCrmModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 10000,
          backgroundColor: 'rgba(26, 24, 21, 0.75)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #A68142',
            borderRadius: '12px',
            padding: '30px',
            width: '100%',
            maxWidth: '650px',
            color: '#1A1815',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#A68142', fontWeight: '800', textTransform: 'uppercase' }}>
                  MULTI-CRM LEAD VAULT
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', color: '#1A1815', margin: '4px 0 0' }}>
                  Stored Buyer Leads ({storedLeadCount})
                </h3>
              </div>
              <button onClick={() => setShowCrmModal(false)} style={{ background: 'none', border: 'none', color: '#A68142', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ backgroundColor: '#FAF7F2', padding: '16px', borderRadius: '6px', marginBottom: '20px', fontSize: '12px', color: '#5E574F' }}>
              Leads captured via AI Bot, Callback Requests, Matchmaker, Site Visit Modal, and Brochure downloads are stored locally and automatically dispatched to multi-CRM endpoints (Salesforce, HubSpot, Custom Webhooks).
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => exportLeadsToCSV()}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#A68142',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: '800',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(166, 129, 66, 0.3)'
                }}
              >
                <Download size={14} />
                EXPORT ALL LEADS TO CSV
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
