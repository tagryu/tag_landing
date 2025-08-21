import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const slackMessage = {
      text: "🎉 새로운 얼리버드 예약이 접수되었습니다!",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🎉 새로운 얼리버드 예약"
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*이름:*\n${body.name}`
            },
            {
              type: "mrkdwn",
              text: `*연락처:*\n${body.contact}`
            },
            {
              type: "mrkdwn",
              text: `*인스타그램:*\n${body.instagram}`
            },
            {
              type: "mrkdwn",
              text: `*접수 시간:*\n${new Date().toLocaleString('ko-KR')}`
            }
          ]
        },
        {
          type: "divider"
        }
      ]
    };

    const slackResponse = await fetch('https://hooks.slack.com/services/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', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage)
    });

    if (!slackResponse.ok) {
      throw new Error('Slack 전송 실패');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Slack notification error:', error);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}