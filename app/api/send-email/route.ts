import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone } = await request.json()

    // Validate inputs
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('[v0] RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send email to your inbox (alkindymaryam@gmail.com)
    const result = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: 'alkindymaryam@gmail.com',
      replyTo: email,
      subject: `New App Access Request from ${name}`,
      html: `
        <h2>New App Access Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p>This person is requesting early access to the EQARY app.</p>
        <hr />
        <p><small>You can reply directly to this email to contact them at: ${email}</small></p>
      `,
    })

    if (result.error) {
      console.error('[v0] Email sending error:', result.error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('[v0] Email sent successfully:', result.data)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Request received. We will contact you soon.',
        id: result.data?.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Email API error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

