import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";

/**
 * Unified Footer Component
 * Used consistently across all pages with identical structure
 */
export function UnifiedFooter() {
  const { t } = useTranslation();
  const [, navigate] = useLocation();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-primary font-bold text-lg">RED TEAMING</div>
              <div className="text-sm text-muted-foreground">Switzerland</div>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{t('footer.navigation')}</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <button
                onClick={() => navigate('/')}
                className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => navigate('/ansatz')}
                className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer"
              >
                {t('nav.approach')}
              </button>
              <button
                onClick={() => navigate('/hotels')}
                className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer"
              >
                {t('nav.hotels')}
              </button>
              <button
                onClick={() => navigate('/weitere-einsatzfelder')}
                className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer"
              >
                {t('nav.otherFields')}
              </button>
              <button
                onClick={() => navigate('/kontakt')}
                className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{t('footer.contact')}</h3>
            <p className="text-sm text-muted-foreground">
              <a
                href="mailto:contact@redteaming.ch"
                className="hover:text-primary transition-colors"
              >
                contact@redteaming.ch
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-6">
            <button
              onClick={() => navigate('/impressum')}
              className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              {t('footer.imprint')}
            </button>
            <button
              onClick={() => navigate('/datenschutz')}
              className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              {t('footer.privacy')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
