export const checkIsIOS = (userAgent) => {
    return (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
        || (/Macintosh/.test(userAgent)
            && navigator.maxTouchPoints
            && navigator.maxTouchPoints > 1);
};

export const checkIsAndroid = () => /android/i.test(navigator.userAgent);

// Detect if running in standalone mode (PWA)
const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;

// If standalone, you might want different behavior
const isPWA = isStandalone;

export const APP_URLS = {
    // coalitionifyWebsite: "https://www.coalitionify.com",
    coalitionifyWebsite: "https://www.linkedin.com/company/coalitionify-innovate",
    coalitionifyLinkedin: "https://www.linkedin.com/company/coalitionify-innovate",
    coalitionifyFacebook: "https://www.facebook.com/acolead",
    coalitionifyInstagram: "https://www.instagram.com/acolead/",
    coalitionifyWhatsApp: "https://api.whatsapp.com/send?phone=919158661188&text=I%20want%20to%20know%20more%20about%20your%20CRM%20?",
};