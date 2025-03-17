'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, XCircle } from 'lucide-react';

const AlertContext = createContext<
  (message: string, type: 'success' | 'error') => void
>(() => {});

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);

  const triggerAlert = (message: string, type: 'success' | 'error') => {
    setAlertMessage(message);
    setAlertType(type);

    setTimeout(() => {
      setAlertMessage(null);
      setAlertType(null);
    }, 5000);
  };

  return (
    <AlertContext.Provider value={triggerAlert}>
      {children}

      {/* Global Alert UI */}
      {alertMessage && (
        <div className="fixed bottom-5 right-5 w-80 z-[9999] shadow-lg">
          <Alert
            variant={alertType === 'success' ? 'default' : 'destructive'}
            className={`border ${
              alertType === 'success'
                ? 'bg-green-100 border-primary-foreground text-green-800'
                : 'bg-red-100 border-primary-foreground text-red-800'
            } shadow-xl`}
          >
            {alertType === 'success' ? (
              <CheckCircle className="h-5 w-5 text-green-600" />
            ) : (
              <XCircle className="h-5 w-5 text-red-600" />
            )}
            <AlertTitle>
              {alertType === 'success' ? 'Message Sent!' : 'Error'}
            </AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        </div>
      )}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  return useContext(AlertContext);
}
