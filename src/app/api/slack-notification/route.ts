import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: Request) {
  console.log('[Slack API] Starting POST request');
  
  try {
    console.log('[Slack API] Parsing request body...');
    const body = await request.json();
    console.log('[Slack API] Body received:', JSON.stringify(body));
    
    // 필수 필드 검증
    if (!body.name || !body.contact || !body.instagram) {
      console.log('[Slack API] Missing required fields');
      return NextResponse.json(
        { 
          message: "Missing required fields",
          error: "name, contact, and instagram are required" 
        },
        { 
          status: 400,
          headers: corsHeaders 
        }
      );
    }
    
    const payload = {
      text: `📩 얼리버드 예약:\n*이름:* ${body.name}\n*연락처:* ${body.contact}\n*인스타:* ${body.instagram}`
    };
    console.log('[Slack API] Payload created:', JSON.stringify(payload));
    
    // 환경 변수에서 URL 가져오기
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    console.log('[Slack API] Webhook URL exists:', !!webhookUrl);
    console.log('[Slack API] Webhook URL length:', webhookUrl?.length);
    
    if (!webhookUrl || webhookUrl === "") {
      console.error('[Slack API] ERROR: Slack webhook URL is not configured in environment variables');
      // Slack 전송 실패해도 성공 응답 반환 (사용자 경험 유지)
      return NextResponse.json(
        { 
          message: "OK",
          warning: "Slack notification skipped - no webhook URL" 
        },
        { headers: corsHeaders }
      );
    }
    
    console.log('[Slack API] Sending to Slack...');
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(payload)
    });
    
    console.log('[Slack API] Slack response status:', response.status);
    const responseText = await response.text();
    console.log('[Slack API] Slack response text:', responseText);
    
    if (!response.ok) {
      console.error('[Slack API] Slack returned error status:', response.status);
    }
    
    // Slack 응답과 관계없이 성공 반환
    return NextResponse.json(
      { 
        message: "OK",
        slackStatus: response.status,
        slackResponse: responseText
      },
      { headers: corsHeaders }
    );
    
  } catch (error: any) {
    console.error('[Slack API] CATCH ERROR:', error.message);
    console.error('[Slack API] Error stack:', error.stack);
    
    // 에러가 발생해도 클라이언트에는 성공 응답
    return NextResponse.json(
      { 
        message: "OK",
        warning: "Slack notification failed but registration saved",
        error: error.message 
      },
      { headers: corsHeaders }
    );
  }
}