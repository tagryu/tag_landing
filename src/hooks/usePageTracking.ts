'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

// 방문자 ID 생성 또는 가져오기
function getVisitorId(): string {
  let visitorId = localStorage.getItem('visitorId');
  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem('visitorId', visitorId);
  }
  return visitorId;
}

export function usePageTracking(pageName: string = 'landing') {
  useEffect(() => {
    const trackPageView = async () => {
      try {
        const visitorId = getVisitorId();
        
        // 페이지 조회 기록
        const { error } = await supabase
          .from('page_views')
          .insert([
            {
              page_name: pageName,
              visitor_id: visitorId,
              referrer: document.referrer || null,
              user_agent: navigator.userAgent
            }
          ]);

        if (error) {
          console.error('Error tracking page view:', error);
        }
      } catch (error) {
        console.error('Page tracking error:', error);
      }
    };

    trackPageView();
  }, [pageName]);
}