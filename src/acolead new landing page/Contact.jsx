import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
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
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WarningIcon from '@mui/icons-material/Warning'
import ScheduleIcon from '@mui/icons-material/Schedule'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import DemoIcon from './icons/DemoIcon'

const Contact = forwardRef((props, ref) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const buttonRef = useRef()
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

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
                const payload = {
                    ...values,
                    phoneNumber: `${countryCode}${values.phoneNumber}`,
                }
                const result = await window.AcoLead.submitEnquiry(
                    '1f03088f-28cb-6ac0-86a7-8a56d9a1daba',
                    payload.name,
                    payload.phoneNumber,
                    payload.requirement,
                    payload.email,
                    payload.companyName
                )

                console.log('result:', result)
                if (!result.code) {
                    resetForm()
                    setIsFormSubmitted(true)
                } else {
                    console.error('API call failed')
                }
            } catch (error) {
                console.error('Error during API call:', error)
            }
        },
    })

    const fieldStyle = {
        '& .MuiOutlinedInput-root': {
            height: 48,
            borderRadius: '12px',
            backgroundColor: 'white',
            '& fieldset': {
                borderColor: 'black',
                borderRadius: '12px',
            },
            '&:hover fieldset': {
                borderColor: '#1677F7',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#1677F7',
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
                backgroundColor: isFormSubmitted ? 'none' : '#00142E',
                borderRadius: 3,
                boxShadow: 1,
                width: '100%',
                maxWidth: isMobile ? '100%' : 500,
                py: 4,
                // px: 3,
                // ml: !isMobile ? 10 : 0,
                color: 'white',
            }}
        >
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
                        mt: 6,
                        color: 'black',
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
                        Your request has been received, and our team is currently reviewing it. We will get
                        back to you within 12 hours.
                    </Typography>
                </Box>
            ) : (
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 3,
                            justifyContent: 'center',
                            color: '#1677F7',
                            m: 3
                        }}
                    >
                        <DemoIcon />
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                            }}
                        >
                            Schedule Demo
                        </Typography>
                    </Box>

                    <form onSubmit={formik.handleSubmit}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                // px: isMobile ? 1 : 3,
                                m: 3
                            }}
                        >
                            {[
  { name: 'name', label: 'Name', placeholder: 'Enter your name', required: true },
  { name: 'email', label: 'Email', placeholder: 'Enter your email' },
  { name: 'phoneNumber', label: 'Phone Number', placeholder: 'Enter phone number', required: true },
  { name: 'companyName', label: 'Company Name', placeholder: 'Enter your company name' },
].map(({ name, label, placeholder, required }) => (
  <Box key={name} sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography sx={{ color: 'white', fontWeight: 600, mb: 0.5 }}>{label}</Typography>

    {name === 'phoneNumber' ? (
      <TextField
        name={name}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        value={formik.values[name]}
        onChange={formik.handleChange}
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
    ) : (
      <TextField
        name={name}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        inputRef={name === 'name' ? firstFieldRef : undefined} // ✅ only for first field
        value={formik.values[name]}
        onChange={formik.handleChange}
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
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    sx={{
                                        bgcolor: '#1677F7',
                                        color: 'white',
                                        textTransform: 'none',
                                        borderRadius: 2,
                                    }}
                                >
                                    Request Demo
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </>
            )}
        </Box>
    )
})

Contact.displayName = 'Contact'

export default Contact
