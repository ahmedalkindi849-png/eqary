'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface AccessRequestModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AccessRequestModal({ isOpen, onClose }: AccessRequestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      console.log('[v0] Submitting form with data:', { name: formData.name, email: formData.email, phone: formData.phone })
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('[v0] Response status:', response.status)
      const data = await response.json()
      console.log('[v0] Response data:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit request')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '' })
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
        setSubmitted(false)
      }, 2000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit. Please try again.'
      setError(errorMessage)
      console.error('[v0] Submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-background rounded-lg max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-2xl font-semibold mb-2">Join the Waitlist</h2>
        <p className="text-muted-foreground mb-6">
          Be among the first to experience zero-footprint property closings.
        </p>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-green-600 text-4xl mb-4">✓</div>
            <p className="font-semibold mb-2">Thank you!</p>
            <p className="text-sm text-muted-foreground">
              We&apos;ve received your request and will contact you at {formData.email} soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+971 50 123 4567"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {loading ? 'Sending...' : 'Join Waitlist'}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
