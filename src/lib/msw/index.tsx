'use client';

import { useState, useRef, useEffect } from 'react';

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [isMocking, setIsMocking] = useState(false);
  const isWorkerStarted = useRef(false);

  useEffect(() => {
    async function enableApiMocking() {
      if (typeof window !== 'undefined' && !isWorkerStarted.current) {
        isWorkerStarted.current = true;
        const { worker } = await import('../../mocks/browser');
        await worker.start({ onUnhandledRequest: 'bypass' });
        setIsMocking(true);
      }
    }

    enableApiMocking();
  }, []);

  if (!isMocking) {
    return null;
  }

  return <>{children}</>;
}

export default MSWProvider;
