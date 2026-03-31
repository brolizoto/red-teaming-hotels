import { useEffect } from "react";

/**
 * Hidden redirect page: /rt4h/assessment
 * Not linked in navigation — accessible only via direct URL.
 * Immediately redirects to the Lovable tool.
 */
export default function AssessmentRedirect() {
  useEffect(() => {
    window.location.replace("https://redteam-guide.lovable.app");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-muted-foreground">Weiterleitung...</p>
      </div>
    </div>
  );
}
