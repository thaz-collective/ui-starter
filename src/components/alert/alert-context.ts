import { createContext, use } from 'react';

export type AlertVariant = 'default' | 'success' | 'warning' | 'danger';

export const AlertVariantContext = createContext<AlertVariant | null>(null);

export function useAlertVariant() {
  const context = use(AlertVariantContext);
  if (context === null) {
    throw new Error('useAlertVariant must be used within an Alert');
  }

  return context;
}
