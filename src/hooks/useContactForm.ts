import type { FormEvent } from "react";
import { useState } from "react";
import type { SiteCopy } from "../data/translations";
import type { Locale } from "../types/language";

type ContactField = "name" | "email" | "service" | "message";
type ContactErrors = Partial<Record<ContactField, string>>;
type SubmissionState = "idle" | "loading" | "success" | "error" | "not-configured";

export function useContactForm(copy: SiteCopy["contact"], locale: Locale) {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: ContactErrors = {};

    if (!name) nextErrors.name = copy.errors.name;
    if (!email) {
      nextErrors.email = copy.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = copy.errors.emailInvalid;
    }
    if (!service) nextErrors.service = copy.errors.service;
    if (!message) nextErrors.message = copy.errors.message;

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      window.requestAnimationFrame(() => {
        form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setSubmissionState("not-configured");
      return;
    }

    setSubmissionState("loading");
    const serviceIndex = Number(service.replace("service-", ""));
    const selectedService = copy.services[serviceIndex] ?? service;
    const payload = {
      access_key: accessKey,
      name,
      email,
      subject: locale === "ar"
        ? `رسالة استشارة جديدة — ${selectedService}`
        : `New consultation request — ${selectedService}`,
      from_name: "Tahreer SEO Portfolio",
      replyto: email,
      message: `${locale === "ar" ? "نوع الخدمة" : "Service"}: ${selectedService}\n\n${message}`,
      botcheck: "",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result: { success?: boolean; message?: string } = await response.json();

      if (!response.ok || !result.success) {
        console.error("Web3Forms submission failed", {
          status: response.status,
          message: result.message,
        });
        setSubmissionState("error");
        return;
      }

      setSubmissionState("success");
      form.reset();
    } catch (error) {
      console.error("Unable to submit contact form to Web3Forms", error);
      setSubmissionState("error");
    }
  }

  function clearError(field: ContactField) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  return {
    errors,
    submissionState,
    handleSubmit,
    clearError,
  };
}
