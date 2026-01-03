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
            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                When you use ClashLens, we collect information necessary to provide our services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Account Information:</strong> Name and email address when you sign in with Google</li>
                <li><strong>Investigation Data:</strong> YouTube video URLs you submit for analysis</li>
                <li><strong>Usage Data:</strong> How you interact with our platform to improve our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide and maintain ClashLens services</li>
                <li>To save and manage your investigations</li>
                <li>To communicate service updates and notifications</li>
                <li>To improve and develop new features</li>
                <li>To ensure compliance with our Terms of Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">3. YouTube API Services</h2>
              <p className="text-muted-foreground mb-4">
                ClashLens uses YouTube API Services to analyze publicly available video content. By using our service, you also agree to be bound by the 
                <a href="https://www.youtube.com/t/terms" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  YouTube Terms of Service
                </a>.
              </p>
              <p className="text-muted-foreground">
                We only access publicly available information and do not access private user data through YouTube APIs. 
                For information about Google's privacy practices, please visit the 
                <a href="https://policies.google.com/privacy" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  Google Privacy Policy
                </a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure. We strive to use commercially 
                acceptable means to protect your data but cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information only for as long as necessary to provide our services and fulfill 
                the purposes described in this policy. Investigation data is retained until you delete it or close your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-display font-bold mb-4">6. Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at{" "}
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
