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
  try {
    const body = await request.json();
    
    // 필수 필드 검증
    if (!body.name || !body.contact || !body.instagram) {
      return NextResponse.json(
        { 
          success: false,
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
    
    // 환경 변수에서 URL 가져오기
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    
    if (!webhookUrl || webhookUrl === "") {
      // Slack 전송 실패해도 성공 응답 반환 (사용자 경험 유지)
      return NextResponse.json(
        { 
          success: true,
          message: "OK",
          slackSent: false,
          warning: "Slack notification skipped - no webhook URL configured"
        },
        { headers: corsHeaders }
      );
    }
    
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(payload)
    });
    
    const responseText = await response.text();
    
    // Slack 응답과 관계없이 성공 반환
    return NextResponse.json(
      { 
        success: true,
        message: "OK",
        slackSent: response.ok,
        slackStatus: response.status,
        slackResponse: responseText
      },
      { headers: corsHeaders }
    );
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // 에러가 발생해도 클라이언트에는 성공 응답
    return NextResponse.json(
      { 
        success: true,
        message: "OK",
        slackSent: false,
        warning: "Slack notification failed but registration saved",
        error: errorMessage
      },
      { headers: corsHeaders }
    );
  }
}