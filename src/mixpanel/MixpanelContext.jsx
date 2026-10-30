import React, { createContext, useContext } from 'react';
import { pushAnalyticsEvent, pushTrackingEvent } from '../utils/tracking';

const MixpanelContext = createContext(null);

export const MixpanelProvider = ({ children }) => {
  const trackEvent = (event, properties = {}) => {
    pushAnalyticsEvent(event, properties);
  };

  const identifyUser = (userId) => {
    pushAnalyticsEvent('identify', { user_id: userId });
  };

  const setUserProfile = (properties) => {
    pushAnalyticsEvent('profile', properties);
  };

  const logoutUser = () => {
    pushTrackingEvent('mixpanel_reset');
  };

  const contextValue = { trackEvent, identifyUser, setUserProfile, logoutUser };

  return (
    <MixpanelContext.Provider value={contextValue}>
      {children}
    </MixpanelContext.Provider>
  );
};

export const useMixpanel = () => {
  const context = useContext(MixpanelContext);
  if (!context) {
    throw new Error('useMixpanel must be used within a MixpanelProvider');
  }
  return context;
};
