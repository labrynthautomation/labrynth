"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    challenge: "",
    contact: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // TODO: Replace with real API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", business: "", challenge: "", contact: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status === "error") setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className="text-center py-12 max-w-lg mx-auto">
        <CheckCircle className="w-12 h-12 text-brand-cyan mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-brand-white mb-2">
          Message Sent
        </h3>
        <p className="text-brand-muted mb-6">
          Thanks for reaching out! We&apos;ll get back to you within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-brand-cyan hover:text-brand-white transition-colors text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-brand-muted mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-brand-obsidian border border-brand-muted/20 rounded-lg text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="business"
          className="block text-sm font-medium text-brand-muted mb-2"
        >
          Business
        </label>
        <input
          type="text"
          id="business"
          name="business"
          value={formData.business}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-brand-obsidian border border-brand-muted/20 rounded-lg text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors"
          placeholder="Your business name"
        />
      </div>

      <div>
        <label
          htmlFor="challenge"
          className="block text-sm font-medium text-brand-muted mb-2"
        >
          What takes up too much of your time?
        </label>
        <textarea
          id="challenge"
          name="challenge"
          value={formData.challenge}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-4 py-3 bg-brand-obsidian border border-brand-muted/20 rounded-lg text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none"
          placeholder="e.g. Scheduling appointments, following up with clients, data entry..."
        />
      </div>

      <div>
        <label
          htmlFor="contact"
          className="block text-sm font-medium text-brand-muted mb-2"
        >
          Email or Phone
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-brand-obsidian border border-brand-muted/20 rounded-lg text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors"
          placeholder="How should we reach you?"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <p>Something went wrong. Please try again.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full gradient-accent px-6 py-4 rounded-lg font-semibold text-brand-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Get My Free Consultation"}
        {status !== "submitting" && (
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        )}
      </button>
    </form>
  );
}
