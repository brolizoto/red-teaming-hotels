import { X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { trpc } from "../lib/trpc";
import { toast } from "sonner";
import { analytics } from "../lib/analytics";
import { TurnstileWidget } from "./TurnstileWidget";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Wiederverwendbare Kontaktformular-Modal-Komponente
 * Verwendet in allen Seiten (Home, Ansatz, Hotels, Weitere Einsatzfelder)
 */
export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    turnstileToken: '',
    honeypot: '',
    formOpenedAt: Date.now()
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [turnstileVerified, setTurnstileVerified] = useState(false);

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: (data) => {
      setFormSubmitted(true);
      analytics.trackFormSubmit(true);
      if (data.emailSent) {
        toast.success(t('contact.successMessage'));
      } else {
        toast.warning(t('contact.savedButNotSent'));
      }
      setTimeout(() => {
        onClose();
        setFormSubmitted(false);
        setTurnstileVerified(false);
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          company: '', 
          message: '', 
          turnstileToken: '', 
          honeypot: '', 
          formOpenedAt: Date.now() 
        });
      }, 2000);
    },
    onError: (error) => {
      analytics.trackFormError(error.message);
      toast.error(t('contact.errorMessage') + ": " + error.message);
    },
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTurnstileVerify = (token: string) => {
    setFormData(prev => ({ ...prev, turnstileToken: token }));
    setTurnstileVerified(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileVerified) {
      toast.error(t('contact.verifyNotRobot'));
      return;
    }
    contactMutation.mutate(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">{t('contact.title')}</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {formSubmitted ? (
          <div className="text-center py-8">
            <div className="text-primary text-4xl mb-4">✓</div>
            <p className="text-foreground font-bold mb-2">{t('contact.thankYou')}</p>
            <p className="text-sm text-muted-foreground">
              {t('contact.thankYouMessage')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                {t('contact.name')} *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('contact.namePlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                {t('contact.email')} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                {t('contact.phone')} *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('contact.phonePlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                {t('contact.company')}
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('contact.companyPlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                {t('contact.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder={t('contact.messagePlaceholder')}
              />
            </div>

            {/* Honeypot-Feld (unsichtbar für Menschen, sichtbar für Bots) */}
            <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
              <label htmlFor="website">Website (bitte leer lassen)</label>
              <input
                type="text"
                id="website"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleFormChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <TurnstileWidget
              onVerify={handleTurnstileVerify}
              onError={() => toast.error(t('contact.verificationFailed'))}
            />

            <button
              type="submit"
              className="w-full btn-primary py-3 font-bold"
              disabled={!turnstileVerified}
            >
              {t('contact.submit')}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              {t('contact.required')}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
