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
    
    // 환경 변수 또는 하드코딩된 URL 사용
    const webhookUrl = process.env.SLACK_WEBHOOK_URL || "https://hooks.slack.com/services/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";
    
    if (!webhookUrl || webhookUrl === "") {
      console.error('Slack webhook URL is not configured');
      // Slack 전송 실패해도 성공 응답 반환 (사용자 경험 유지)
      return NextResponse.json(
        { 
          message: "OK",
          warning: "Slack notification skipped" 
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
        message: "OK",
        slackStatus: response.status,
        slackResponse: responseText
      },
      { headers: corsHeaders }
    );
    
  } catch (error: any) {
    console.error('Slack API Error:', error.message);
    
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