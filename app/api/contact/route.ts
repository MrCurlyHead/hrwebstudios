import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { siteSettings } from '@/site-settings'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, budget, projectType, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Format budget and project type for display
    const budgetLabels: Record<string, string> = {
      'under-3k': 'Under $3,000',
      '3k-5k': '$3,000 - $5,000',
      '5k-10k': '$5,000 - $10,000',
      '10k-plus': '$10,000+',
    }

    const projectTypeLabels: Record<string, string> = {
      'new-site': 'New Website',
      'redesign': 'Website Redesign',
      'ecommerce': 'E-commerce',
      'maintenance': 'Maintenance/Support',
      'other': 'Other',
    }

    const budgetDisplay = budget ? budgetLabels[budget] || budget : 'Not specified'
    const projectTypeDisplay = projectType ? projectTypeLabels[projectType] || projectType : 'Not specified'

    // Create email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Budget Range:</strong> ${budgetDisplay}</p>
      <p><strong>Project Type:</strong> ${projectTypeDisplay}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `

    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}
Budget Range: ${budgetDisplay}
Project Type: ${projectTypeDisplay}

Message:
${message}
    `.trim()

    // Send email to your business email
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Contact Form <noreply@hrwebstudio.co>',
      to: siteSettings.contact.email,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      text: emailText,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

