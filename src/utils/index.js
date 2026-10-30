export const checkIsIOS = (userAgent) => {
    return (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
        || (/Macintosh/.test(userAgent)
            && navigator.maxTouchPoints
            && navigator.maxTouchPoints > 1);
};

export const checkIsAndroid = () => /android/i.test(navigator.userAgent);

export const APP_URLS = {
    // coalitionifyWebsite: "https://www.coalitionify.com",
    coalitionifyWebsite: "https://coalitionify.com/",
    coalitionifyLinkedin: "https://www.linkedin.com/company/coalitionify-innovate",
    coalitionifyFacebook: "https://www.facebook.com/acolead",
    coalitionifyInstagram: "https://www.instagram.com/acolead/",
    coalitionifyWhatsApp: "https://api.whatsapp.com/send?phone=9270719204&text=I%20want%20to%20know%20more%20about%20your%20CRM%20?",
};
