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
  interface DebugInfo {
    steps: string[];
    timestamp: string;
    bodyReceived?: { name: string; contact: string; instagram: string };
    webhookUrlExists?: boolean;
    webhookUrlLength?: number;
    slackResponseStatus?: number;
    slackResponseStatusText?: string;
    slackResponseBody?: string;
    error?: string;
    errorStack?: string;
  }
  
  const debugInfo: DebugInfo = {
    steps: [],
    timestamp: new Date().toISOString()
  };
  
  try {
    debugInfo.steps.push('1. Starting POST request');
    
    const body = await request.json();
    debugInfo.steps.push('2. Body parsed successfully');
    debugInfo.bodyReceived = { name: body.name, contact: body.contact, instagram: body.instagram };
    
    // 필수 필드 검증
    if (!body.name || !body.contact || !body.instagram) {
      debugInfo.steps.push('3. ERROR: Missing required fields');
      return NextResponse.json(
        { 
          message: "Missing required fields",
          error: "name, contact, and instagram are required",
          debug: debugInfo
        },
        { 
          status: 400,
          headers: corsHeaders 
        }
      );
    }
    
    debugInfo.steps.push('3. All required fields present');
    
    const payload = {
      text: `📩 얼리버드 예약:\n*이름:* ${body.name}\n*연락처:* ${body.contact}\n*인스타:* ${body.instagram}`
    };
    debugInfo.steps.push('4. Slack payload created');
    
    // 환경 변수에서 URL 가져오기
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    debugInfo.webhookUrlExists = !!webhookUrl;
    debugInfo.webhookUrlLength = webhookUrl?.length || 0;
    debugInfo.steps.push(`5. Webhook URL check: exists=${!!webhookUrl}, length=${webhookUrl?.length || 0}`);
    
    if (!webhookUrl || webhookUrl === "") {
      debugInfo.steps.push('6. ERROR: No webhook URL in environment');
      return NextResponse.json(
        { 
          message: "OK",
          warning: "Slack notification skipped - no webhook URL",
          debug: debugInfo
        },
        { headers: corsHeaders }
      );
    }
    
    debugInfo.steps.push('6. Sending to Slack...');
    
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(payload)
    });
    
    debugInfo.slackResponseStatus = response.status;
    debugInfo.slackResponseStatusText = response.statusText;
    debugInfo.steps.push(`7. Slack responded: ${response.status} ${response.statusText}`);
    
    const responseText = await response.text();
    debugInfo.slackResponseBody = responseText;
    debugInfo.steps.push('8. Slack response body received');
    
    if (!response.ok) {
      debugInfo.steps.push(`9. WARNING: Slack returned error status ${response.status}`);
    } else {
      debugInfo.steps.push('9. SUCCESS: Slack notification sent');
    }
    
    // Slack 응답과 관계없이 성공 반환
    return NextResponse.json(
      { 
        message: "OK",
        slackStatus: response.status,
        slackResponse: responseText,
        debug: debugInfo
      },
      { headers: corsHeaders }
    );
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : '';
    
    debugInfo.steps.push(`ERROR CAUGHT: ${errorMessage}`);
    debugInfo.error = errorMessage;
    debugInfo.errorStack = errorStack;
    
    // 에러가 발생해도 클라이언트에는 성공 응답
    return NextResponse.json(
      { 
        message: "OK",
        warning: "Slack notification failed but registration saved",
        error: errorMessage,
        debug: debugInfo
      },
      { headers: corsHeaders }
    );
  }
}