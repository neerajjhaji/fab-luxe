import React, { useState } from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';

export default function InvestmentROICalculator({ onOpenConcierge }) {
  const [initialInvest, setInitialInvest] = useState(29600000); // ₹ 2.96 Cr
  const [appreciationRate, setAppreciationRate] = useState(12); // 12% p.a.
  const [rentalYield, setRentalYield] = useState(4.5); // 4.5% p.a.
  const [holdingYears, setHoldingYears] = useState(5); // 5 Years

  // Compound Interest Calculation
  const futureValue = initialInvest * Math.pow(1 + appreciationRate / 100, holdingYears);
  const totalRentalIncome = initialInvest * (rentalYield / 100) * holdingYears;
  const totalReturn = futureValue + totalRentalIncome;
  const netProfit = totalReturn - initialInvest;

  return (
    <section style={{
      width: '100%',
      backgroundColor: '#0D0B09',
      padding: '90px 4vw',
      color: '#FFFFFF',
      borderTop: '1px solid rgba(200, 164, 100, 0.25)',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            fontSize: '12px',
            color: '#C8A464',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontWeight: '800',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <TrendingUp size={16} />
            INVESTMENT & CAPITAL APPRECIATION ESTIMATOR
          </div>
          <h2 style={{
            fontFamily: "'Outfit', 'Cormorant Garamond', sans-serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '700',
            color: '#FFFFFF'
          }}>
            Forecast Your 5-Year Capital Growth & Rental Yield
          </h2>
          <p style={{ fontSize: '15px', color: '#B0A89C', maxWidth: '750px', margin: '12px auto 0', lineHeight: '1.6' }}>
            Sector 4 Greater Noida West is projected for accelerated growth fueled by Jewar International Airport, RRTS Transit, & 14-Lane Expressways.
          </p>
        </div>

        {/* Dynamic Calculator Container */}
        <div style={{
          backgroundColor: '#15120E',
          border: '2px solid #C8A464',
          borderRadius: '8px',
          padding: '36px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.85)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
            {/* Sliders Column */}
            <div style={{ display: 'grid', gap: '22px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#D0D0D0', marginBottom: '8px' }}>
                  <span>Initial Property Investment:</span>
                  <strong style={{ color: '#C8A464' }}>₹ {(initialInvest / 10000000).toFixed(2)} Cr</strong>
                </div>
                <input
                  type="range"
                  min="29600000"
                  max="60000000"
                  step="1000000"
                  value={initialInvest}
                  onChange={(e) => setInitialInvest(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#C8A464', cursor: 'pointer' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#D0D0D0', marginBottom: '8px' }}>
                  <span>Projected Annual Appreciation (%):</span>
                  <strong style={{ color: '#C8A464' }}>{appreciationRate}% P.A.</strong>
                </div>
                <input
                  type="range"
                  min="8"
                  max="20"
                  step="0.5"
                  value={appreciationRate}
                  onChange={(e) => setAppreciationRate(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#C8A464', cursor: 'pointer' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#A0988A', marginBottom: '6px' }}>Rental Yield (% P.A.):</div>
                  <input
                    type="number"
                    step="0.1"
                    value={rentalYield}
                    onChange={(e) => setRentalYield(Number(e.target.value))}
                    style={{ width: '100%', backgroundColor: '#0D0B09', border: '1px solid rgba(200,164,100,0.3)', color: '#FFFFFF', padding: '10px', borderRadius: '4px', fontSize: '13px' }}
                  />
                </div>

                <div>
                  <div style={{ fontSize: '12px', color: '#A0988A', marginBottom: '6px' }}>Holding Horizon:</div>
                  <select
                    value={holdingYears}
                    onChange={(e) => setHoldingYears(Number(e.target.value))}
                    style={{ width: '100%', backgroundColor: '#0D0B09', border: '1px solid rgba(200,164,100,0.3)', color: '#FFFFFF', padding: '10px', borderRadius: '4px', fontSize: '13px' }}
                  >
                    <option value={3}>3 Years</option>
                    <option value={5}>5 Years</option>
                    <option value={7}>7 Years</option>
                    <option value={10}>10 Years</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Display Box */}
            <div style={{
              backgroundColor: '#0D0B09',
              border: '1px solid #C8A464',
              borderRadius: '6px',
              padding: '30px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '11px', color: '#A0988A', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '6px' }}>
                PROJECTED PORTFOLIO VALUE ({holdingYears} YEARS)
              </div>

              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '38px', fontWeight: '800', color: '#C8A464', marginBottom: '8px' }}>
                ₹ {(totalReturn / 10000000).toFixed(2)} Cr
              </div>

              <div style={{ fontSize: '13px', color: '#00E676', fontWeight: '700', marginBottom: '18px' }}>
                + ₹ {(netProfit / 10000000).toFixed(2)} Cr Estimated Total Profit ({((netProfit / initialInvest) * 100).toFixed(1)}% ROI)
              </div>

              <div style={{ fontSize: '12px', color: '#A0988A', marginBottom: '22px', borderTop: '1px solid rgba(200,164,100,0.15)', paddingTop: '12px' }}>
                Valuation Growth: ₹ {(futureValue / 10000000).toFixed(2)} Cr • Cumulative Rent: ₹ {(totalRentalIncome / 10000000).toFixed(2)} Cr
              </div>

              <button
                onClick={onOpenConcierge}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'linear-gradient(135deg, #C8A464 0%, #A68142 100%)',
                  color: '#0D0B09',
                  border: 'none',
                  fontWeight: '800',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <span>REQUEST WEALTH & ROI CONSULTATION</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
