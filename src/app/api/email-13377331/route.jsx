import { sendEmail } from '@/lib/mail'
import { NextResponse } from 'next/server'

const headers = new Headers()
headers.set('Access-Control-Allow-Origin', '*') // Replace '*' with your origin
headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
headers.set('Access-Control-Allow-Credentials', 'true');

export async function OPTIONS(req) {
  return new Response(null, {
    status: 204, // No content
    headers,
  })
}

export async function POST(req) {
  try {
    const data = JSON.stringify(await req.json())
    const emailConfig = {
      from: 'hello@pigu.ch',
      to: 'hello@solid-bit.com',
      subject: `Email API endpoint called`,
      text: `You received a new message:\n\nName: ${data}`,
      html: `
                  <h1>New Contact Form Submission</h1>
                  <p>${data}</p>
              `,
    }

    // Send the email
    await sendEmail(emailConfig)

    return NextResponse.json(
      { message: 'Success' },
      {
        headers,
      },
    )
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { message: 'Internal server error', status: 500 },
      {
        headers,
      },
    )
  }
}
