import { useTranslation } from "react-i18next";
import { UnifiedFooter } from "@/components/UnifiedFooter";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50" style={{backgroundColor: 'rgba(255,255,255,0.97)', WebkitBackdropFilter: 'blur(4px)', backdropFilter: 'blur(4px)'}}>
        <div className="container py-4 flex justify-between items-center">
          <a href="/" className="text-primary font-bold text-lg">
            RED TEAMING <span className="text-sm text-muted-foreground">Switzerland</span>
          </a>
          <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {t('privacy.back')}
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="accent-line mb-8"></div>
            <h1 className="text-3xl md:text-4xl font-light mb-12">{t('privacy.title')}</h1>

            <div className="space-y-8 text-sm text-muted-foreground">
              <p className="text-base">
                {t('privacy.intro')}
              </p>

              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-4">{t('privacy.responsible.title')}</h2>
                <p className="space-y-1">
                  <div>{t('privacy.responsible.company')}</div>
                  <div>{t('privacy.responsible.name')}</div>
                  <div>{t('privacy.responsible.address')}</div>
                  <div>{t('privacy.responsible.city')}</div>
                  <div>{t('privacy.responsible.uid')}</div>
                  <div>
                    {t('privacy.responsible.email')}{' '}
                    <a href="mailto:contact@redteaming.ch" className="text-primary hover:underline">
                      contact@redteaming.ch
                    </a>
                  </div>
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-4">{t('privacy.collection.title')}</h2>
                <p className="mb-4">
                  {t('privacy.collection.intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>{t('privacy.collection.item1')}</li>
                  <li>{t('privacy.collection.item2')}</li>
                  <li>{t('privacy.collection.item3')}</li>
                </ul>
                <p className="mb-4">{t('privacy.collection.dataTitle')}</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>{t('privacy.collection.data1')}</li>
                  <li>{t('privacy.collection.data2')}</li>
                  <li>{t('privacy.collection.data3')}</li>
                  <li>{t('privacy.collection.data4')}</li>
                </ul>
                <p className="mt-4">
                  {t('privacy.collection.usage')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-4">{t('privacy.purpose.title')}</h2>
                <p className="mb-4">{t('privacy.purpose.intro')}</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>{t('privacy.purpose.item1')}</li>
                  <li>{t('privacy.purpose.item2')}</li>
                  <li>{t('privacy.purpose.item3')}</li>
                </ul>
                <p className="mt-4">
                  {t('privacy.purpose.sharing')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-4">{t('privacy.hosting.title')}</h2>
                <p>
                  {t('privacy.hosting.text')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-4">{t('privacy.cookies.title')}</h2>
                <p className="mb-4">{t('privacy.cookies.text1')}</p>
                <p className="mb-4">{t('privacy.cookies.text2')}</p>
                <p>
                  {t('privacy.cookies.text3')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-4">{t('privacy.storage.title')}</h2>
                <p>
                  {t('privacy.storage.text')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-4">{t('privacy.rights.title')}</h2>
                <p className="mb-4">{t('privacy.rights.intro')}</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>{t('privacy.rights.item1')}</li>
                  <li>{t('privacy.rights.item2')}</li>
                  <li>{t('privacy.rights.item3')}</li>
                </ul>
                <p>
                  {t('privacy.rights.contact')}{' '}
                  <a href="mailto:contact@redteaming.ch" className="text-primary hover:underline">
                    contact@redteaming.ch
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-4">{t('privacy.changes.title')}</h2>
                <p>
                  {t('privacy.changes.text')}
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">{t('privacy.lastUpdated')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}


      <UnifiedFooter />
    </div>
  );
}
