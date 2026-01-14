import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavigationProps {
  onRequestCall: () => void;
}

/**
 * Wiederverwendbare Navigation-Komponente
 * Verwendet in allen Seiten (Home, Ansatz, Hotels, Weitere Einsatzfelder)
 */
export function Navigation({ onRequestCall }: NavigationProps) {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 bg-background border-b border-border z-50">
      <div className="container flex items-center justify-between py-4 md:py-6">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 bg-transparent border-none cursor-pointer hover:opacity-80">
          <div className="text-primary font-bold text-base md:text-lg">RED TEAMING</div>
          <div className="text-xs md:text-sm text-muted-foreground">Switzerland</div>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => navigate('/')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
            {t('nav.home')}
          </button>
          <button onClick={() => navigate('/ansatz')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
            {t('nav.approach')}
          </button>
          <button onClick={() => navigate('/hotels')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
            {t('nav.hotels')}
          </button>
          <button onClick={() => navigate('/weitere-einsatzfelder')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
            {t('nav.otherFields')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
            {t('nav.contact')}
          </button>
          <LanguageSwitcher />
          <button onClick={onRequestCall} className="btn-primary text-xs">{t('nav.requestCall')}</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container flex flex-col gap-4 py-4">
            <button
              onClick={() => navigate('/')}
              className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => navigate('/ansatz')}
              className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
            >
              {t('nav.approach')}
            </button>
            <button
              onClick={() => navigate('/hotels')}
              className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
            >
              {t('nav.hotels')}
            </button>
            <button
              onClick={() => navigate('/weitere-einsatzfelder')}
              className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
            >
              {t('nav.otherFields')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
            >
              {t('nav.contact')}
            </button>
            <LanguageSwitcher />
            <button onClick={onRequestCall} className="btn-primary text-xs w-full">{t('nav.requestCall')}</button>
          </div>
        </div>
      )}
    </nav>
  );
}
