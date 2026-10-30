import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import {
    Alert,
    Box,
    TextField,
    MenuItem,
    Button,
    useTheme,
    useMediaQuery,
    InputAdornment,
    Tooltip,
    Typography,
    Select,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WarningIcon from '@mui/icons-material/Warning'
import { useFormik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import DemoPhoneOtp from '../new components/DemoPhoneOtp'
import { getDemoAttribution, submitVerifiedDemoLead } from '../utils/demoLeadOtp'
import { pushTrackingEvent } from '../utils/tracking'

const Contact = forwardRef((props, ref) => {
    const includeBudgetQuestion = Boolean(props.includeBudgetQuestion)
    const includeActiveBookings = Boolean(props.includeActiveBookings)
    const navigate = useNavigate()
    const location = useLocation()
    const attribution = getDemoAttribution()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const buttonRef = useRef()
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [submitError, setSubmitError] = useState('')
    const [demoOtpVerificationId, setDemoOtpVerificationId] = useState('')
    const formStarted = useRef(false)

    const firstFieldRef = useRef();

    useImperativeHandle(ref, () => ({
        focusFirstField: () => {
          // Try focusing twice to ensure cursor shows up
          setTimeout(() => {
            firstFieldRef.current?.focus();
          }, 0);
        }
      }));
    const [countryCode, setCountryCode] = useState('+91')
    const countryOptions = [
        { code: '+91', label: '🇮🇳 +91' },
        { code: '+1', label: '🇺🇸 +1' },
        { code: '+44', label: '🇬🇧 +44' },
        { code: '+61', label: '🇦🇺 +61' },
    ]

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address'),
        phoneNumber: Yup.string()
            .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone number is required'),
        companyName: Yup.string().required('Company name is required'),
        businessType: Yup.string().required('Select your business type'),
        salesTeamSize: Yup.string().required('Select your sales team size'),
        currentTool: Yup.string().required('Enter your current tool'),
        newLeadsPerMonth: Yup.string().required('Select your monthly lead volume'),
        budgetRange: includeBudgetQuestion ? Yup.string().required('Share your budget range') : Yup.string(),
        activeBookings: includeActiveBookings ? Yup.string().required('Enter your number of active bookings') : Yup.string(),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            companyName: '',
            businessType: '',
            salesTeamSize: '',
            currentTool: '',
            newLeadsPerMonth: '',
            budgetRange: '',
            activeBookings: '',
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setSubmitError('')
            try {
                const routeCall = ['5-10', '11-25', '26+'].includes(values.salesTeamSize) && ['50-200', '201-500', '500+'].includes(values.newLeadsPerMonth)
                const routeWhatsapp = values.salesTeamSize === '1-4'
                const eventId = `${Date.now()}-${Math.random().toString(36).slice(2)}`
                await submitVerifiedDemoLead({
                    name: values.name,
                    mobileNumber: `${countryCode}${values.phoneNumber}`,
                    email: values.email,
                    company: values.companyName,
                    businessType: values.businessType,
                    salesTeamSize: values.salesTeamSize,
                    currentTool: values.currentTool,
                    newLeadsPerMonth: values.newLeadsPerMonth,
                    budgetRange: values.budgetRange,
                    activeBookings: values.activeBookings,
                    page: location.pathname,
                    utmCampaign: attribution.utmCampaign,
                    campaignCode: attribution.campaignCode,
                    source: attribution.source,
                    followUpRoute: routeCall ? 'Call within 15 minutes' : routeWhatsapp ? 'Send recorded demo on WhatsApp' : 'Sales follow-up',
                    demoOtpVerificationId,
                })
                if (process.env.REACT_APP_META_CAPI_PROXY_URL) {
                    try {
                        const cookie = (name) => document.cookie.split('; ').find((entry) => entry.startsWith(`${name}=`))?.split('=').slice(1).join('=') || ''
                        fetch(process.env.REACT_APP_META_CAPI_PROXY_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ eventId, eventName: routeCall ? 'QualifiedDemo' : 'Lead', email: values.email, phone: `${countryCode}${values.phoneNumber}`, page: `${window.location.origin}${location.pathname}`, campaignCode: attribution.campaignCode || 'Website - organic', fbp: cookie('_fbp'), fbc: cookie('_fbc') }) }).catch((conversionError) => console.warn('Meta conversion event could not be sent.', conversionError))
                    } catch (conversionError) {
                        console.warn('Meta conversion event could not be sent.', conversionError)
                    }
                }
                const followUpRoute = routeCall ? 'call_within_15_minutes' : routeWhatsapp ? 'recorded_demo_on_whatsapp' : 'sales_follow_up'
                sessionStorage.setItem('acolead_demo_followup', JSON.stringify({ routeCall, routeWhatsapp, page: location.pathname }))
                pushTrackingEvent('demo_form_submit', { event_id: eventId, page_path: location.pathname, campaign_code: attribution.campaignCode || '', sales_team_size: values.salesTeamSize, lead_volume: values.newLeadsPerMonth, follow_up_route: followUpRoute })
                resetForm()
                setDemoOtpVerificationId('')
                setIsFormSubmitted(true)
                navigate('/demo/thank-you')
            } catch (error) {
                setSubmitError(error.message || 'We could not submit your request. Please try again shortly.')
            }
        },
    })

    const formFields = [
        { name: 'name', label: 'Name', placeholder: 'Enter your name', required: true },
        { name: 'phoneNumber', label: 'Phone', placeholder: 'Enter phone number', required: true },
        { name: 'companyName', label: 'Company', placeholder: 'Enter your company name', required: true },
        {
            name: 'businessType',
            label: 'What best describes your business?',
            required: true,
            options: ['Builder or developer', 'Broker or channel partner', 'Mandate company', 'Both'],
        },
        {
            name: 'salesTeamSize',
            label: 'Sales Team Size',
            required: true,
            options: ['1-4', '5-10', '11-25', '26+'],
        },
        {
            name: 'newLeadsPerMonth',
            label: 'New leads each month',
            required: true,
            options: ['Under 50', '50-200', '201-500', '500+'],
        },
        { name: 'currentTool', label: 'What do you use to manage leads today?', required: true, options: ['Excel or WhatsApp', 'Another CRM', 'No CRM yet', 'Other'] },
        ...(includeBudgetQuestion ? [{ name: 'budgetRange', label: 'What budget range are you considering?', placeholder: 'Enter your expected budget', required: true }] : []),
        ...(includeActiveBookings ? [{ name: 'activeBookings', label: 'Number of active bookings', placeholder: 'Enter number of active bookings', required: true }] : []),
    ]

    const fieldStyle = {
        '& .MuiOutlinedInput-root': {
            height: 42,
            borderRadius: '9px',
            backgroundColor: 'white',
            '& fieldset': {
                borderColor: '#CBD6E3',
                borderRadius: '9px',
            },
            '&:hover fieldset': {
                borderColor: '#0859C1',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#0859C1',
                borderWidth: '2px',
            },
        },
        '& input::placeholder': {
            color: '#999',
            opacity: 1,
        },
    }

    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                borderRadius: 3,
                border: '1px solid #E0E8F1',
                boxShadow: '0 8px 24px rgba(20, 44, 74, .05)',
                width: '100%',
                maxWidth: '100%',
                p: { xs: 2, sm: 2.5 },
                color: '#14243A',
            }}
        >
            {isFormSubmitted ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#F8FBFF',
                        borderRadius: 2,
                        p: 3,
                        mt: 6,
                        color: '#14243A',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                        }}
                    >
                        <CheckCircleIcon sx={{ color: 'green', fontSize: '40px' }} />
                        <Typography mt={2} variant="h6" sx={{ fontWeight: 700, textAlign: 'center' }}>
                            Form Submitted Successfully
                        </Typography>
                    </Box>
                    <Typography
                        mt={2}
                        variant="h6"
                        fontWeight={500}
                        fontSize={isMobile ? '14px' : '18px'}
                        sx={{
                            lineHeight: '1.5',
                            textAlign: 'center',
                            color: '#14243A',
                            maxWidth: '500px',
                        }}
                    >
                        Your request has been received, and our team is currently reviewing it. We will get
                        back to you within 12 hours.
                    </Typography>
                </Box>
            ) : (
                <>
                    <form onSubmit={formik.handleSubmit} onFocusCapture={() => { if (!formStarted.current) { formStarted.current = true; pushTrackingEvent('demo_form_start', { page_path: location.pathname, campaign_code: attribution.campaignCode || '' }); } }}>
                        <input type="hidden" name="page" value={location.pathname} />
                        <input type="hidden" name="utm_campaign" value={attribution.utmCampaign} />
                        <input type="hidden" name="campaignCode" value={attribution.campaignCode} />
                        <input type="hidden" name="source" value={attribution.source} />
                        {submitError && (
                            <Alert severity="error" sx={{ mx: 3, mb: 2 }}>
                                {submitError}
                            </Alert>
                        )}
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                                columnGap: 1.4,
                                rowGap: 1.2,
                            }}
                        >
                            {formFields.map(({ name, label, placeholder, required, options }) => (
  <Box key={name} sx={{ display: 'flex', flexDirection: 'column', gridColumn: ['name', 'phoneNumber', 'salesTeamSize', 'newLeadsPerMonth'].includes(name) ? { xs: '1 / -1', sm: 'span 1' } : '1 / -1' }}>
    <Typography sx={{ color: '#26364B', fontWeight: 700, fontSize: 12, mb: 0.45 }}>{label}</Typography>

    {name === 'phoneNumber' ? (
      <>
      <TextField
        name={name}
        placeholder={placeholder}
        required={required}
        variant="outlined"
        fullWidth
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        sx={fieldStyle}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                sx={{ minWidth: 70, fontSize: '1rem', height: '2.5rem' }}
                variant="standard"
                disableUnderline
              >
                {countryOptions.map((option) => (
                  <MenuItem key={option.code} value={option.code}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </InputAdornment>
          ),
          endAdornment:
            formik.touched[name] && formik.errors[name] && (
              <Tooltip
                title={formik.errors[name]}
                open={isMobile ? true : undefined}
                placement="top"
              >
                <InputAdornment position="end">
                  <WarningIcon sx={{ color: theme.palette.warning.main }} />
                </InputAdornment>
              </Tooltip>
            ),
        }}
      />
      <DemoPhoneOtp
        mobileNumber={`${countryCode}${formik.values.phoneNumber}`}
        hasPhoneInput={formik.values.phoneNumber.length > 0}
        onVerified={setDemoOtpVerificationId}
      />
      </>
    ) : options ? (
      <TextField
        select
        name={name}
        required={required}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] ? formik.errors[name] : ''}
        fullWidth
        sx={fieldStyle}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </TextField>
    ) : (
      <TextField
        name={name}
        placeholder={placeholder}
        required={required}
        variant="outlined"
        fullWidth
        inputRef={name === 'name' ? firstFieldRef : undefined} // ✅ only for first field
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        sx={fieldStyle}
        InputProps={{
          endAdornment:
            formik.touched[name] && formik.errors[name] && (
              <Tooltip
                title={formik.errors[name]}
                open={isMobile ? true : undefined}
                placement="top"
              >
                <InputAdornment position="end">
                  <WarningIcon sx={{ color: theme.palette.warning.main }} />
                </InputAdornment>
              </Tooltip>
            ),
        }}
      />
    )}
  </Box>
))}


                            <Box sx={{ mt: 3 }}>
                                <Button
                                    ref={buttonRef}
                                    type="submit"
                                    disabled={!demoOtpVerificationId || formik.isSubmitting}
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    sx={{
                                        bgcolor: '#0859C1',
                                        color: 'white',
                                        textTransform: 'none',
                                        borderRadius: 2,
                                        minHeight: 42,
                                        fontWeight: 700,
                                    }}
                                >
                                    {props.submitLabel || 'Book a free demo'}
                                </Button>
                            </Box>
                            {submitError && <Alert severity="error" sx={{ mx: 3 }}>{submitError}</Alert>}
                        </Box>
                    </form>
                </>
            )}
        </Box>
    )
})

Contact.displayName = 'Contact'

export default Contact
