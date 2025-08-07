'use client';

// GTM dataLayer push 함수
declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

// 얼리버드 신청 이벤트 추적
export const trackEarlybirdSubmit = (data: {
  name: string;
  phone: string;
  instagram: string;
}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'earlybird_registration',
      earlybird_data: {
        name: data.name,
        instagram: data.instagram,
        timestamp: new Date().toISOString()
      }
    });
  }
};

// CTA 버튼 클릭 추적
export const trackCTAClick = (buttonName: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'cta_click',
      cta_data: {
        button_name: buttonName,
        timestamp: new Date().toISOString()
      }
    });
  }
};

// 페이지뷰 추적 (필요시 사용)
export const trackPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_data: {
        page_name: pageName,
        timestamp: new Date().toISOString()
      }
    });
  }
};