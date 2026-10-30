const DEFAULT_CRM_API_URL = 'https://api.acolead.com/crm-backend/api'
const DEMO_CAPTURE_API_URL = process.env.REACT_APP_DEMO_CAPTURE_API_URL || DEFAULT_CRM_API_URL
const DEMO_CP_ID = '1f03088f-28cb-6ac0-86a7-8a56d9a1daba'
const DEMO_UTM_STORAGE_KEY = 'acolead_demo_utm_campaign'

const developmentApiUrl = 'http://localhost:4104/crm-backend/api'
const configuredApiUrl = process.env.REACT_APP_DEMO_OTP_API_URL
  || (process.env.NODE_ENV === 'development'
    ? developmentApiUrl
    : process.env.REACT_APP_CRM_BACKEND_URL || DEFAULT_CRM_API_URL)
const crmApiUrl = configuredApiUrl.replace(/\/$/, '')

async function postJson(path, body, apiUrl = crmApiUrl) {
  const response = await fetch(`${apiUrl}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const result = await response.json().catch(() => ({}))

  if (!response.ok) {
    const apiMessage = typeof result.message === 'string'
      ? result.message
      : result.message?.message || 'Something went wrong. Please try again.'
    const error = new Error(apiMessage)
    error.retryAfterSeconds = result.retryAfterSeconds || result.message?.retryAfterSeconds
    throw error
  }

  return result
}

export const sendDemoLeadOtp = (mobileNumber, requestToken = window.crypto.randomUUID()) => postJson('/v1/cp/demo-otp/send', { mobileNumber, requestToken })

export const verifyDemoLeadOtp = (challengeId, otp) =>
  postJson('/v1/cp/demo-otp/verify', { challengeId, otp })

export const getDemoAttribution = () => {
  const currentUrl = typeof window !== 'undefined'
    ? new URL(window.location.href)
    : new URL('https://acolead.com/')
  let utmCampaign = currentUrl.searchParams.get('utm_campaign') || ''

  if (typeof window !== 'undefined') {
    try {
      if (utmCampaign) {
        window.sessionStorage.setItem(DEMO_UTM_STORAGE_KEY, utmCampaign)
      } else {
        utmCampaign = window.sessionStorage.getItem(DEMO_UTM_STORAGE_KEY) || ''
      }
    } catch {
      // Continue with the campaign available in the current URL.
    }
  }

  const campaignCode = utmCampaign.match(/(?:^|_)(C0|P[1-9]|R1)(?:_|$)/i)?.[1]?.toUpperCase() || ''

  return {
    page: currentUrl.pathname || '/',
    utmCampaign,
    campaignCode,
    source: campaignCode || 'Website - organic',
  }
}

export const submitVerifiedDemoLead = ({
  name,
  mobileNumber,
  requirement = '',
  email = '',
  company = '',
  businessType = '',
  salesTeamSize = '',
  currentTool = '',
  newLeadsPerMonth = '',
  activeBookings = '',
  budgetRange = '',
  page = '',
  utmCampaign = '',
  campaignCode = '',
  followUpRoute = '',
  source = 'Website - organic',
  demoOtpVerificationId,
}) => {
  const qualification = [
    `Business type: ${businessType}`,
    `Sales team size: ${salesTeamSize}`,
    `Current tool: ${currentTool}`,
    `New leads per month: ${newLeadsPerMonth}`,
    ...(activeBookings ? [`Number of active bookings: ${activeBookings}`] : []),
    ...(budgetRange ? [`Budget range: ${budgetRange}`] : []),
    `Page: ${page}`,
    `UTM campaign: ${utmCampaign || 'None'}`,
    `Campaign code: ${campaignCode || 'None'}`,
    `Source: ${source}`,
    ...(followUpRoute ? [`Follow-up route: ${followUpRoute}`] : []),
  ].join('\n')

  return postJson(`/v1/cp/${DEMO_CP_ID}/capture-lead`, {
    name,
    mobileNumber,
    requirement: [requirement, qualification].filter(Boolean).join('\n\n'),
    email,
    company,
    businessType,
    salesTeamSize,
    currentTool,
    newLeadsPerMonth,
    activeBookings,
    budgetRange,
    page,
    utmCampaign,
    campaignCode,
    source,
    type: 'DEMO_ENQUIRY',
    demoOtpVerificationId,
  }, DEMO_CAPTURE_API_URL)
}
