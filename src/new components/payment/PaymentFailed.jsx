import { Box, Button, Chip, CircularProgress, Container, Paper, Stack, Typography } from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { keyframes } from "@mui/system";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const formatDate = ((date) => {
  const parts = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(new Date(date ?? Date.now()));

  const get = (type) => parts.find((p) => p.type === type)?.value ?? "";

  return `${get("day")} ${get("month")} ${get("year")}, ${get("hour")}:${get("minute")} ${get("dayPeriod")}`;
});

const fadeUp = keyframes`
from{
    opacity:0;
    transform:translateY(24px);
}
to{
    opacity:1;
    transform:translateY(0);
}
`;

export default function PaymentFailed({
  minHeight = "100vh",
  errorCode,
  detailedErrorCode,
  description,
  source,
  stage,
  navigateToApp,
}) {

  const content = getFailureContent({
    errorCode,
    description,
  });

  return (
    <Box
      sx={{
        minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: (theme) => `linear-gradient(180deg,${theme.palette.error.light}10 0%,${theme.palette.background.default} 35%,${theme.palette.background.default} 100%)`,
        py: 2,
        position: "relative",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 5,
            textAlign: "center",
            animation: `${fadeUp} .45s ease`,
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Chip
              color="error"
              size="small"
              icon={<ErrorOutlineRoundedIcon />}
              label="Payment Failed"
              sx={{
                fontWeight: 600,
              }}
            />

            <Box
              sx={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                bgcolor: "error.light",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ErrorOutlineRoundedIcon
                color="error"
                sx={{
                  fontSize: 62,
                }}
              />
            </Box>

            <Box>
              <Typography
                variant="h4"
                fontWeight={700}
                gutterBottom
              >
                {content.title}
              </Typography>

              <Typography
                color="text.secondary"
                fontSize={16}
                lineHeight={1.8}
                maxWidth={460}
                mx="auto"
              >
                {content.subtitle}
              </Typography>

              <Typography
                color="text.secondary"
                fontSize={14}
                mt={2}
              >
                {content.message}
              </Typography>
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              width="100%"
              justifyContent="center"
            >
              <Button
                variant="outlined"
                startIcon={<HomeRoundedIcon />}
                size="large"
                onClick={navigateToApp}
                sx={{
                  px: 4,
                  py: 1.3,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Go to Dashboard
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

const getFailureContent = ({
  errorCode,
  description,
}) => {
  switch (errorCode) {
    case "INVALID_MPIN":
      return {
        title: "Incorrect UPI PIN",
        subtitle: "The payment could not be completed because an incorrect UPI PIN was entered.",
        message: "Please verify your UPI PIN and try again. Your bank may temporarily lock UPI after multiple incorrect attempts.",
        showRetry: true,
      };

    case "INSUFFICIENT_BALANCE":
      return {
        title: "Insufficient Balance",
        subtitle: "Your bank account doesn't have enough balance to complete this payment.",
        message: "Please add funds to your account or use another payment method.",
        showRetry: true,
      };

    case "BANK_DECLINED":
      return {
        title: "Payment Declined",
        subtitle: "Your bank declined this transaction.",
        message: "Please contact your bank or try using another payment method.",
        showRetry: true,
      };

    case "PAYMENT_TIMEOUT":
      return {
        title: "Payment Timed Out",
        subtitle: "The payment session expired before it could be completed.",
        message: "Please initiate the payment again.",
        showRetry: true,
      };

    case "USER_CANCELLED":
      return {
        title: "Payment Cancelled",
        subtitle: "You cancelled the payment before completion.",
        message: "No amount has been charged. You can try again whenever you're ready.",
        showRetry: true,
      };

    default:
      return {
        title: "Payment Failed",
        subtitle: description ?? "We couldn't complete your payment.",
        message: "If any amount has been debited, it is usually reversed by your bank within a few business days.",
        showRetry: true,
      };
  }
};

export function PaymentPending({
  minHeight = "100vh",
  orderId,
  expireAt,
  navigateToApp,
}) {

  return (
    <Box
      sx={{
        minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: (theme) => `linear-gradient(180deg,${theme.palette.warning.light}10 0%,${theme.palette.background.default} 35%,${theme.palette.background.default} 100%)`,
        py: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 5,
            textAlign: "center",
            animation: `${fadeUp} .45s ease`,
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Chip
              color="warning"
              size="small"
              icon={<AccessTimeRoundedIcon />}
              label="Payment Pending"
              sx={{ fontWeight: 600 }}
            />

            <Box
              sx={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                bgcolor: "warning.light",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress
                size={56}
                thickness={5}
              />
            </Box>

            <Box>
              <Typography
                variant="h4"
                fontWeight={700}
                gutterBottom
              >
                Waiting for Payment Confirmation
              </Typography>

              <Typography
                color="text.secondary"
                fontSize={16}
                lineHeight={1.8}
                maxWidth={470}
                mx="auto"
              >
                Your payment request has been received successfully and is
                currently awaiting confirmation from your bank or payment
                provider.
              </Typography>

              <Typography
                color="text.secondary"
                fontSize={14}
                mt={2}
              >
                This usually takes only a few seconds. Please keep this window
                open while we verify your payment.
              </Typography>
            </Box>

            {(orderId || expireAt) && (
              <Paper
                variant="outlined"
                sx={{
                  width: "100%",
                  p: 2,
                  borderRadius: 3,
                  bgcolor: "background.default",
                }}
              >
                <Stack spacing={1}>
                  {orderId && (
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Typography color="text.secondary">
                        Order ID
                      </Typography>

                      <Typography
                        fontWeight={600}
                        sx={{
                          wordBreak: "break-all",
                        }}
                      >
                        {orderId}
                      </Typography>
                    </Stack>
                  )}

                  {expireAt && (
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Typography color="text.secondary">
                        Expires At
                      </Typography>

                      <Typography fontWeight={600}>
                        {formatDate(expireAt)}
                      </Typography>
                    </Stack>
                  )}
                </Stack>
              </Paper>
            )}

            <Typography
              variant="body2"
              color="warning.main"
              fontWeight={600}
            >
              We are automatically checking your payment status...
            </Typography>

            <Button
              variant="outlined"
              startIcon={<HomeRoundedIcon />}
              size="large"
              onClick={navigateToApp}
              sx={{
                px: 4,
                py: 1.3,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Go to Dashboard
            </Button>

            <Typography
              variant="body2"
              color="text.secondary"
              maxWidth={430}
            >
              If your payment remains pending for more than a few minutes,
              please check your bank or UPI app before attempting another
              payment.
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
