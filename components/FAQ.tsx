'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'How long does it take to build a website?',
    answer: 'We deliver your first draft within 48 hours. From there, revisions and final launch typically take 2-4 weeks depending on the complexity of your project and how quickly you can provide feedback and content.',
  },
  {
    question: 'Do I own my website?',
    answer: 'Yes, absolutely. Once the project is complete and paid for, you own all the design and content. We can continue hosting and maintaining it for you, or you can take it elsewhere anytime.',
  },
  {
    question: 'Can I update the website myself?',
    answer: 'Yes! All our websites come with a user-friendly CMS (Content Management System) that lets you update text, images, and basic content without any technical knowledge. We provide training and documentation to get you started.',
  },
  {
    question: 'What if I need changes after launch?',
    answer: 'We offer ongoing maintenance plans starting from $150/month for updates, backups, and support. You can also request one-off changes, which we\'ll quote based on the work required.',
  },
  {
    question: 'Do you handle hosting?',
    answer: 'Yes, we can handle hosting for you. We use reliable, fast hosting providers and include hosting in our maintenance plans. Alternatively, you can host it yourself—we\'ll help you set it up.',
  },
  {
    question: 'What about SEO?',
    answer: 'All our websites include essential SEO optimization: proper page structure, meta tags, mobile optimization, and fast loading times. We can also set up Google Analytics and Search Console. For advanced local SEO, we offer it as an add-on service.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .faq {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-title {
          text-align: center;
          margin-bottom: var(--space-3xl);
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .faq-item {
          background-color: #11151A;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-lg);
          background: none;
          border: none;
          color: #E7ECF3;
          font-size: 1.125rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .faq-question:hover {
          background-color: rgba(255, 255, 255, 0.03);
        }

        .faq-question:focus-visible {
          outline: 2px solid #5AA9E6;
          outline-offset: -2px;
        }

        .faq-icon {
          font-size: 1.5rem;
          color: #5AA9E6;
          font-weight: 300;
          flex-shrink: 0;
          margin-left: var(--space-md);
        }

        .faq-answer {
          padding: 0 var(--space-lg) var(--space-lg);
          animation: slideDown 0.3s ease;
        }

        .faq-answer p {
          color: #B4C0CF;
          max-width: none;
          margin: 0;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

