import { Box, Button, Chip, Container, Paper, Stack, Typography, keyframes } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";

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

const confetti = keyframes`
0%{
    opacity:0;
    transform:
        translate(0,0)
        rotate(0deg)
        scale(.3);
}

10%{
    opacity:1;
}

100%{
    opacity:0;
    transform:
        translate(var(--x),calc(var(--y) + 40px))
        rotate(720deg)
        scale(1);
}
`;

const ripple = keyframes`
0%{
    transform:scale(.6);
    opacity:.45;
}

100%{
    transform:scale(2);
    opacity:0;
}
`;

const colors = [
    "#22c55e",
    "#16a34a",
    "#84cc16",
    "#3b82f6",
    "#f59e0b",
    "#ec4899",
    "#8b5cf6",
];

const particles = Array.from({ length: 36 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 36;
    const distance = 90 + Math.random() * 70;

    return {
        x: `${Math.cos(angle) * distance}px`,
        y: `${Math.sin(angle) * distance}px`,
        size: 5 + Math.random() * 7,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 350,
        radius: Math.random() > 0.5 ? "50%" : "2px",
    };
});

export default function PaymentSuccess({
    minHeight = "100vh",
    navigateToApp,
}) {

    return (
        <Box
            sx={{
                minHeight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: (theme) =>
                    `linear-gradient(180deg,
            ${theme.palette.success.light}10 0%,
            ${theme.palette.background.default} 35%,
            ${theme.palette.background.default} 100%)`,
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
                        animation: `${fadeUp} .6s ease`,
                    }}
                >
                    <Stack spacing={3} alignItems="center">
                        <Chip
                            color="success"
                            size="small"
                            icon={<CelebrationRoundedIcon />}
                            label="Payment Completed"
                            sx={{
                                fontWeight: 600,
                                animation: `${fadeUp} .7s ease`,
                            }}
                        />

                        <Box
                            sx={{
                                position: "relative",
                                width: 160,
                                height: 160,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "visible",
                            }}
                        >
                            {particles.map((p, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        "--x": p.x,
                                        "--y": p.y,
                                        position: "absolute",
                                        width: p.size,
                                        height:
                                            p.size * (Math.random() > 0.6 ? 2 : 1),
                                        borderRadius: p.radius,
                                        bgcolor: p.color,
                                        animation: `${confetti} 3s cubic-bezier(.22,.61,.36,1) forwards`,
                                        animationDelay: `${p.delay}ms`,
                                    }}
                                />
                            ))}

                            <Box
                                sx={{
                                    position: "absolute",
                                    width: 110,
                                    height: 110,
                                    borderRadius: "50%",
                                    border: "3px solid",
                                    borderColor: "success.main",
                                    animation: `${ripple} 1.8s ease-out`,
                                }}
                            />

                            <Box
                                sx={{
                                    position: "absolute",
                                    width: 110,
                                    height: 110,
                                    borderRadius: "50%",
                                    border: "3px solid",
                                    borderColor: "success.main",
                                    animation: `${ripple} 1.8s ease-out .35s`,
                                }}
                            />

                            <CheckCircleRoundedIcon
                                color="success"
                                sx={{
                                    fontSize: 64,
                                    position: "relative",
                                    zIndex: 2,
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                animation: `${fadeUp} .9s ease`,
                            }}
                        >
                            <Typography
                                variant="h4"
                                fontWeight={700}
                                gutterBottom
                            >
                                Payment Successful!
                            </Typography>

                            <Typography
                                color="text.secondary"
                                fontSize={16}
                                lineHeight={1.8}
                                maxWidth={460}
                                mx="auto"
                            >
                                Your payment has been processed successfully. Your
                                selected plan has been activated and is ready to use.
                            </Typography>

                            <Typography
                                color="text.secondary"
                                fontSize={14}
                                mt={2}
                            >
                                Thank you for choosing us.
                            </Typography>
                        </Box>

                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardRoundedIcon />}
                            onClick={navigateToApp}
                            sx={{
                                px: 4,
                                py: 1.4,
                                borderRadius: 3,
                                textTransform: "none",
                                fontWeight: 600,
                                fontSize: 15,
                            }}
                        >
                            Continue to Dashboard
                        </Button>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            maxWidth={420}
                        >
                            Your invoice and payment details are available in the
                            Billing section.
                        </Typography>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
}
