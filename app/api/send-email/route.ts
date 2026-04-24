import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

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

    // Initialize Resend client on request
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email to your inbox (ahmedalkindi849@gmail.com)
    // Note: On Resend's free tier, we can only send to the verified email.
    // The user's contact email is included in the body so you can manually reply to them.
    const result = await resend.emails.send({
      from: 'EQARY <onboarding@resend.dev>',
      to: 'ahmedalkindi849@gmail.com',
      subject: `New App Access Request from ${name}`,
      html: `
        <h2>New App Access Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p>This person is requesting early access to the EQARY app.</p>
        <hr />
        <p><small>To respond, copy their email (${email}) and send a new email from your personal account.</small></p>
      `,
    })

    if (result.error) {
      console.error('[v0] Email sending error:', result.error)
      return NextResponse.json(
        { 
          error: 'Failed to send email',
          details: result.error.message || JSON.stringify(result.error)
        },
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

