import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Logo } from "@/components/Logo";
import { User, Bell, Shield, LogOut, Trash2, Lock } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">Manage your account and preferences.</p>
          </div>

          {/* Profile Section */}
          <section className="glass-card p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-display font-semibold">Profile</h2>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-primary-foreground">JD</span>
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">john.doe@example.com</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
            </div>

            <div className="mt-4">
              <Button variant="outline">Update Profile</Button>
            </div>
          </section>

          {/* Notifications */}
          <section className="glass-card p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-display font-semibold">Notifications</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Investigation Complete</p>
                  <p className="text-sm text-muted-foreground">Get notified when your analysis is ready</p>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Updates</p>
                  <p className="text-sm text-muted-foreground">Receive weekly digest of your investigations</p>
                </div>
                <Switch checked={emailUpdates} onCheckedChange={setEmailUpdates} />
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="glass-card p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-display font-semibold">Security</h2>
            </div>

            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Lock className="w-4 h-4 mr-2" />
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </section>

          {/* Expert Response Mode - Coming Soon */}
          <section className="glass-card p-6 mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-violet-accent/5" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                  Coming Soon
                </div>
              </div>
              <h2 className="text-xl font-display font-semibold mb-2">Expert Response Mode</h2>
              <p className="text-muted-foreground mb-4">
                Draft and publish neutral, evidence-based clarifications in YouTube comment threads. 
                Help audiences understand where disagreement comes from — not who is right.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Highlight any public comment under a video</li>
                <li>• Select your intent: clarify disagreement, provide sources, or explain definitions</li>
                <li>• AI suggests a neutral draft for your review</li>
                <li>• Publish from your own YouTube account with safeguards</li>
              </ul>
            </div>
          </section>

          {/* Logout */}
          <Button 
            variant="ghost" 
            className="w-full justify-center text-muted-foreground hover:text-foreground"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </main>
    </div>
  );
}
