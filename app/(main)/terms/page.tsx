import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Terms of Service — ${SITE_NAME}`,
  description: `Terms of Service for ${SITE_NAME}. Please read these terms carefully before using our services.`,
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: false, follow: false },
}

const EFFECTIVE_DATE = 'June 21, 2026'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-display font-bold text-foreground mb-3">Terms of Service</h1>
          <p className="text-muted text-sm">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the website at {SITE_URL} or engaging the services of {SITE_NAME}
              (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;), you agree to be bound by these Terms of Service.
              If you do not agree, please discontinue use immediately.
            </p>
          </Section>

          <Section title="2. Services">
            <p>
              {SITE_NAME} provides software development, web development, mobile app development,
              AI agent development, UI/UX design, digital marketing, and SEO services
              (collectively, &quot;Services&quot;). The specific scope, deliverables, timeline, and
              pricing for each engagement are agreed upon in a separate Statement of Work (SOW)
              or proposal document.
            </p>
          </Section>

          <Section title="3. Client Responsibilities">
            <p>Clients agree to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Provide timely access to required assets, credentials, and feedback</li>
              <li>Designate a primary point of contact for project communication</li>
              <li>Review and approve deliverables within the agreed timeframes</li>
              <li>Ensure all content provided does not infringe third-party intellectual property rights</li>
            </ul>
          </Section>

          <Section title="4. Payment Terms">
            <p>
              Payment schedules are defined in individual project proposals. Typically:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>A deposit (30–50%) is required before work begins</li>
              <li>Milestone-based payments apply for longer engagements</li>
              <li>Final payment is due upon project completion before handover</li>
              <li>Late payments may attract an interest charge of 2% per month</li>
            </ul>
            <p>All prices are in Indian Rupees (INR) unless otherwise specified.</p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              Upon receipt of full payment, the client receives ownership of all custom-developed
              code, designs, and assets created for their project. {SITE_NAME} retains the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Display the project in our portfolio (unless the client requests confidentiality)</li>
              <li>Retain ownership of any pre-existing tools, libraries, or frameworks used</li>
              <li>Retain ownership of any generic components not custom-built for the client</li>
            </ul>
          </Section>

          <Section title="6. Confidentiality">
            <p>
              Both parties agree to keep confidential any proprietary information shared during the
              engagement. This obligation survives project completion. We do not share your business
              information with third parties without explicit consent.
            </p>
          </Section>

          <Section title="7. Warranties and Disclaimers">
            <p>
              {SITE_NAME} warrants that services will be performed with reasonable skill and care.
              We provide a 1-year bug-fix warranty for custom software delivered, covering defects
              in the original scope of work.
            </p>
            <p>
              We do not warrant uninterrupted or error-free operation of third-party services,
              hosting platforms, or external APIs integrated into your project.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, {SITE_NAME}&apos;s total liability
              for any claim arising from or related to our services shall not exceed the total fees
              paid by the client in the three months preceding the claim.
            </p>
            <p>
              We are not liable for indirect, incidental, special, or consequential damages including
              lost profits, loss of data, or business interruption.
            </p>
          </Section>

          <Section title="9. Termination">
            <p>
              Either party may terminate a project engagement with 30 days&apos; written notice.
              Upon termination, the client pays for all work completed up to the termination date.
              Any deposit paid is non-refundable if work has commenced.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms are governed by the laws of India. Any disputes shall be subject to the
              exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
            </p>
          </Section>

          <Section title="11. Changes to Terms">
            <p>
              We reserve the right to update these Terms at any time. Continued use of our services
              after changes constitutes acceptance of the revised Terms. Material changes will be
              communicated via email or prominent notice on our website.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>For any questions regarding these Terms, contact us at:</p>
            <div className="glass-card rounded-xl border border-border p-4 mt-3 text-sm space-y-1">
              <p><strong>{SITE_NAME}</strong></p>
              <p>Hyderabad, Telangana, India</p>
              <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a></p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pb-6 border-b border-border last:border-0">
      <h2 className="text-lg font-display font-bold text-foreground mb-3">{title}</h2>
      <div className="space-y-3 text-sm">{children}</div>
    </div>
  )
}
