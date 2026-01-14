import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * Language Switcher Component
 * Ermöglicht Wechsel zwischen Deutsch und Englisch
 */
export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
      aria-label="Toggle language"
    >
      <Globe size={16} />
      <span className="uppercase">{i18n.language === 'de' ? 'EN' : 'DE'}</span>
    </button>
  );
}
