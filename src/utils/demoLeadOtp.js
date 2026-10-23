const DEFAULT_CRM_API_URL = 'https://api.acolead.com/crm-backend/api'
const DEMO_CAPTURE_API_URL = process.env.REACT_APP_DEMO_CAPTURE_API_URL || DEFAULT_CRM_API_URL
const DEMO_CP_ID = '1f03088f-28cb-6ac0-86a7-8a56d9a1daba'

const developmentApiUrl = 'https://api.acolead.com/crm-backend/api'
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

export const sendDemoLeadOtp = (mobileNumber) =>
  postJson('/v1/cp/demo-otp/send', { mobileNumber })

export const verifyDemoLeadOtp = (challengeId, otp) =>
  postJson('/v1/cp/demo-otp/verify', { challengeId, otp })

export const submitVerifiedDemoLead = ({
  name,
  mobileNumber,
  requirement = '',
  email = '',
  company = '',
  demoOtpVerificationId,
}) => postJson(`/v1/cp/${DEMO_CP_ID}/capture-lead`, {
  name,
  mobileNumber,
  requirement,
  email,
  company,
  type: 'DEMO_ENQUIRY',
  demoOtpVerificationId,
}, DEMO_CAPTURE_API_URL)
