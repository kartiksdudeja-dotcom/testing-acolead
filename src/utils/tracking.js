export const pushTrackingEvent = (event, properties = {}) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...properties });
};

export const campaignCodeFromName = (campaign = '') => {
  const match = String(campaign).match(/(?:^|_)(C0|P[1-9]|R1)(?:_|$)/i);
  return match ? match[1].toUpperCase() : '';
};

const safeValue = (value, key = '') => {
  if (/email|phone|mobile|name|user.?id/i.test(key)) return undefined;
  if (typeof value === 'string') {
    if (value.includes('@') || /\+?\d[\d\s().-]{7,}/.test(value)) return undefined;
    return value;
  }
  if (Array.isArray(value)) return value.map((item) => safeValue(item)).filter((item) => item !== undefined);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([nestedKey, nestedValue]) => [nestedKey, safeValue(nestedValue, nestedKey)]).filter(([, nestedValue]) => nestedValue !== undefined));
  return value;
};

export const pushAnalyticsEvent = (event, properties = {}) => {
  const safeProperties = Object.fromEntries(Object.entries(properties).map(([key, value]) => [key, safeValue(value, key)]).filter(([, value]) => value !== undefined));
  pushTrackingEvent('mixpanel_event', { mixpanel_event_name: event, ...safeProperties });
};
