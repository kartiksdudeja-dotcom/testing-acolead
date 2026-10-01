import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import logo from "../../assets/acolead-crm.png";
import { useNavigate } from "react-router-dom";
import { useMixpanel } from "../../mixpanel/MixpanelContext";
const Privacy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const navigate = useNavigate();
  const { trackEvent } = useMixpanel();
  const sections = [
    {
      title: "1. Information We Collect",
      subtitles: [
        "Personal Information: Name, email address, phone number, payment information, and billing details.",
        "Document and Form Data: Information uploaded to the Platform, including forms, signatures, and associated metadata.",
        "Audit Logs: Time-stamped logs of actions related to document creation, editing, sharing, and signing.",
        "Usage Data: IP addresses, device types, browser versions, and interaction data.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      subtitles: [
        "Provide core services like form building, document creation, signature collection, and payment processing.",
        "Maintain audit trails for legal and regulatory compliance.",
        "Analyze Platform usage for performance improvements and troubleshooting.",
        "Communicate updates, support information, and subscription-related notifications.",
      ],
    },
    {
      title: "3. Data Security and Retention",
      subtitles: [
        "Encryption: All customer data is encrypted with 256-bit encryption, both at rest and in transit, to ensure the highest level of security.",
        "HIPAA Compliance: We adhere to HIPAA regulations to protect sensitive health-related information.",
        "Retention: User data, including documents and logs, is stored securely for up to 5 years after the termination of your subscription.",
        "Access Control: Only authorized personnel have access to your encrypted data, strictly following our No-Disclosure Policy.",
      ],
    },
    {
      title: "4. Data Sharing",
      subtitles: [
        "Data is shared only with trusted third-party service providers (e.g., payment gateways) to facilitate essential services.",
        "No data is sold or disclosed to unauthorized third parties.",
      ],
    },
    {
      title: "5. Your Rights",
      subtitles: [
        "Access or delete your personal data.",
        "Opt out of non-essential communications.",
        "Submit complaints to info@coalitionify.com regarding data usage or security.",
      ],
    },
    {
      title: "6. Changes to This Policy",
      subtitles: [
        "We may revise this Privacy Policy from time to time. Continued use of the Platform constitutes acceptance of these changes.",
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
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last Updated:</strong> March 2026
        </p>

        <p>
          Coalitionify Innovate Pvt Ltd ("Coalitionify," "we," "our," or "us")
          provides the AcoLead platform ("Platform") and is committed to
          protecting your privacy and the security of your personal information.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your data when you use our services.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, payment information, and billing details.
          </li>
          <li>
            <strong>Document and Form Data:</strong> Information uploaded to the
            Platform, including forms, signatures, and associated metadata.
          </li>
          <li>
            <strong>Audit Logs:</strong> Time-stamped logs of actions related to
            document creation, editing, sharing, and signing.
          </li>
          <li>
            <strong>Usage Data:</strong> IP addresses, device types, browser
            versions, and interaction data.
          </li>
          <li>
            <strong>Meta Platform Data:</strong> When you connect a Facebook
            Page, Instagram Business Account, or WhatsApp Business Account to
            AcoLead, we collect data via Meta APIs, such as Page ID, Instagram
            user ID, business account ID, access tokens, and leads submitted
            through Meta Lead Ads. This data is used strictly to deliver
            requested services and is not shared or sold.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>
            To provide core services like form building, document creation,
            signature collection, and payment processing.
          </li>
          <li>To maintain audit trails for legal and regulatory compliance.</li>
          <li>
            To analyze platform usage for performance improvements and
            troubleshooting.
          </li>
          <li>
            To communicate updates, support information, and
            subscription-related notifications.
          </li>
          <li>
            To fulfill automated workflows, such as Meta post publishing, ad
            campaign management, lead syncing, and WhatsApp template replies.
          </li>
        </ul>

        <h2>3. Data Security and Retention</h2>
        <ul>
          <li>
            <strong>Encryption:</strong> All customer data is encrypted with
            256-bit encryption, both at rest and in transit.
          </li>
          <li>
            <strong>Access Control:</strong> Only authorized personnel have
            access to your encrypted data under strict access control policies.
          </li>
          <li>
            <strong>Retention:</strong> User data, including documents and logs,
            is stored securely for up to 5 years after the termination of your
            subscription.
          </li>
          <li>
            <strong>HIPAA Compliance:</strong> Optional HIPAA-compliant
            configurations are available for healthcare customers who require
            them.
          </li>
        </ul>

        <h2>4. Data Sharing</h2>
        <ul>
          <li>
            We share data only with trusted service providers who help us
            deliver platform services, including:
          </li>
          <ul>
            <li>
              Cloud hosting and storage providers (e.g., AWS, Google Cloud)
            </li>
            <li>Email delivery services (e.g., Gmail SMTP)</li>
            <li>AI processing services (e.g., Google Vertex AI)</li>
          </ul>
          <li>
            These providers are bound by data protection agreements and may only
            use data to provide requested services.
          </li>
          <li>No data is sold or disclosed to unauthorized third parties.</li>
        </ul>
        <h2>Call Log Access</h2>
          <p>
          AcoLead requests access to call logs to identify incoming calls from potential leads and show relevant information, such as lead name and recent activity, on-screen. This helps real estate agents respond effectively. Call log data is not uploaded or shared externally and is only used on-device for this feature.
          </p>

        <h2>5. Your Rights</h2>
        <ul>
          <li>
            You have the right to access, correct, or delete your personal data.
          </li>
          <li>You may opt out of non-essential communications at any time.</li>
          <li>
            You may contact us at{" "}
            <a href="mailto:info@coalitionify.com">info@coalitionify.com</a> to
            request data deletion or raise any privacy concerns.
          </li>
        </ul>

        <h2>Account and Data Deletion</h2>
        <ul>
          <li>
            You may request deletion of your AcoLead account and all associated data at any time.
          </li>
          <li>
            To request deletion, email us at{" "}
            <a href="mailto:info@coalitionify.com">info@coalitionify.com</a> from your registered email address or mobile number.
          </li>
          <li>
            Upon verification, we will permanently delete your account, including all documents, business data, leads, and profile information, within 7 business days.
          </li>
        </ul>
        <h2 id="selective-deletion">Selective Data Deletion</h2>
        <p>
        Users can delete certain types of data (e.g., leads, uploaded documents, and product listings) directly from the AcoLead platform interface. These actions permanently remove the data from our system without requiring full account deletion.
        </p>

        <h2>6. Legal Basis for Processing</h2>
        <p>
          We process your data based on your consent, our contractual
          obligations to provide services, legal compliance requirements, and
          our legitimate interests in operating the AcoLead platform securely
          and effectively.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Continued use of
          the Platform after any changes constitutes acceptance of those
          changes. We encourage you to review this policy periodically.
        </p>
        <h3>Google API Services Disclosure</h3>
        <p>
          Coalitionify’s use of information received from Google APIs will
          adhere to the <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
        <p>
          We do <strong>not</strong> use data obtained from Google Workspace
          APIs (such as Gmail, Drive, or Calendar APIs) to develop, improve, or
          train generalized artificial intelligence (AI) or machine learning
          (ML) models. Data accessed via these APIs is used solely to deliver
          user-requested features and is not shared or repurposed for any form
          of model training.
        </p>
      </Container>
    </Box>
  );
};

export default Privacy;
