"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    timeThief: "",
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
          htmlFor="timeThief"
          className="block text-sm font-medium text-brand-muted mb-2"
        >
          The Time Thief
        </label>
        <textarea
          id="timeThief"
          name="timeThief"
          value={formData.timeThief}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-4 py-3 bg-brand-obsidian border border-brand-muted/20 rounded-lg text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none"
          placeholder="What repetitive task steals your time?"
        />
      </div>

      <div>
        <label
          htmlFor="contact"
          className="block text-sm font-medium text-brand-muted mb-2"
        >
          Contact Info
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-brand-obsidian border border-brand-muted/20 rounded-lg text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors"
          placeholder="Email or phone number"
        />
      </div>

      <button
        type="submit"
        className="w-full gradient-accent px-6 py-4 rounded-lg font-semibold text-brand-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
      >
        Enter the Labrynth
        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
