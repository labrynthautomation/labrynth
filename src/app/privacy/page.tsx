import { Navigation } from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Labrynth Automation",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />

      <section className="min-h-screen px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-white transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          <h1 className="text-3xl md:text-4xl font-bold text-brand-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-brand-muted text-sm mb-12">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="space-y-10 text-brand-muted leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-brand-white mb-3">
                Who We Are
              </h2>
              <p>
                Labrynth Automation ("we," "us," or "our") builds custom AI
                automations for local businesses. This privacy policy explains
                how we collect, use, and protect your information when you visit
                our website or use our contact form.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-white mb-3">
                Information We Collect
              </h2>
              <p className="mb-3">
                We only collect information that you voluntarily provide through
                our contact form. This includes:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Your name</li>
                <li>Your business name</li>
                <li>A description of your business challenge</li>
                <li>Your email address or phone number</li>
              </ul>
              <p className="mt-3">
                We do not use cookies, tracking pixels, or analytics tools to
                collect data about your browsing behavior.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-white mb-3">
                How We Use Your Information
              </h2>
              <p className="mb-3">
                We use the information you provide solely to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Respond to your inquiry</li>
                <li>Understand your business needs</li>
                <li>Provide you with a consultation or proposal</li>
              </ul>
              <p className="mt-3">
                We will never sell, rent, or share your personal information with
                third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-white mb-3">
                Data Storage and Security
              </h2>
              <p>
                Your information is stored securely and only accessible to
                Labrynth Automation team members who need it to respond to your
                inquiry. We take reasonable precautions to protect your data from
                unauthorized access, alteration, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-white mb-3">
                Your Rights
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Request a copy of the information we have about you</li>
                <li>Ask us to update or correct your information</li>
                <li>Ask us to delete your information entirely</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{" "}
                <a
                  href="mailto:labrynthautomation@gmail.com"
                  className="text-brand-cyan hover:text-brand-white transition-colors"
                >
                  labrynthautomation@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-white mb-3">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-white mb-3">
                Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy, contact us
                at{" "}
                <a
                  href="mailto:labrynthautomation@gmail.com"
                  className="text-brand-cyan hover:text-brand-white transition-colors"
                >
                  labrynthautomation@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
