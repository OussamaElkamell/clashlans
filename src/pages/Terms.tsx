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

          {/* Single Card with all content */}
          <div className="glass-card p-8 prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using ClashLens, you agree to be bound by these Terms of Service. 
                If you do not agree, please do not use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                ClashLens is a research-oriented platform that analyzes publicly available YouTube content 
                to help users understand contradictory narratives. The service is intended for educational, 
                journalistic, and research purposes.
              </p>
              <p className="text-muted-foreground">
                ClashLens does not determine the truth or accuracy of claims, promote content, or influence opinions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">Users agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate account information.</li>
                <li>Use the platform lawfully and responsibly.</li>
                <li>Not misuse, spam, manipulate, or abuse YouTube content or APIs.</li>
                <li>Not use ClashLens to harass, defame, or harm others.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">4. YouTube API Services Compliance</h2>
              <p className="text-muted-foreground mb-4">
                ClashLens uses YouTube API Services and complies with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <a href="https://developers.google.com/youtube/terms/api-services-terms-of-service" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    YouTube API Services Terms of Service
                  </a>
                </li>
                <li>
                  <a href="https://developers.google.com/youtube/terms/developer-policies" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    Google Developer Policies
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/howyoutubeworks/policies/community-guidelines/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    YouTube Community Guidelines
                  </a>
                </li>
              </ul>
              <p className="text-muted-foreground">
                All YouTube data displayed remains subject to YouTube's terms and ownership.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">5. Expert Response Mode (If Enabled)</h2>
              <p className="text-muted-foreground mb-4">
                If using Expert Response Mode, users agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>All responses are manually reviewed before publication.</li>
                <li>Responses are neutral, factual, and non-promotional.</li>
                <li>Comments are posted under the user's own YouTube account.</li>
                <li>The feature must not be used for spam, automation, or manipulation.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground">
                ClashLens and its original software, features, and functionality are owned by ClashLens. 
                Analysis outputs are provided for personal or professional use and may not be resold.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">7. Disclaimer</h2>
              <p className="text-muted-foreground">
                ClashLens provides analytical tools only. Users are responsible for conducting independent 
                verification of information. The service is provided "as is" without warranties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">8. Termination</h2>
              <p className="text-muted-foreground">
                We may suspend or terminate accounts that violate these Terms, applicable laws, or platform policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold mb-4">9. Contact</h2>
              <p className="text-muted-foreground">
                For legal or policy questions, contact:{" "}
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
