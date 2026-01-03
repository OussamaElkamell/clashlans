import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-display font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="glass-card p-8">
              <h2 className="text-xl font-display font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using ClashLens, you agree to be bound by these Terms of Service. If you do not agree 
                to these terms, please do not use our service.
              </p>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-xl font-display font-bold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground">
                ClashLens is a platform that analyzes publicly available YouTube content to identify and present 
                contradictory narratives. We provide analysis tools for educational, journalistic, and research purposes. 
                We do not determine which claims are true or false — we help users understand where disagreement exists.
              </p>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-xl font-display font-bold mb-4">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You must provide accurate account information</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You agree not to use the service for any unlawful purposes</li>
                <li>You will not attempt to manipulate, spam, or abuse the platform</li>
                <li>You will not use our service to harass, defame, or harm others</li>
              </ul>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-xl font-display font-bold mb-4">4. YouTube API Compliance</h2>
              <p className="text-muted-foreground mb-4">
                Our service uses YouTube API Services. By using ClashLens, you agree to comply with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <a href="https://www.youtube.com/t/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    YouTube Terms of Service
                  </a>
                </li>
                <li>
                  <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    Google Privacy Policy
                  </a>
                </li>
              </ul>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-xl font-display font-bold mb-4">5. Expert Response Mode</h2>
              <p className="text-muted-foreground mb-4">
                If you use the Expert Response Mode feature (when available), you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Manually review and edit all AI-suggested responses before publishing</li>
                <li>Post only neutral, evidence-based clarifications — not promotional or misleading content</li>
                <li>Accept that all responses are published under your own YouTube account</li>
                <li>Comply with YouTube's Community Guidelines and Terms of Service</li>
                <li>Not use the feature for spam, harassment, or manipulation</li>
              </ul>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-xl font-display font-bold mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground">
                ClashLens and its original content, features, and functionality are owned by ClashLens and are protected 
                by international copyright, trademark, and other intellectual property laws. Analysis results are provided 
                for your personal or professional use and may not be resold without permission.
              </p>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-xl font-display font-bold mb-4">7. Disclaimer</h2>
              <p className="text-muted-foreground">
                ClashLens provides analytical tools and does not verify the accuracy of claims in analyzed videos. 
                Our analysis identifies contradictions but does not determine truth or falsity. Users should conduct 
                their own research and verification. The service is provided "as is" without warranties of any kind.
              </p>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-xl font-display font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                ClashLens shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                resulting from your use of the service. This includes damages for loss of data, profits, or other intangible losses.
              </p>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-xl font-display font-bold mb-4">9. Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to terminate or suspend your account at any time for violations of these terms or 
                for any other reason at our sole discretion. Upon termination, your right to use the service will cease immediately.
              </p>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-xl font-display font-bold mb-4">10. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@clashlens.com" className="text-primary hover:underline">
                  legal@clashlens.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
