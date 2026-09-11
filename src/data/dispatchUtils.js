// Enhanced Helper utility for buyer scoring, multi-CRM dispatch, and lead management
import { FAB_LUXE_PROJECT_DETAILS } from './projectsData';

// Local storage key for fallback Lead Vault
const LEAD_VAULT_STORAGE_KEY = 'forbes_fab_luxe_leads_vault';

export function getStoredLeads() {
  try {
    const raw = localStorage.getItem(LEAD_VAULT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveLeadToVault(leadData) {
  try {
    const existing = getStoredLeads();
    const updated = [leadData, ...existing];
    localStorage.setItem(LEAD_VAULT_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function exportLeadsToCSV() {
  const leads = getStoredLeads();
  if (!leads.length) return false;

  const headers = ['Ref ID', 'Date', 'Name', 'Email', 'Phone', 'Source', 'Tier', 'Score', 'Extra Data'];
  const rows = leads.map(l => [
    l.reference_id || '',
    l.created_at || new Date().toISOString(),
    `"${(l.name || '').replace(/"/g, '""')}"`,
    l.email || '',
    l.phone || '',
    `"${(l.source || '').replace(/"/g, '""')}"`,
    l._buyer_tier || '',
    l._buyer_score || '',
    `"${JSON.stringify(l.extraData || {}).replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `forbes_fab_luxe_leads_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return true;
}

export function calculateBuyerScore(email = '', phone = '', extraData = {}) {
  let score = 100;
  const lowerEmail = email.trim().toLowerCase();
  const cleanPhone = phone.replace(/\D/g, '');

  const tempEmailDomains = [
    'tempmail', 'mailinator', '10minutemail', 'fake', 'test',
    'qwerty', 'example', 'trashmail', 'dispostable', 'yopmail',
    'guerrillamail', 'getnada', 'throwaway'
  ];

  const isTempEmail = tempEmailDomains.some(d => lowerEmail.includes(d));
  if (isTempEmail) {
    score -= 50;
  }

  const dummyPhones = [
    '1234567890', '0000000000', '9999999999', '8888888888',
    '7777777777', '1111111111', '123456789', '9876543210'
  ];

  if (cleanPhone.length < 10 || dummyPhones.includes(cleanPhone)) {
    score -= 50;
  }

  // Bonus points for intent signals
  if (extraData.chauffeur_pickup && extraData.chauffeur_pickup.includes('Yes')) score += 10;
  if (extraData.financial_status && extraData.financial_status.includes('Ready') || extraData.financial_status?.includes('Immediate')) score += 15;
  if (extraData.preferred_typology) score += 5;

  let tier = 'Standard Buyer Inquiry';
  if (score >= 90) {
    tier = 'VIP Ultra-High Intent Buyer';
  } else if (score >= 70) {
    tier = 'High Intent Prospective Buyer';
  } else if (score < 50) {
    tier = 'Low Intent / Flagged Entry';
  }

  return {
    score,
    tier,
    isValid: score >= 50
  };
}

// CRM Formatter Adapters
export function formatSalesforcePayload(lead) {
  return {
    FirstName: lead.name.split(' ')[0] || lead.name,
    LastName: lead.name.split(' ').slice(1).join(' ') || 'Prospect',
    Email: lead.email,
    MobilePhone: lead.phone,
    Company: 'Forbes Fab Luxe Prospect',
    LeadSource: lead.source,
    Description: `Project: ${lead.project_name} | Ref: ${lead.reference_id} | Tier: ${lead._buyer_tier}`,
    Status: 'New - High Priority'
  };
}

export function formatHubspotPayload(lead) {
  return {
    fields: [
      { name: 'firstname', value: lead.name.split(' ')[0] || lead.name },
      { name: 'lastname', value: lead.name.split(' ').slice(1).join(' ') || 'Prospect' },
      { name: 'email', value: lead.email },
      { name: 'mobilephone', value: lead.phone },
      { name: 'message', value: `Forbes Fab Luxe Lead Ref: ${lead.reference_id}` }
    ]
  };
}

export async function dispatchBuyerLead({ name, email, phone, source = 'Forbes Luxe Platform', extraData = {} }) {
  const scoreResult = calculateBuyerScore(email, phone, extraData);

  if (!scoreResult.isValid) {
    return {
      success: false,
      scoreResult,
      message: 'Please provide a valid official email address and 10-digit mobile number for VIP document authorization.'
    };
  }

  const refId = 'FL-' + Math.floor(100000 + Math.random() * 900000);
  const createdAt = new Date().toISOString();

  const payload = {
    access_key: '3fa7c7bb-4e96-4a41-86d7-21a4f00db12d',
    subject: `[VIP Luxury Lead] ${FAB_LUXE_PROJECT_DETAILS.name} - ${name}`,
    from_name: 'Forbes Fab Luxe Residences',
    name,
    email,
    phone,
    source,
    reference_id: refId,
    created_at: createdAt,
    project_name: FAB_LUXE_PROJECT_DETAILS.name,
    project_location: FAB_LUXE_PROJECT_DETAILS.location,
    brochure_url: FAB_LUXE_PROJECT_DETAILS.brochureUrl,
    helpline: FAB_LUXE_PROJECT_DETAILS.helpline,
    _buyer_score: scoreResult.score,
    _buyer_tier: scoreResult.tier,
    extraData
  };

  // 1. Save lead locally to vault
  saveLeadToVault(payload);

  const dispatchPromises = [];

  // 2. Web3Forms free API dispatch
  dispatchPromises.push(
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(err => console.warn('Web3Forms dispatch warn:', err))
  );

  // 3. FormSubmit AJAX dispatch
  dispatchPromises.push(
    fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        subject: `Forbes Fab Luxe Residences Brochure & Details [Ref: ${refId}]`,
        message: `Dear ${name},\n\nThank you for expressing interest in Forbes Fab Luxe Residences, Sector 4, Greater Noida West.\n\nProject Brochure Link: ${FAB_LUXE_PROJECT_DETAILS.brochureUrl}\nHelpline: ${FAB_LUXE_PROJECT_DETAILS.helpline}\nRERA: ${FAB_LUXE_PROJECT_DETAILS.reraNo}\n\nOur Luxe Advisor team will connect with you shortly.\n\nBest Regards,\nForbes Fab Luxe Residences`
      })
    }).catch(err => console.warn('FormSubmit dispatch warn:', err))
  );

  // 4. Custom CRM Webhook (Salesforce / HubSpot / LeadSquared / Custom API Endpoint)
  const customCrmWebhook = window.FORBES_CRM_WEBHOOK_URL || localStorage.getItem('forbes_custom_crm_webhook');
  if (customCrmWebhook) {
    dispatchPromises.push(
      fetch(customCrmWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead: payload,
          salesforce_formatted: formatSalesforcePayload(payload),
          hubspot_formatted: formatHubspotPayload(payload)
        })
      }).catch(err => console.warn('Custom CRM Webhook dispatch warn:', err))
    );
  }

  // 5. CallMeBot WhatsApp Gateway
  const waMsg = encodeURIComponent(
    `*Forbes Fab Luxe Residences - VIP Request Confirmation*\n\nHello *${name}*,\nYour requested project brochure & floor plans have been processed.\n\n📍 *Location:* Sector 4, Greater Noida West\n📜 *RERA:* UPRERAPRJ995490\n📄 *Brochure:* ${FAB_LUXE_PROJECT_DETAILS.brochureUrl}\n\n📞 *Direct Helpline:* ${FAB_LUXE_PROJECT_DETAILS.helpline}\nReference ID: ${refId}`
  );
  const callMeBotUrl = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone.replace(/\D/g,''))}&text=${waMsg}&apikey=123456`;

  dispatchPromises.push(
    fetch(callMeBotUrl, { mode: 'no-cors' }).catch(err => console.warn('CallMeBot dispatch warn:', err))
  );

  await Promise.allSettled(dispatchPromises);

  return {
    success: true,
    refId,
    scoreResult,
    sentToEmail: email,
    sentToPhone: phone
  };
}
