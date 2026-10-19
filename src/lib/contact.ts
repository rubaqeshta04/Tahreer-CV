import type { Locale } from "../types/language";

interface ContactMessage {
  name: string;
  email: string;
  service: string;
  message: string;
}

export function createContactMailto(
  recipient: string,
  { name, email, service, message }: ContactMessage,
  locale: Locale,
) {
  const subject = locale === "ar"
    ? `رسالة استشارة من ${name}`
    : `Consultation request from ${name}`;
  const body = locale === "ar"
    ? `الاسم: ${name}\nالبريد الإلكتروني: ${email}\nنوع الخدمة: ${service}\n\n${message}`
    : `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`;

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
