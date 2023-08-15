import { Vibration } from 'react-native';

const hapticFeedbackDuration = 0;

export const useHapticFeedback = () => {
  const triggerHapticFeedback = () => {
    Vibration.vibrate(hapticFeedbackDuration);
  };

  return { triggerHapticFeedback };
};