import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const payload = {
      text: `📩 얼리버드 예약:
*이름:* ${body.name}
*연락처:* ${body.contact}
*인스타:* ${body.instagram}`
    };
    
    const webhookUrl = process.env.SLACK_WEBHOOK_URL || "https://hooks.slack.com/services/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";
    
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(payload)
    });
    
    const responseText = await response.text();
    
    return NextResponse.json({ 
      message: "OK",
      slackStatus: response.status,
      slackResponse: responseText
    });
    
  } catch (error: any) {
    console.error('Slack API Error:', error.message);
    
    return NextResponse.json({ 
      message: "OK",
      error: error.message 
    });
  }
}