import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { apiRequest } from '@/lib/queryClient';

export function usePageLogger(page: string, details: string) {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      apiRequest('POST', '/api/log-activity', { page, details })
        .catch((error) => {
          console.error('Failed to log page visit:', error);
        });
    }
  }, [isAuthenticated, page, details]);
}
