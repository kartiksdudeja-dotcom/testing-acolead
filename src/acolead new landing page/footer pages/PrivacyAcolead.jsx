import React from "react";
import {
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../../assets/acolead-crm.png";
import { useNavigate } from "react-router-dom";
import { useMixpanel } from "../../mixpanel/MixpanelContext";

const PrivacyAcolead = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const { trackEvent } = useMixpanel();

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
          alt="AcoLead CRM Logo"
          style={{ cursor: "pointer" }}
          onClick={handleNavigate}
        />
      </Box>

      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "white",
          padding: 4,
          textAlign: "left",
        }}
      >
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last Updated:</strong> March 2026
        </p>

        <p>
          Coalitionify Innovate Pvt Ltd (&quot;Coalitionify,&quot; &quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;) provides the AcoLead platform (&quot;Platform&quot;) and is committed to
          protecting your privacy and the security of your personal information.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your data when you use our services and mobile applications.
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
            <strong>Usage Data:</strong> IP addresses, device types, browser or
            app versions, and interaction data.
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
            To analyze platform and app usage for performance improvements and
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
            is stored securely for as long as your account is active and, where
            necessary, for up to 5 years after the termination of your
            subscription or as required by law.
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
            You may request deletion of your AcoLead account and all associated
            data at any time.
          </li>
          <li>
            You can request deletion by:
            <ul>
              <li>
                Using the <strong>&quot;Delete Account&quot;</strong> option
                within the AcoLead application settings; or
              </li>
              <li>
                Emailing us at{" "}
                <a href="mailto:info@coalitionify.com">
                  info@coalitionify.com
                </a>{" "}
                from your registered email address or mobile number.
              </li>
            </ul>
          </li>
          <li>
            Upon verification, we will permanently delete your account,
            including all documents, business data, leads, call-related data
            synced to the CRM, and profile information, within{" "}
            <strong>7 business days</strong>.
          </li>
        </ul>

        <h2 id="selective-deletion">Selective Data Deletion</h2>
        <p>
          Users can delete certain types of data (e.g., leads, uploaded
          documents, and product listings) directly from the AcoLead platform
          interface. These actions permanently remove the selected data from our
          system without requiring full account deletion, subject to any legal
          retention requirements.
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

        {/* NEW SECTION: Mobile App Permissions & Data Usage */}
        <h2>8. Mobile App Permissions and Data Usage</h2>

        <h3>
          A. Call Log and Phone Data Usage (READ_CALL_LOG, PROCESS_OUTGOING_CALLS,
          READ_PHONE_STATE)
        </h3>
        <p>
          AcoLead requests access to your call logs and phone state. This access
          is strictly limited to the core functionality of our mobile
          application: automated lead management for your business calls.
        </p>

        <p>
          <strong>Why we need these permissions:</strong>
        </p>
        <ul>
          <li>
            <strong>Automatic Call Logging:</strong> To automatically detect and
            log calls made to or received from your leads, including call
            direction (incoming/outgoing), duration, and timestamp. This helps
            keep your CRM records up-to-date without manual entry.
          </li>
          <li>
            <strong>Lead Identification:</strong> To identify incoming and
            outgoing calls from numbers already stored in your AcoLead CRM and
            display relevant lead information on-screen during the call.
          </li>
          <li>
            <strong>Post-Call Actions:</strong> To trigger a prompt
            immediately after a call ends so you can record the call outcome,
            add notes, update lead status, or schedule a follow-up task.
          </li>
          <li>
            <strong>Phone State Handling:</strong> READ_PHONE_STATE is used to
            detect when a call is ringing, active, or has ended, in order to
            show or hide the AcoLead call overlay and post-call prompt at the
            correct time.
          </li>
        </ul>

        <p>
          <strong>How we handle call and phone data:</strong>
        </p>
        <ul>
          <li>
            <strong>Local Processing:</strong> Call log and phone state data are
            processed locally on your device to match phone numbers against your
            existing AcoLead lead database.
          </li>
          <li>
            <strong>Secure Syncing:</strong> Only call details related to phone
            numbers that you manage as leads or contacts in AcoLead are synced
            to our secure servers to update your CRM records. We do{" "}
            <strong>not</strong> upload your entire call history.
          </li>
          <li>
            <strong>No Third-Party Selling:</strong> We do{" "}
            <strong>not</strong> sell, trade, or transfer your call log data to
            any third parties. This data is used solely for your business
            management purposes within the AcoLead platform.
          </li>
        </ul>

        <h3>B. Contacts Data Usage (READ_CONTACTS)</h3>
        <p>
          AcoLead requests access to your device&apos;s contacts. This access is
          used only to improve your experience in managing and identifying
          leads.
        </p>

        <p>
          <strong>Why we need this permission:</strong>
        </p>
        <ul>
          <li>
            <strong>Caller Identification:</strong> To display the name of the
            caller (from your device contacts) in the AcoLead call overlay when
            you receive or make a call, helping you immediately recognize who is
            calling.
          </li>
          <li>
            <strong>Lead Enrichment:</strong> When a call is logged as a new
            lead, we use your contacts to automatically populate the lead&apos;s
            name in AcoLead, reducing manual data entry.
          </li>
        </ul>

        <p>
          <strong>How we handle contacts data:</strong>
        </p>
        <ul>
          <li>
            <strong>Local Access:</strong> Your contacts are accessed locally on
            your device to match phone numbers with names.
          </li>
          <li>
            <strong>Selective Sync:</strong> We do{" "}
            <strong>not</strong> upload your entire address book to our servers.
            Only the name and number associated with a specific call or lead
            that you choose to log into the CRM is synced to your AcoLead
            account.
          </li>
        </ul>

        <h3>C. Data Retention and Deletion (Google Play User Data Policy)</h3>
        <p>
          We retain your personal and business data, including any call log data
          and contact details that have been synced to your AcoLead CRM, only
          for as long as your account is active and as necessary to provide our
          services or comply with legal obligations.
        </p>

        <p>
          <strong>Your deletion options:</strong>
        </p>
        <ul>
          <li>
            You can delete specific leads, call records linked to those leads,
            and other business data directly from within the AcoLead application
            or web interface.
          </li>
          <li>
            You can delete your entire account and all associated synced data
            (including call logs and contacts stored in AcoLead) by using the{" "}
            <strong>&quot;Delete Account&quot;</strong> option inside the app or
            by contacting us at{" "}
            <a href="mailto:info@coalitionify.com">info@coalitionify.com</a>.
          </li>
          <li>
            Once your request is verified, all personal data associated with
            your account that we store (including synced call logs and relevant
            contact information) will be permanently removed from our servers
            within <strong>7 business days</strong>, except where we are legally
            required to retain certain records (e.g., billing or tax
            information).
          </li>
        </ul>

        <h3>Google API Services Disclosure</h3>
        <p>
          Coalitionify’s use of information received from Google APIs will
          adhere to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noreferrer"
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

export default PrivacyAcolead;
