import React, { useEffect, useRef, useState } from 'react'
import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import { sendDemoLeadOtp, verifyDemoLeadOtp } from '../utils/demoLeadOtp'

const otpFieldStyle = {
  '& .MuiOutlinedInput-root': {
    height: 48,
    borderRadius: '8px',
    backgroundColor: 'white',
    '& fieldset': { borderColor: 'black', borderRadius: '8px' },
    '&:hover fieldset': { borderColor: '#1677F7' },
    '&.Mui-focused fieldset': { borderColor: '#1677F7', borderWidth: '2px' },
  },
}

export default function DemoPhoneOtp({ mobileNumber, hasPhoneInput, onVerified }) {
  const previousMobileNumber = useRef(mobileNumber)
  const [challengeId, setChallengeId] = useState('')
  const [otp, setOtp] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [resendWait, setResendWait] = useState(0)

  useEffect(() => {
    if (previousMobileNumber.current !== mobileNumber) {
      previousMobileNumber.current = mobileNumber
      setChallengeId('')
      setOtp('')
      setMessage('')
      setError('')
      setResendWait(0)
      onVerified(null)
    }
  }, [mobileNumber, onVerified])

  useEffect(() => {
    if (resendWait <= 0) return undefined
    const timer = setTimeout(() => setResendWait((seconds) => Math.max(0, seconds - 1)), 1000)
    return () => clearTimeout(timer)
  }, [resendWait])

  const isMobileValid = /^\+\d{10,15}$/.test(mobileNumber)

  const handleSendOtp = async () => {
    setIsSending(true)
    setError('')
    setMessage('')
    onVerified(null)
    try {
      const result = await sendDemoLeadOtp(mobileNumber)
      setChallengeId(result.challengeId)
      setOtp('')
      setResendWait(result.resendAfterSeconds || 30)
      setMessage(`We sent a verification code to ${mobileNumber}.`)
    } catch (sendError) {
      if (sendError.retryAfterSeconds) setResendWait(sendError.retryAfterSeconds)
      setError(sendError.message)
    } finally {
      setIsSending(false)
    }
  }

  const handleVerifyOtp = async () => {
    setIsVerifying(true)
    setError('')
    setMessage('')
    try {
      const result = await verifyDemoLeadOtp(challengeId, otp)
      onVerified(result.verificationId)
      setMessage('Phone number verified. You can submit your demo request.')
    } catch (verifyError) {
      setError(verifyError.message)
    } finally {
      setIsVerifying(false)
    }
  }

  if (!hasPhoneInput) return null

  return (
    <Box sx={{ mt: 1.25 }}>
      {!challengeId ? (
        <Button
          type="button"
          variant="outlined"
          disabled={!isMobileValid || isSending || resendWait > 0}
          onClick={handleSendOtp}
          sx={{ color: '#1677F7', borderColor: '#1677F7', textTransform: 'none', borderRadius: 2 }}
        >
          {isSending ? 'Sending...' : 'Get OTP'}
        </Button>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1.25, p: 1.5, border: '1px solid rgba(22,119,247,0.4)', borderRadius: 2, bgcolor: 'rgba(255,255,255,0.06)' }}>
          <TextField
            label="Enter OTP"
            value={otp}
            onChange={(event) => setOtp(event.target.value.replace(/\D/g, '').slice(0, 6))}
            placeholder="6-digit code"
            inputProps={{ inputMode: 'numeric', maxLength: 6, 'aria-label': '6-digit OTP' }}
            sx={{ ...otpFieldStyle, flex: 1, minWidth: 0 }}
          />
          <Button
            type="button"
            variant="contained"
            disabled={otp.length !== 6 || isVerifying}
            onClick={handleVerifyOtp}
            sx={{ height: 48, minWidth: { xs: '100%', sm: 112 }, bgcolor: '#1677F7', textTransform: 'none', borderRadius: 2 }}
          >
            {isVerifying ? 'Verifying...' : 'Verify'}
          </Button>
          <Button
            type="button"
            variant="text"
            disabled={isSending || resendWait > 0}
            onClick={handleSendOtp}
            sx={{ minWidth: { xs: '100%', sm: 120 }, color: '#1677F7', textTransform: 'none' }}
          >
            {isSending ? 'Sending...' : resendWait > 0 ? `Resend in ${resendWait}s` : 'Resend OTP'}
          </Button>
        </Box>
      )}
      {!isMobileValid && (
        <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: 'rgba(255,255,255,0.72)' }}>
          Enter a valid phone number to get an OTP.
        </Typography>
      )}
      {resendWait > 0 && !challengeId && (
        <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: 'rgba(255,255,255,0.72)' }}>
          You can request another code in {resendWait}s.
        </Typography>
      )}
      {message && <Alert severity="success" sx={{ mt: 1 }}>{message}</Alert>}
      {error && <Alert severity="error" sx={{ mt: 1 }}>{error}</Alert>}
    </Box>
  )
}
