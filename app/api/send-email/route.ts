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

    // Email content
    const emailContent = `
      <h2>New App Access Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p>This person is requesting early access to the EQARY app.</p>
    `

    // Send using Resend (you can replace with your email service)
    // For now, we'll use a simple approach with Nodemailer or similar
    // This is a placeholder that logs the request
    console.log('[v0] Email request received:', { name, email, phone })

    // TODO: Implement actual email sending with your preferred service
    // Options: Resend, SendGrid, Mailgun, AWS SES, or Nodemailer

    return NextResponse.json(
      { 
        success: true, 
        message: 'Request received. We will contact you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Email error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
