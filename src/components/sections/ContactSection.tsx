import { Linkedin, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { contact } from "../../data/site";
import { useContactForm } from "../../hooks/useContactForm";
import { ActionButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { useLanguage } from "../../hooks/useLanguage";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ScrollPop } from "../ui/ScrollPop";

export function ContactSection() {
  const { copy, locale } = useLanguage();
  const { contact: contactCopy } = copy;
  const { errors, submissionState, handleSubmit, clearError } =
    useContactForm(contactCopy, locale);
  const whatsappMessage = encodeURIComponent(copy.whatsappMessage);

  return (
    <ScrollReveal className="section contact-section" id="contact">
      <Container>
        <SectionHeading
          eyebrow={contactCopy.eyebrow}
          title={contactCopy.title}
          description={contactCopy.description}
        />
        <p className="response-time">{contactCopy.responseTime}</p>
        <div className="contact-grid">
          <div className="contact-copy">
            <div className="contact-links">
              <ScrollPop>
                <a className="contact-card" href={`mailto:${contact.email}`}>
                  <span><Mail size={19} /></span>
                  <span>
                    <small>{contactCopy.emailLabel}</small>
                    <b dir="ltr">{contact.email}</b>
                  </span>
                </a>
              </ScrollPop>
              <ScrollPop delay={0.2}>
                <a
                  className="contact-card"
                  href={`https://wa.me/${contact.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span><MessageCircle size={19} /></span>
                  <span>
                    <small>{contactCopy.whatsappLabel}</small>
                    <b dir="ltr">{contact.phone}</b>
                  </span>
                </a>
              </ScrollPop>
              <ScrollPop delay={0.4}>
                <a className="contact-card" href={`tel:${contact.phone}`}>
                  <span><Phone size={19} /></span>
                  <span>
                    <small>{contactCopy.phoneLabel}</small>
                    <b dir="ltr">{contact.phone}</b>
                  </span>
                </a>
              </ScrollPop>
              <ScrollPop delay={0.6}>
                <a
                  className="contact-card"
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span><Linkedin size={19} /></span>
                  <span>
                    <small>{contactCopy.linkedinLabel}</small>
                    <b dir="ltr">LinkedIn</b>
                  </span>
                </a>
              </ScrollPop>
            </div>
            <p className="contact-channel-note">
              {contactCopy.channelNote}
            </p>
          </div>
          <ScrollPop delay={0.3}>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-busy={submissionState === "loading"}
            >
            <div className="form-heading">
              <h3>{contactCopy.formTitle}</h3>
              <p>{contactCopy.formDescription}</p>
            </div>
            <label htmlFor="contact-name">{contactCopy.nameLabel} <span aria-hidden="true">*</span></label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder={contactCopy.namePlaceholder}
              required
              maxLength={100}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              onChange={() => clearError("name")}
            />
            {errors.name && <span className="field-error" id="contact-name-error" role="alert">{errors.name}</span>}
            <label htmlFor="contact-email">{contactCopy.emailLabel} <span aria-hidden="true">*</span></label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={contactCopy.emailPlaceholder}
              dir="ltr"
              required
              maxLength={254}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              onChange={() => clearError("email")}
            />
            {errors.email && <span className="field-error" id="contact-email-error" role="alert">{errors.email}</span>}
            <label htmlFor="contact-service">{contactCopy.serviceLabel} <span aria-hidden="true">*</span></label>
            <select
              id="contact-service"
              name="service"
              defaultValue=""
              required
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "contact-service-error" : undefined}
              onChange={() => clearError("service")}
            >
              <option value="" disabled>{contactCopy.servicePlaceholder}</option>
              {contactCopy.services.map((service, index) => (
                <option key={service} value={`service-${index}`}>{service}</option>
              ))}
            </select>
            {errors.service && <span className="field-error" id="contact-service-error" role="alert">{errors.service}</span>}
            <label htmlFor="contact-message">{contactCopy.messageLabel} <span aria-hidden="true">*</span></label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder={contactCopy.messagePlaceholder}
              required
              maxLength={2000}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              onChange={() => clearError("message")}
            />
            {errors.message && <span className="field-error" id="contact-message-error" role="alert">{errors.message}</span>}
            <ActionButton
              type="submit"
              className="submit-button"
              disabled={submissionState === "loading"}
            >
              {submissionState === "loading" ? (
                <>{contactCopy.loading}</>
              ) : (
                <>{contactCopy.submit} <Send size={16} aria-hidden="true" /></>
              )}
            </ActionButton>
            <p
              className={`form-status ${submissionState === "error" || submissionState === "not-configured" ? "is-error" : ""}`}
              aria-live="polite"
              role={submissionState === "success" || submissionState === "error" || submissionState === "not-configured" ? "status" : undefined}
            >
              {submissionState === "loading" && contactCopy.loading}
              {submissionState === "success" && contactCopy.sent}
              {submissionState === "error" && contactCopy.sendError}
              {submissionState === "not-configured" && contactCopy.notConfigured}
            </p>
            <span className="form-note">{contactCopy.note}</span>
            </form>
          </ScrollPop>
        </div>
      </Container>
    </ScrollReveal>
  );
}
