/**
 * OSLO MEET - INTERNATIONALIZATION SYSTEM
 * Supports: EN, NO, PT, ES
 */

const translations = {
    en: {},
    no: {},
    pt: {},
    es: {}
};

function changeLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang]?.[key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang]?.[key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Auto-initialize language on page load
window.addEventListener('load', () => {
    const saved = localStorage.getItem('preferredLanguage') || 'en';
    const selector = document.getElementById('languageSelect');
    if (selector) {
        selector.value = saved;
    }
    changeLanguage(saved);
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, changeLanguage };
}
