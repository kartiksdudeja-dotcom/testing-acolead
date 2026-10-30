import React, { useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Routingflexibility from '../new components/feature components/Routingflexibility';

import DocumentFlexibility from '../new components/feature components/DocumentFlexibility';
import SdkIntegration from '../new components/feature components/SdkIntegration';
import DataCollectionNew from '../new components/feature components/DataCollectionNew';
import Refund from '../new components/footer pages/Refund';
import RealEstate from '../new components/feature components/RealEstate';
import SupplyChain from '../new components/feature components/SupplyChain';
import BackgroundVerification from '../new components/feature components/BackgroundVerification';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styled component/AppRoutesNew.css';
import MultiuserWorkflow from '../new components/feature components/MultiuserWorkflow';
import MainLayout from '../parent components/MainLayout';
import LayoutNew from '../acolead new landing page/LayoutNew';
// import ArticleDetail from '../acolead new landing page/ArticleDetail';
import PrivacyAcolead from '../acolead new landing page/footer pages/PrivacyAcolead';
import TermsofUse from '../acolead new landing page/footer pages/TermsofUse';
import PaymentResponseDialog from '../new components/payment/index';
import PayHomePage from '../pay/PayHomePage';
import CheckoutPage from '../pay/CheckoutPage';
import PaymentResultPage from '../pay/PaymentResultPage';
import RenewalPage from '../pay/RenewalPage';
import Signup from '../new components/acolead-modules/SignUp';
// import WhatsAppPage from '../new components/acolead-modules/pages/WhatsAppPage';
// import InstagramPage from '../new components/acolead-modules/pages/InstagramPage';
// import AICallingPage from '../new components/acolead-modules/pages/AICallingPage';
import MapPage from '../new components/map';
import ComingSoonPage from '../acolead new landing page/ComingSoonPage';
import FeaturesOverview from '../acolead new landing page/FeaturesOverview';
import PricingPage from '../acolead new landing page/PricingPage';
import CustomersPage from '../acolead new landing page/CustomersPage';
import AboutPage from '../acolead new landing page/AboutPage';
import DemoPage from '../acolead new landing page/DemoPage';
import SwitchToAcoLeadPage from '../acolead new landing page/SwitchToAcoLeadPage';
import ProductDetailPage from '../acolead new landing page/ProductDetailPage';
import SiteFloatingActions from '../acolead new landing page/SiteFloatingActions';
import SiteLayout from '../acolead new landing page/SiteLayout';
import { pushTrackingEvent } from '../utils/tracking';

const AppRoutesNew = () => {
    const location = useLocation();
    const topRef = useRef(null);
    const isPayRoute = location.pathname.startsWith('/pay');
    
    

useEffect(() => {
  const pathname = location.pathname.replace(/\/+$/, "") || "/";
  const seo = {
    "/": ["AcoLead | Real Estate CRM for Builders and Sales Teams", "Capture enquiries, manage follow-ups and track site visits, bookings and sales in one real estate CRM."],
    "/features": ["AcoLead Features | Real Estate CRM Modules", "Explore AcoLead CRM features for lead capture, sales intelligence, property matching, communication, teams and reporting."],
    "/pricing": ["AcoLead Pricing | Plans for Real Estate Sales Teams", "Compare AcoLead plans and options for builders, mandate companies, brokers and channel partner agencies."],
    "/customers": ["AcoLead Customers | Real Estate Teams", "See how builders and real estate sales teams use AcoLead to manage enquiries, follow-ups and bookings."],
    "/about": ["About AcoLead | Built for Real Estate Sales", "Learn about AcoLead and Coalitionify Innovate, and why we build CRM software for real estate sales teams."],
    "/demo": ["Book an AcoLead Demo | See It on Your Leads", "Request an AcoLead demo for your real estate team and see how it handles your leads, follow-ups and bookings."],
    "/switch-to-acolead": ["Switch to AcoLead | CRM Data Migration", "Move your real estate sales workflow to AcoLead with a guided CRM migration and a clear view of what changes."],
    "/features/lead-capture": ["Lead Capture and Sources | AcoLead", "Bring portal, Meta, Google, website and walk-in enquiries into one AcoLead CRM with source tracking and duplicate checks."],
    "/features/lead-routing": ["Smart Lead Assignment and Response Timer | AcoLead", "Route real estate enquiries by project, source or area, and follow up with assignment and response timers."],
    "/features/pipeline": ["Real Estate CRM Boards and Pipeline | AcoLead", "Set up sales stages and separate boards for buyers, sellers, rentals, tasks and invoices."],
    "/features/sales-intelligence": ["Real Estate Sales Intelligence | AcoLead", "Prioritise high-intent leads and spot ignored, cooling and at-risk buyers with AcoLead Sales Intelligence."],
    "/features/site-visits": ["Site Visit Scheduling and Bookings | AcoLead", "Schedule and track real estate site visits, follow up on overdue visits and record bookings against units."],
    "/features/inventory": ["Real Estate Inventory and Property Matching | AcoLead", "Manage towers, units, pricing and availability, then match property inventory to buyer requirements."],
    "/features/whatsapp": ["WhatsApp CRM for Real Estate | AcoLead", "Keep WhatsApp conversations, approved templates and project brochures connected to your AcoLead leads."],
    "/features/calling": ["CRM Calling, Caller ID and Number Masking | AcoLead", "Identify lead calls, protect phone numbers and keep supported call activity connected to the CRM timeline."],
    "/features/team-field": ["Real Estate Team, Attendance and Field Tracking | AcoLead", "Manage sales roles, attendance, field tasks and team performance in AcoLead."],
    "/features/mobile-app": ["AcoLead Mobile CRM App for Android and iOS", "Give your real estate sales team mobile access to leads, follow-ups, site visits, calls and My Day."],
    "/features/marketing-roi": ["Real Estate Marketing ROI Tracking | AcoLead", "Connect marketing spend to leads, completed site visits and bookings to compare campaign performance."],
    "/features/website": ["Maintenance-Free Real Estate Website | AcoLead", "Publish project inventory online and send website enquiries directly into AcoLead CRM."],
    "/features/channel-partners": ["Channel Partner Management for Builders | AcoLead", "Manage channel partner relationships, project updates, events and partner activity in AcoLead."],
    "/features/partner-leads": ["Channel Partner Lead Integration | AcoLead", "Receive partner enquiries through login or webhook, check duplicates and let partners track lead progress."],
    "/features/invoice-board": ["Brokerage Invoice Board | AcoLead", "Track brokerage invoices from booking through follow-up and payment in AcoLead."],
    "/features/post-sales": ["Post-Sales Payment Management for Builders | AcoLead", "Track payment plans, instalments, home-loan disbursements, dues, demand letters and receipts after booking."],
    "/features/resale": ["Real Estate Resale Matching and CRM Flow | AcoLead", "Connect seller listings with buyer requirements and manage resale deals from listing to closure."],
    "/features/reports": ["Real Estate CRM Reports and Automation | AcoLead", "Build useful sales reports and automate reminders, notifications and recurring tasks."],
    "/ai/sales-agent": ["AI Sales Agent for Real Estate | AcoLead", "Respond to buyer enquiries on WhatsApp, Instagram and calls, then hand ready buyers to your sales team."],
    "/ai/nova": ["AcoLead Nova | Talk to Your Real Estate CRM", "Use natural language by text or voice to ask about leads, capture call updates and prepare CRM changes."],
    "/ai/connector": ["AcoLead AI Connector for Claude and ChatGPT", "Ask questions about your AcoLead CRM from Claude or ChatGPT with role-limited answers and real CRM numbers."],
    "/zero-lead-breach": ["Zero Lead Breach | Protect Builder Customer Relationships", "Keep company customer relationships visible with managed phones, company SIMs, WhatsApp and monitored CRM access."],
    "/solutions/builders": ["AcoLead CRM for Builders and Developers", "Manage project enquiries, inventory, site visits, channel partners and post-sales activity with AcoLead."],
    "/solutions/channel-partners": ["AcoLead for Channel Partner Agencies", "Organise partner enquiries, lead follow-up, project updates and brokerage workflows in AcoLead."],
    "/solutions/mandate-companies": ["AcoLead for Mandate Companies", "Manage sales and marketing mandates with project pipelines, campaign ROI and builder-ready reporting."],
    "/solutions/resale": ["AcoLead for Brokers and Resale Firms", "Manage seller listings and buyer requirements in one resale flow from match through closure."],
    "/privacy-policy": ["Privacy Policy | AcoLead", "Read how AcoLead and Coalitionify Innovate handle personal information and protect privacy."],
    "/terms-of-use": ["Terms of Use | AcoLead", "Read the terms that apply when using the AcoLead website and services."],
    "/refund-policy": ["Refund Policy | AcoLead", "Review the AcoLead refund policy and the terms that apply to payments."],
  };
  const [title, description] = seo[pathname] || ["AcoLead | Real Estate CRM", "AcoLead helps real estate sales teams manage enquiries, follow-ups, site visits and bookings."];
  document.title = title;

  const setMeta = (selector, attribute, value, key, keyValue) => {
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(key, keyValue);
      document.head.appendChild(element);
    }
    element.setAttribute(attribute, value);
  };
  setMeta('meta[name="description"]', "content", description, "name", "description");
  setMeta('meta[property="og:title"]', "content", title, "property", "og:title");
  setMeta('meta[property="og:description"]', "content", description, "property", "og:description");
  setMeta('meta[name="twitter:title"]', "content", title, "name", "twitter:title");
  setMeta('meta[name="twitter:description"]', "content", description, "name", "twitter:description");
  const imageGroup = pathname.startsWith('/ai/') ? 'ai' : pathname.startsWith('/solutions/') ? 'solutions' : pathname.startsWith('/features/') ? 'products' : pathname === '/' ? 'home' : 'company';
  const shareImage = `https://www.acolead.com/images/og-${imageGroup}.png`;
  setMeta('meta[property="og:image"]', 'content', shareImage, 'property', 'og:image');
  setMeta('meta[name="twitter:image"]', 'content', shareImage, 'name', 'twitter:image');
  setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image', 'name', 'twitter:card');

  const isNoIndex = pathname.endsWith("/thank-you") || pathname.startsWith("/pay/") || pathname === "/pay";
  let robots = document.querySelector('meta[name="robots"]');
  if (isNoIndex) {
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");
  } else if (robots) {
    robots.remove();
  }

  const isMarketingPage = pathname === "/" || pathname.startsWith("/features") || pathname.startsWith("/solutions/") || pathname.startsWith("/ai/") || ["/pricing", "/customers", "/about", "/demo", "/switch-to-acolead", "/zero-lead-breach", "/privacy-policy", "/terms-of-use", "/refund-policy"].includes(pathname);
  let canonical = document.querySelector('link[rel="canonical"]');
  if (isMarketingPage && !isNoIndex) {
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://www.acolead.com${pathname === "/" ? "/" : pathname}`);
  } else if (canonical) {
    canonical.remove();
  }

  const crumbs = pathname.split('/').filter(Boolean);
  const breadcrumbItems = [{ name: 'Home', item: 'https://www.acolead.com/' }];
  let crumbPath = '';
  crumbs.forEach((crumb, index) => {
    crumbPath += `/${crumb}`;
    breadcrumbItems.push({ name: index === crumbs.length - 1 ? title.split('|')[0].trim() : crumb.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()), item: `https://www.acolead.com${crumbPath}` });
  });
  const structuredData = [
    { '@context': 'https://schema.org', '@type': 'Organization', name: 'Coalitionify Innovate Private Limited', alternateName: 'AcoLead', url: 'https://www.acolead.com', email: 'sales@coalitionify.com', telephone: '+91 91126 14174' },
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'AcoLead', applicationCategory: 'BusinessApplication', operatingSystem: 'Web, Android, iOS', url: 'https://www.acolead.com', description },
    ...(crumbs.length ? [{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: breadcrumbItems.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.item })) }] : []),
  ];
  let jsonLd = document.getElementById('acolead-structured-data');
  if (!jsonLd) { jsonLd = document.createElement('script'); jsonLd.id = 'acolead-structured-data'; jsonLd.type = 'application/ld+json'; document.head.appendChild(jsonLd); }
  jsonLd.textContent = JSON.stringify(structuredData);
}, [location.pathname]);

