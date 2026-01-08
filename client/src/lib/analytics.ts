/**
 * Analytics Event Tracking Helper
 * Tracks custom events using Umami Analytics
 */

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName, eventData);
  }
};

// Predefined event trackers
export const analytics = {
  // CTA Button Clicks
  trackCTAClick: (location: string) => {
    trackEvent('cta_click', { location });
  },

  // Contact Form Events
  trackFormOpen: () => {
    trackEvent('contact_form_open');
  },

  trackFormSubmit: (success: boolean) => {
    trackEvent('contact_form_submit', { success });
  },

  trackFormError: (error: string) => {
    trackEvent('contact_form_error', { error });
  },

  // Navigation Events
  trackNavigation: (destination: string) => {
    trackEvent('navigation_click', { destination });
  },

  // Section Scroll Events
  trackSectionView: (section: string) => {
    trackEvent('section_view', { section });
  },

  // External Link Clicks
  trackExternalLink: (url: string) => {
    trackEvent('external_link_click', { url });
  },
};
