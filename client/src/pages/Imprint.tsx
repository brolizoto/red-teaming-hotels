import { useTranslation } from "react-i18next";

export default function Imprint() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container py-4 flex justify-between items-center">
          <a href="/" className="text-primary font-bold text-lg">
            RED TEAMING <span className="text-sm text-muted-foreground">Switzerland</span>
          </a>
          <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {t('imprint.back')}
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="accent-line mb-8"></div>
            <h1 className="text-heading mb-12">{t('imprint.title')}</h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-subheading mb-4">{t('imprint.company.title')}</h2>
                <p className="text-sm text-muted-foreground space-y-2">
                  <div>{t('imprint.company.name')}</div>
                  <div>{t('imprint.company.address')}</div>
                  <div>{t('imprint.company.city')}</div>
                  <div>{t('imprint.company.country')}</div>
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">{t('imprint.contact.title')}</h2>
                <p className="text-sm text-muted-foreground space-y-2">
                  <div>
                    {t('imprint.contact.email')}{' '}
                    <a href="mailto:contact@redteaming.ch" className="text-primary hover:underline">
                      contact@redteaming.ch
                    </a>
                  </div>
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">{t('imprint.uid.title')}</h2>
                <p className="text-sm text-muted-foreground">
                  {t('imprint.uid.value')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="container py-8 text-center text-xs text-muted-foreground">
          <p>{t('imprint.copyright')}</p>
        </div>
      </footer>
    </div>
  );
}
