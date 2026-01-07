import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-display font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>

          {/* Single Card with all content */}
          <div className="glass-card p-8 prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-8">
              ClashLens ("we", "our", "us") is committed to protecting user privacy and handling data responsibly. 
              This Privacy Policy explains how information is collected, used, stored, and protected when you use 
              the ClashLens platform.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect only the information necessary to operate and improve ClashLens:
              </p>
              
              <h3 className="text-lg font-semibold mb-2">Account Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Name and email address provided when you sign in using Google OAuth.</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Investigation Data</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>YouTube video URLs submitted by users.</li>
                <li>Analysis results generated at the user's request.</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Usage Data</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Limited interaction data (e.g., feature usage, error logs) used to improve reliability and performance.</li>
              </ul>

              <p className="text-muted-foreground">
                We access only publicly available YouTube data via YouTube API Services. We do not access private YouTube user data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">2. How We Use Information</h2>
              <p className="text-muted-foreground mb-4">
                Collected information is used solely to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Provide and operate ClashLens services.</li>
                <li>Create, save, and manage investigations and reports.</li>
                <li>Improve platform functionality, reliability, and security.</li>
                <li>Apply usage controls and ensure compliance with our Terms of Service.</li>
              </ul>
              <p className="text-muted-foreground">
                We do not sell, license, rent, or share personal data or YouTube API data with third parties, 
                and we do not use data for advertising, marketing, or profiling purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">3. Cookies & Local Storage</h2>
              <p className="text-muted-foreground mb-4">
                ClashLens uses limited cookies and/or local storage to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Maintain authenticated user sessions.</li>
                <li>Save investigations and user preferences.</li>
                <li>Ensure basic platform functionality.</li>
              </ul>
              <p className="text-muted-foreground">
                No third-party advertising, tracking, or analytics cookies are used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">4. Use of YouTube API Services</h2>
              <p className="text-muted-foreground mb-4">
                ClashLens uses YouTube API Services to retrieve and analyze publicly available YouTube content. 
                By using ClashLens, you also agree to be bound by the{" "}
                <a href="https://www.youtube.com/t/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  YouTube Terms of Service
                </a>.
              </p>
              <p className="text-muted-foreground">
                For information about Google's privacy practices, please review the{" "}
                <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Google Privacy Policy
                </a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">5. Data Retention & User Controls</h2>
              <p className="text-muted-foreground mb-4">
                We retain data only for as long as necessary to provide the service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Users may delete saved investigations at any time from their account dashboard.</li>
                <li>When a user deletes their account, all associated data is permanently removed.</li>
              </ul>
              <p className="text-muted-foreground">
                Users may revoke ClashLens' access to their Google account at any time via:{" "}
                <a href="https://myaccount.google.com/connections" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  https://myaccount.google.com/connections
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">6. Data Security</h2>
              <p className="text-muted-foreground">
                We implement reasonable technical and organizational measures to protect user information. 
                While no system can guarantee absolute security, we continuously work to protect data 
                against unauthorized access or misuse.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">7. User Rights</h2>
              <p className="text-muted-foreground mb-4">
                Users have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access their personal data.</li>
                <li>Request correction or deletion.</li>
                <li>Export their data.</li>
                <li>Revoke OAuth access at any time via Google account settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold mb-4">8. Contact</h2>
              <p className="text-muted-foreground">
                For privacy-related questions, contact us at:{" "}
                <a href="mailto:privacy@clashlens.com" className="text-primary hover:underline">
                  privacy@clashlens.com
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
