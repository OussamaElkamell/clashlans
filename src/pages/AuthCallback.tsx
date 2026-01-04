import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function AuthCallback() {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const handleCallback = () => {
            try {
                // Direct OAuth implicit flow returns parameters in the hash
                const hash = window.location.hash.substring(1);
                if (!hash) {
                    // Some providers might use query params for errors even in implicit flow
                    const query = new URLSearchParams(window.location.search);
                    const errorParam = query.get("error");
                    if (errorParam) {
                        throw new Error(errorParam);
                    }
                    throw new Error("No authentication data found");
                }

                const params = new URLSearchParams(hash);
                const accessToken = params.get("access_token");
                const error = params.get("error");

                if (error) {
                    throw new Error(error);
                }

                if (!accessToken) {
                    throw new Error("No access token received");
                }

                // Store token - in a real app, consider using a more secure storage or context
                localStorage.setItem("google_access_token", accessToken);

                // Optional: Store other info if needed (expires_in, scope, etc.)
                const expiresIn = params.get("expires_in");
                if (expiresIn) {
                    const expiryTime = new Date().getTime() + parseInt(expiresIn) * 1000;
                    localStorage.setItem("token_expiry", expiryTime.toString());
                }

                toast.success("Successfully logged in with Google!");
                navigate("/dashboard");
            } catch (err: any) {
                console.error("Auth callback error:", err);
                setError(err.message || "Failed to authenticate");
                toast.error("Authentication failed: " + (err.message || "Unknown error"));
                // Redirect back to login after a short delay so user sees the error
                setTimeout(() => navigate("/auth"), 2000);
            }
        };

        handleCallback();
    }, [navigate]);

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <div className="text-destructive mb-4">Authentication Error</div>
                <div className="text-muted-foreground">{error}</div>
                <div className="mt-4 text-sm text-muted-foreground">Redirecting to login...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Completing authentication...</p>
            </div>
        </div>
    );
}
