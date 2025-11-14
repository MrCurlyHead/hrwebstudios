'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    projectType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          budget: '',
          projectType: '',
          message: '',
        })
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3 className="form-title">Send us a message</h3>
      
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="budget">Budget Range</label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="">Select budget range</option>
          <option value="under-3k">Under $3,000</option>
          <option value="3k-5k">$3,000 - $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-plus">$10,000+</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="projectType">Project Type</label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
        >
          <option value="">Select project type</option>
          <option value="new-site">New Website</option>
          <option value="redesign">Website Redesign</option>
          <option value="ecommerce">E-commerce</option>
          <option value="maintenance">Maintenance/Support</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {submitStatus === 'success' && (
        <div className="form-success">
          <p>Thank you! We've received your message and will get back to you within 24 hours.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="form-error">
          <p>Something went wrong. Please try again or contact us directly.</p>
        </div>
      )}

      <button
        type="submit"
        className="form-submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <style jsx>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .form-title {
          font-size: 1.5rem;
          margin-bottom: var(--space-md);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .form-group label {
          color: #E7ECF3;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: var(--space-md);
          background-color: #151A21;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 6px;
          color: #E7ECF3;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.2s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #5AA9E6;
          box-shadow: 0 0 0 3px rgba(90, 169, 230, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-success {
          padding: var(--space-md);
          background-color: rgba(90, 169, 230, 0.1);
          border: 1px solid #5AA9E6;
          border-radius: 6px;
        }

        .form-success p {
          color: #5AA9E6;
          margin: 0;
          max-width: none;
        }

        .form-error {
          padding: var(--space-md);
          background-color: rgba(239, 68, 68, 0.1);
          border: 1px solid #ef4444;
          border-radius: 6px;
        }

        .form-error p {
          color: #ef4444;
          margin: 0;
          max-width: none;
        }

        .form-submit {
          padding: var(--space-md) var(--space-xl);
          background-color: #5AA9E6;
          color: #0B0D10;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: var(--space-md);
        }

        .form-submit:hover:not(:disabled) {
          background-color: #4a99d6;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(90, 169, 230, 0.3);
        }

        .form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-submit:focus-visible {
          outline: 2px solid #5AA9E6;
          outline-offset: 2px;
        }
      `}</style>
    </form>
  )
}

