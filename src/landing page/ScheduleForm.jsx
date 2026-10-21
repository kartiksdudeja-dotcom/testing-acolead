import React, { useRef, useState } from 'react'
import {
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
    Alert,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WarningIcon from '@mui/icons-material/Warning'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import DemoPhoneOtp from '../new components/DemoPhoneOtp'
import { submitVerifiedDemoLead } from '../utils/demoLeadOtp'

const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Other',
]

const ScheduleForm = ({ contactFormRef, highlighted }) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const buttonRef = useRef()
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [demoOtpVerificationId, setDemoOtpVerificationId] = useState('')
    const [submitError, setSubmitError] = useState('')
    const [countryCode, setCountryCode] = useState('+91')
    const countryOptions = [
        { code: '+91', label: '🇮🇳 +91' },
        { code: '+1', label: '🇺🇸 +1' },
        { code: '+44', label: '🇬🇧 +44' },
        { code: '+61', label: '🇦🇺 +61' },
    ]

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
            .email('Invalid email address'),
        phoneNumber: Yup.string()
            .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone number is required'),
        companyName: Yup.string(),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            companyName: '',
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                setSubmitError('')
                await submitVerifiedDemoLead({
                    name: values.name,
                    mobileNumber: `${countryCode}${values.phoneNumber}`,
                    email: values.email,
                    company: values.companyName,
                    demoOtpVerificationId,
                })
                resetForm()
                setDemoOtpVerificationId('')
                setIsFormSubmitted(true)
            } catch (error) {
                setSubmitError(error.message || 'Could not submit your request. Please try again.')
            }
        },
    })

    const fieldStyle = {
        '& .MuiOutlinedInput-root': {
            height: 48,
            borderRadius: '8px',
            '& fieldset': {
                borderColor: 'black',
                borderRadius: '8px',
            },
            '&:hover fieldset': {
                borderColor: '#1677F7',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#1677F7',
                borderWidth: '2px',
            },
        },
        '& .MuiInputLabel-root': {
            left: '3px',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: '#1677F7',
        },
    }
    

    return (
        <Box>
            {isFormSubmitted ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background:
                            'linear-gradient(215.51deg, #1677F7 0%, #63A6FF 64.27%, #D9E9FF 107.12%)',
                        borderRadius: 2,
                        p: 3,
                        m: 3,
                        mt: 6,
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
                            color: 'black',
                            maxWidth: '500px',
                        }}
                    >
                        Your request has been received, and our team is currently reviewing it. We will get back to you within 12 hours.
                    </Typography>
                </Box>
            ) : (
                <Box
                    ref={contactFormRef}
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 3,
                        boxShadow: 1,
                        width: '100%',
                        maxWidth: isMobile ? '100%' : 400,
                        py: 2,
                        ml: !isMobile ? 30 : 0,
                        border: highlighted ? '3px solid rgb(0, 3, 8)' : 'none',
                        transition: 'border 0.3s ease',
                        '&:focus': { borderColor: '#1677F7' },
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: 'center',
                            color: '#1677F7',
                            fontWeight: 600,
                        }}
                    >
                        Schedule Demo
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                px: isMobile ? 2 : 3,
                            }}
                        >
                            <TextField
                                label="Name"
                                name="name"
                                variant="outlined"
                                fullWidth
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                sx={{ ...fieldStyle, mt: 3 }}
                                InputProps={{
                                    endAdornment:
                                        formik.touched.name && formik.errors.name && (
                                            <Tooltip
                                                title={formik.errors.name}
                                                open={isMobile ? true : undefined} // Always open on mobile, default behavior otherwise
                                                placement="top"
                                            >
                                                <InputAdornment position="end">
                                                    <WarningIcon sx={{ color: theme.palette.warning.main }} />
                                                </InputAdornment>
                                            </Tooltip>
                                        ),
                                }}
                            />
                            <TextField
                                label="Email"
                                name="email"
                                variant="outlined"
                                fullWidth
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                sx={fieldStyle}
                                InputProps={{
                                    endAdornment:
                                        formik.touched.email && formik.errors.email && (
                                            <Tooltip title={formik.errors.email}
                                                open={isMobile ? true : undefined} // Always open on mobile, default behavior otherwise
                                                placement="top"
                                            >
                                                <InputAdornment position="end">
                                                    <WarningIcon sx={{ color: theme.palette.warning.main }} />
                                                </InputAdornment>
                                            </Tooltip>
                                        ),
                                }}
                            />
                            <TextField
                                label="Phone Number"
                                name="phoneNumber"
                                variant="outlined"
                                fullWidth
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
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
                                        formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                            <Tooltip title={formik.errors.phoneNumber}
                                                open={isMobile ? true : undefined} // Always open on mobile, default behavior otherwise
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
                            <TextField
                                label="Company Name"
                                name="companyName"
                                variant="outlined"
                                fullWidth
                                value={formik.values.companyName}
                                onChange={formik.handleChange}
                                error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                                sx={fieldStyle}
                                InputProps={{
                                    endAdornment:
                                        formik.touched.companyName && formik.errors.companyName && (
                                            <Tooltip title={formik.errors.companyName}
                                                open={isMobile ? true : undefined} // Always open on mobile, default behavior otherwise
                                                placement="top"
                                            >
                                                <InputAdornment position="end">
                                                    <WarningIcon sx={{ color: theme.palette.warning.main }} />
                                                </InputAdornment>
                                            </Tooltip>
                                        ),
                                }}
                            />
                            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    ref={buttonRef}
                                    type="submit"
                                    disabled={!demoOtpVerificationId || formik.isSubmitting}
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    sx={{
                                        bgcolor: '#1677F7',
                                        color: 'white',
                                        textTransform: 'none',
                                        maxWidth: 100, // optional to restrict the button's width
                                    }}
                                >
                                    {formik.isSubmitting ? 'Submitting…' : 'Submit'}
                                </Button>
                            </Box>
                            {submitError && <Alert severity="error">{submitError}</Alert>}


                            <Typography
                                variant="caption"
                                align="center"
                                sx={{
                                    fontSize: '12px',
                                    color: 'gray',
                                    mt: 2,
                                    mx: 'auto',
                                    textAlign: 'center',
                                    maxWidth: 300,
                                }}
                            >
                                By clicking on "Sign up for free", you agree to our terms and you acknowledge having read our privacy policy
                            </Typography>


                        </Box>
                    </form>
                </Box>
            )}
        </Box>
    )
}

export default ScheduleForm
