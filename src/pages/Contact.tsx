import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send, HelpCircle, Flag } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type ContactType = "general" | "support" | "report";

export default function Contact() {
  const [contactType, setContactType] = useState<ContactType>("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions, feedback, or need to report an issue? We're here to help.
            </p>
          </div>

          {/* Contact Type Selector */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => setContactType("general")}
              className={cn(
                "glass-card p-4 text-center transition-all hover-lift",
                contactType === "general" && "ring-2 ring-primary border-primary/50"
              )}
            >
              <MessageSquare className="w-6 h-6 mx-auto mb-2 text-primary" />
              <span className="text-sm font-medium">General Inquiry</span>
            </button>
            <button
              onClick={() => setContactType("support")}
              className={cn(
                "glass-card p-4 text-center transition-all hover-lift",
                contactType === "support" && "ring-2 ring-primary border-primary/50"
              )}
            >
              <HelpCircle className="w-6 h-6 mx-auto mb-2 text-primary" />
              <span className="text-sm font-medium">Technical Support</span>
            </button>
            <button
              onClick={() => setContactType("report")}
              className={cn(
                "glass-card p-4 text-center transition-all hover-lift",
                contactType === "report" && "ring-2 ring-primary border-primary/50"
              )}
            >
              <Flag className="w-6 h-6 mx-auto mb-2 text-primary" />
              <span className="text-sm font-medium">Report Issue</span>
            </button>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  {contactType === "general" && "How can we help?"}
                  {contactType === "support" && "Describe your technical issue"}
                  {contactType === "report" && "What would you like to report?"}
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    contactType === "general" 
                      ? "Tell us about your inquiry..."
                      : contactType === "support"
                      ? "Please describe the issue you're experiencing..."
                      : "Please provide details about the content or behavior you'd like to report..."
                  }
                  rows={6}
                  required
                />
              </div>

              <Button variant="gradient" size="lg" className="w-full group" type="submit">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </div>
          </form>

          {/* Direct Contact */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Or reach us directly at:</p>
            <div className="flex justify-center gap-8">
              <a 
                href="mailto:hello@clashlens.com" 
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="w-4 h-4" />
                hello@clashlens.com
              </a>
            </div>
          </div>

          {/* Policy Links */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              By contacting us, you agree to our{" "}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
              {" "}and{" "}
              <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
