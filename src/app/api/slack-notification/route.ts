import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  console.log('=== SLACK API ROUTE START ===');
  
  try {
    // 1. 요청 데이터 파싱
    console.log('1. Parsing request body...');
    const body = await request.json();
    console.log('   Received data:', JSON.stringify(body, null, 2));
    
    // 2. Slack 메시지 생성
    console.log('2. Creating Slack payload...');
    const payload = {
      text: `📩 얼리버드 예약:
*이름:* ${body.name}
*연락처:* ${body.contact}
*인스타:* ${body.instagram}`
    };
    console.log('   Payload:', JSON.stringify(payload, null, 2));
    
    // 3. Webhook URL 확인
    const webhookUrl = "https://hooks.slack.com/services/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";
    console.log('3. Webhook URL:', webhookUrl);
    
    // 4. Slack으로 전송
    console.log('4. Sending to Slack...');
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(payload)
    });
    
    // 5. 응답 확인
    console.log('5. Slack Response:');
    console.log('   Status:', response.status);
    console.log('   Status Text:', response.statusText);
    console.log('   Headers:', Object.fromEntries(response.headers.entries()));
    
    const responseText = await response.text();
    console.log('   Response Body:', responseText);
    
    if (response.ok) {
      console.log('✅ SUCCESS: Slack notification sent successfully');
    } else {
      console.log('❌ FAILED: Slack returned error');
    }
    
    console.log('=== SLACK API ROUTE END ===');
    
    // 성공 여부와 관계없이 OK 반환
    return NextResponse.json({ 
      message: "OK",
      slackStatus: response.status,
      slackResponse: responseText
    });
    
  } catch (error: any) {
    console.error('❌ ERROR in Slack API Route:');
    console.error('   Error Type:', error.constructor.name);
    console.error('   Error Message:', error.message);
    console.error('   Error Stack:', error.stack);
    console.log('=== SLACK API ROUTE END (WITH ERROR) ===');
    
    return NextResponse.json({ 
      message: "OK",
      error: error.message 
    });
  }
}