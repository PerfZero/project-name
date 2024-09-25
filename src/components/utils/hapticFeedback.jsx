// src/utils/hapticFeedback.js
import { initHapticFeedback } from '@telegram-apps/sdk';

let hapticFeedback = null;

export const initializeHapticFeedback = () => {
  if (!hapticFeedback) {
    hapticFeedback = initHapticFeedback();
  }
  return hapticFeedback;
};

export const triggerImpactOccurred = (style = 'light') => {
  hapticFeedback?.impactOccurred(style);
};

export const triggerNotificationOccurred = (type = 'success') => {
  hapticFeedback?.notificationOccurred(type);
};

export const triggerSelectionChanged = () => {
  hapticFeedback?.selectionChanged();
};