useEffect(() => {
  const path = location.pathname;
  pushTrackingEvent('page_view', { page_path: path, page_title: document.title });
  if (path === '/pricing') pushTrackingEvent('pricing_view', { page_path: path });
  if (path.startsWith('/features/') || path.startsWith('/ai/') || path === '/zero-lead-breach') pushTrackingEvent('module_page_view', { page_path: path });
}, [location.pathname]);



    useEffect(() => {
        if (topRef.current) {
            topRef.current.focus();
        }
    }, [location]);

    // PhonePe checkout host pages (acolead.com/pay) — no marketing transition chrome
    if (isPayRoute) {
        return (
            <>
            <Routes location={location}>
                <Route path="/pay" element={<PayHomePage />} />
                <Route path="/pay/renewal/:token" element={<RenewalPage />} />
                <Route path="/pay/checkout/:sessionId" element={<CheckoutPage />} />
                <Route path="/pay/payment-result/:sessionId" element={<PaymentResultPage />} />
            </Routes>
            <SiteFloatingActions />
            </>
        );
    }

    return (
        <>
            <PaymentResponseDialog />
            <div ref={topRef} tabIndex="-1" style={{ position: "absolute", top: 0 }} />
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="slide-fade" timeout={600}>
                    <Routes location={location}>
                        {/* <Route path="" element={<MainLayout />} /> */}
                        {/* <Route path="" element={<LayoutNew />} /> */}
                        <Route path="/demo/thank-you" element={<LayoutNew />} />
                        <Route path="/request-a-demo/thank-you" element={<Navigate to="/demo/thank-you" replace />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/request-a-demo" element={<Navigate to="/demo" replace />} />
                        <Route path="" element={< LayoutNew />} />
                        <Route path="/features" element={<FeaturesOverview />} />
                        <Route path="/features/:slug" element={<ProductDetailPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/customers" element={<CustomersPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/switch-to-acolead" element={<SwitchToAcoLeadPage />} />
                        <Route path="/ai/:slug" element={<ProductDetailPage />} />
                        <Route path="/zero-lead-breach" element={<ProductDetailPage />} />
                        <Route path="/solutions/:slug" element={<ComingSoonPage />} />
                        {/* <Route path="/insights/:slug" element={<ArticleDetail />} /> */}
                        <Route path="/acoSign" element={<Navigate to="/" replace />} />
                        <Route path="/services" element={<Navigate to="/" replace />} />
                        <Route path="/privacy" element={<Navigate to="/" replace />} />
                        <Route path="/terms-conditions" element={<Navigate to="/" replace />} />
                        <Route path="/map" element={<MapPage />} />

                        <Route path="/privacy-policy" element={<SiteLayout><PrivacyAcolead /></SiteLayout>} />
                        <Route path="/terms-of-use" element={<SiteLayout><TermsofUse /></SiteLayout>} />

                        <Route path="/refund-policy" element={<SiteLayout><Refund /></SiteLayout>} />
                        <Route path="/retail-real-estate" element={<RealEstate />} />
                        <Route path="/manufacturing-supply-chain" element={<SupplyChain />} />
                        <Route path="/multiuser-workflow" element={<MultiuserWorkflow />} />
                        <Route path="/background-verification" element={<BackgroundVerification />} />
                        <Route path="/trust-security" element={<Navigate to="/" replace />} />
                        <Route path="/e-signature-legality" element={<Navigate to="/" replace />} />
                        <Route path="/teams-integration" element={<Navigate to="/" replace />} />
                        <Route path="/slack-integration" element={<Navigate to="/" replace />} />
                        <Route path="/salesforce-integration" element={<Navigate to="/" replace />} />
                        <Route path="/hubspot-integration" element={<Navigate to="/" replace />} />
                        <Route path="/razorpay-integration" element={<Navigate to="/" replace />} />
                        <Route path="/stripe-integration" element={<Navigate to="/" replace />} />
                        <Route path="/googleDrive-integration" element={<Navigate to="/" replace />} />
                        <Route path="/onedrive-integration" element={<Navigate to="/" replace />} />
                        <Route path="/product/signup" element={<Signup />} />
                        {/* <Route path="/modules/whatsapp" element={<WhatsAppPage />} /> */}
                        {/* <Route path="/modules/instagram" element={<InstagramPage />} /> */}
                        {/* <Route path="/modules/ai-calling" element={<AICallingPage />} /> */}
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
            <SiteFloatingActions />
        </>

    );
};

export default AppRoutesNew;
