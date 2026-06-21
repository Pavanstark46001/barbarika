import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE_NAME}`,
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal information.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: false, follow: false },
}

const EFFECTIVE_DATE = 'June 21, 2026'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-display font-bold text-foreground mb-3">Privacy Policy</h1>
          <p className="text-muted text-sm">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-foreground/80 leading-relaxed">
          <Section title="1. Introduction">
            <p>
              {SITE_NAME} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the website at {SITE_URL}
              (the &quot;Service&quot;). This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or engage our services.
            </p>
            <p>
              By using our Service, you agree to the collection and use of information in accordance
              with this policy. If you do not agree, please do not use the Service.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact information</strong> — name, email address, phone number, and company name when you fill out our contact form.</li>
              <li><strong>Usage data</strong> — pages visited, time spent, browser type, device, and IP address (collected automatically via analytics tools).</li>
              <li><strong>Communications</strong> — messages you send us via the contact form, email, or WhatsApp.</li>
            </ul>
            <p>We do not collect sensitive personal data such as financial information, Aadhaar numbers, or health records.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Respond to your enquiries and provide our services</li>
              <li>Send project updates and relevant communications</li>
              <li>Improve our website and service offering</li>
              <li>Analyse traffic and usage patterns (aggregated, anonymised)</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We will never sell your personal information to third parties.</p>
          </Section>

          <Section title="4. Cookies and Tracking">
            <p>
              Our website may use cookies to enhance your browsing experience. Cookies are small files
              stored on your device that help us remember your preferences. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            <p>We may use third-party analytics tools (e.g., Google Analytics) that set their own cookies. These are governed by the respective third-party privacy policies.</p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>We use the following third-party services that may receive your data:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Web3Forms</strong> — to process contact form submissions</li>
              <li><strong>WhatsApp</strong> — for direct customer communication</li>
              <li><strong>Google Analytics</strong> — for website analytics (anonymised)</li>
              <li><strong>Vercel</strong> — for website hosting and performance</li>
            </ul>
            <p>These services have their own privacy policies and we encourage you to review them.</p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain your contact information for as long as necessary to fulfil the purposes for
              which it was collected, or as required by law. Contact form submissions are stored locally
              in our admin system and are reviewed by our team only.
            </p>
            <p>You may request deletion of your data at any time by contacting us.</p>
          </Section>

          <Section title="7. Data Security">
            <p>
              We implement appropriate technical and organisational measures to protect your personal
              information against unauthorised access, alteration, disclosure, or destruction.
              However, no transmission over the internet is 100% secure.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>Under applicable Indian data protection laws, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent to marketing communications at any time</li>
            </ul>
            <p>To exercise these rights, email us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.</p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              Our Service is not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If we become aware that a child has provided
              us with personal data, we will delete it.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant
              changes by updating the effective date at the top of this page. Continued use of the
              Service after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
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
