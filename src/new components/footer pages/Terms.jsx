import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../../assets/acolead-crm.png";
import { useNavigate } from "react-router-dom";
import { useMixpanel } from "../../mixpanel/MixpanelContext";
const Terms = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const navigate = useNavigate();
  const { trackEvent } = useMixpanel();
  const sections = [
    {
      title: "1. Platform Use",
      subtitles: [
        "The Platform enables users to build dynamic forms, collect data, add payment fields, gather electronic signatures, and integrate via SDKs.",
        "Users are solely responsible for the accuracy and legality of the data they upload or share.",
      ],
    },
    {
      title: "2. Data Security and Compliance",
      subtitles: [
        "We ensure all data is encrypted with 256-bit encryption to safeguard against unauthorized access.",
        "Our Platform complies with HIPAA for managing sensitive health-related information.",
        "We strictly adhere to a No-Disclosure Policy, ensuring that your data is not shared or sold without your explicit consent.",
      ],
    },
    {
      title: "3. Subscription and Billing",
      subtitles: [
        "Plans: We offer monthly and yearly subscriptions, billed at the start of each billing cycle.",
        "Cancellation: Subscriptions can be canceled at any time, with services continuing until the end of the billing period.",
      ],
    },
    {
      title: "4. Multi-Level Workflows and Access Control",
      subtitles: [
        "The Platform supports complex workflows with role-based access for actors like HR, managers, and signatories.",
        "Users can define conditional rules, expiration periods, and notification settings for workflows.",
      ],
    },
    {
      title: "5. Limitations of Liability",
      subtitles: [
        "We are not liable for any losses resulting from user errors, such as uploading incorrect data or failing to meet legal obligations.",
      ],
    },
    {
      title: "6. Termination of Services",
      subtitles: [
        "We reserve the right to suspend or terminate accounts found in violation of these Terms.",
      ],
    },
    {
      title: "7. Governing Law",
      subtitles: [
        "These Terms are governed by the laws of Mumbai, Maharashtra, India.",
      ],
    },
  ];
  const handleNavigate = () => {
    navigate("/");
    trackEvent("move to home page");
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Box
                sx={{
                    background: theme.palette.background.gradient,
                    color: 'white',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}
            >
                <img src={logo} width="140" height="auto" style={{marginLeft:5}}/>
            </Box> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          ml: !isMobile ? 5 : 0,
          mr: 5,
          mt: 2,
        }}
      >
        <img
          src={logo}
          width="150"
          height="auto"
          alt="Logo"
          style={{ cursor: "pointer" }}
          onClick={handleNavigate}
        />
      </Box>
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "white",
          // borderRadius: 2,
          // boxShadow: theme.shadows[2],
          padding: 4,
          // marginTop: 4,
          textAlign: "left",
        }}
      >
        <h1>Terms of Use</h1>
        <p>
          <strong>Effective Date:</strong> March 30, 2027
        </p>

        <p>
          These Terms of Use ("Terms") govern your use of Coalitionify, a
          software-as-a-service (SaaS) platform provided by Coalitionify
          Innovate Pvt Ltd ("Coalitionify", "we", "our", or "us"). By accessing
          or using Coalitionify's product ("Platform"), you agree to be bound by
          these Terms. If you do not agree, please do not use the Platform.
        </p>

        <h2>1. Eligibility</h2>
        <p>
          You must be at least 18 years old and capable of forming a binding
          contract to use the Platform. By using Coalitionify's product, you
          represent that you meet these requirements.
        </p>

        <h2>2. Use of the Platform</h2>
        <ul>
          <li>
            You agree to use the Platform only for lawful purposes and in
            accordance with these Terms.
          </li>
          <li>
            You are responsible for any content you upload, including documents,
            media, and form inputs.
          </li>
          <li>
            You agree not to interfere with the operation or security of the
            Platform or other users.
          </li>
        </ul>

        <h2>3. Account Responsibilities</h2>
        <ul>
          <li>
            You are responsible for maintaining the confidentiality of your
            account login credentials.
          </li>
          <li>All activities under your account are your responsibility.</li>
          <li>
            You must notify us immediately of any unauthorized use or breach of
            your account.
          </li>
        </ul>

        <h2>4. Subscription and Payment</h2>
        <p>
          Some features of Coalitionify's product may require a paid
          subscription. By subscribing, you agree to our pricing, billing cycle,
          and payment terms, which may be updated from time to time. Payments
          are non-refundable unless otherwise stated in writing.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All content, trademarks, logos, and code within the Platform are the
          property of Coalitionify Innovate Pvt Ltd or its licensors. You may
          not duplicate, modify, or distribute any part of the Platform without
          prior written consent.
        </p>

        <h2>6. Data Handling and Privacy</h2>
        <p>
          By using Coalitionify's product, you agree to the collection, use, and
          processing of your data as described in our{" "}
          <a href="/privacy-policy">Privacy Policy</a>. You retain ownership of
          your data and uploaded documents.
        </p>

        <h2>7. Third-Party Integrations</h2>
        <p>
          The Platform integrates with third-party services such as Meta
          (Facebook, Instagram, WhatsApp) and Google Cloud (including Vertex
          AI). Your use of these integrations is subject to their respective
          terms and policies. Coalitionify is not liable for any issues or data
          loss arising from third-party APIs.
        </p>

        <h2>8. Downtime and Maintenance</h2>
        <p>
          We strive for high availability but do not guarantee uninterrupted
          service. The Platform may be unavailable during maintenance or
          unforeseen outages. We will make reasonable efforts to notify users of
          scheduled downtime.
        </p>

        <h2>9. Termination</h2>
        <p>
          We may suspend or terminate your account at any time for violation of
          these Terms, abuse, or fraudulent activity. You may also terminate
          your account by contacting support. Upon termination, your access will
          be revoked and data may be deleted after a retention period.
        </p>

        <h2>10. Disclaimers and Limitation of Liability</h2>
        <p>
          The Platform is provided "as is" without warranties of any kind. To
          the fullest extent permitted by law, Coalitionify disclaims all
          warranties, express or implied. We are not liable for indirect,
          incidental, or consequential damages arising from your use of the
          Platform.
        </p>

        <h2>11. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the
          Platform after changes constitutes your acceptance. We encourage you
          to review the Terms periodically.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. All disputes shall be
          subject to the exclusive jurisdiction of courts located in Mumbai,
          Maharashtra.
        </p>

        <h2>13. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms, please
          contact us at{" "}
          <a href="mailto:info@coalitionify.com">info@coalitionify.com</a>.
        </p>
      </Container>
    </Box>
  );
};

export default Terms;
