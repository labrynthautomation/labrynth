import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import { Section, SectionHeader } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { Navigation } from "@/components/Navigation";
import {
  Clock,
  PhoneCall,
  CalendarX,
  FileStack,
  MessageSquare,
  Users,
  ArrowRight,
  Bot,
  Calendar,
  Bell,
  CheckCircle,
  Workflow,
  Target,
  Sparkles,
  Cog,
} from "lucide-react";

const timeThieves = [
  {
    icon: PhoneCall,
    title: "Phone Tag",
    description: "Endless back-and-forth calls that never connect at the right time.",
  },
  {
    icon: CalendarX,
    title: "Scheduling Chaos",
    description: "Manual appointment booking that eats hours of productive time.",
  },
  {
    icon: FileStack,
    title: "Data Entry",
    description: "Repetitive form filling and system updates across multiple platforms.",
  },
  {
    icon: MessageSquare,
    title: "Follow-Up Fatigue",
    description: "Remembering to check in with leads and clients consistently.",
  },
  {
    icon: Clock,
    title: "No-Show Management",
    description: "Dealing with missed appointments and last-minute cancellations.",
  },
  {
    icon: Users,
    title: "Client Onboarding",
    description: "Walking each new client through the same process repeatedly.",
  },
];

const engineSteps = [
  {
    icon: Bot,
    title: "AI Reception",
    description: "Intelligent first contact that qualifies and routes inquiries 24/7.",
    color: "brand-purple",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automated booking that syncs with your calendar and preferences.",
    color: "brand-cyan",
  },
  {
    icon: Bell,
    title: "Proactive Reminders",
    description: "Multi-channel notifications that reduce no-shows by 80%.",
    color: "brand-purple",
  },
  {
    icon: CheckCircle,
    title: "Seamless Check-In",
    description: "Frictionless arrival experience with automated confirmations.",
    color: "brand-cyan",
  },
];

const labPillars = [
  {
    icon: Target,
    title: "Precision",
    description: "Every automation is calibrated to your specific workflow, not generic templates.",
  },
  {
    icon: Cog,
    title: "Automation",
    description: "We eliminate repetitive tasks so you can focus on high-value work.",
  },
  {
    icon: Sparkles,
    title: "Bespoke Intelligence",
    description: "AI threads custom-woven to understand your business language.",
  },
];

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-white mb-6 leading-tight">
              Navigate the{" "}
              <span className="gradient-accent-text">Complexity</span>
              <br />
              of Scale.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Labrynth designs intelligent AI threads to automate your mundane,
              solving the maze of local business efficiency.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#entry"
                className="gradient-accent px-8 py-4 rounded-lg font-semibold text-brand-white hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 group"
              >
                Find Your Thread
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#maze"
                className="px-8 py-4 rounded-lg font-semibold border border-brand-muted/30 text-brand-white hover:border-brand-purple transition-colors"
              >
                Explore the Maze
              </a>
            </div>
          </FadeIn>

          {/* Decorative Element */}
          <FadeIn delay={0.6} className="mt-20">
            <div className="flex items-center justify-center gap-2 text-brand-muted/50">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-brand-purple/50"></div>
              <Workflow className="w-5 h-5" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-brand-cyan/50"></div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Maze Section */}
      <Section id="maze">
        <FadeIn>
          <SectionHeader
            label="The Maze"
            title="Time Thieves Lurking in Your Business"
            description="These repetitive tasks silently drain your most valuable resource. Recognize any?"
          />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {timeThieves.map((thief) => (
            <FadeInStaggerItem key={thief.title}>
              <div className="glow-card p-6 h-full">
                <thief.icon className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="text-xl font-semibold text-brand-white mb-2">
                  {thief.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {thief.description}
                </p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </Section>

      {/* The Thread Section */}
      <Section id="thread" className="bg-brand-white/[0.02]">
        <FadeIn>
          <SectionHeader
            label="The Thread"
            title="The Concierge Engine"
            description="A complete scheduling and check-in automation system that works while you sleep."
          />
        </FadeIn>

        {/* Technical Diagram */}
        <FadeIn delay={0.2} className="mb-16">
          <div className="glow-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {engineSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Step Number */}
                    <div className="w-8 h-8 rounded-full bg-brand-obsidian border border-brand-muted/30 flex items-center justify-center text-sm font-mono text-brand-muted mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon Container */}
                    <div className={`w-16 h-16 rounded-xl bg-${step.color}/10 border border-${step.color}/30 flex items-center justify-center mb-4`}
                      style={{
                        backgroundColor: step.color === "brand-purple" ? "rgba(124, 58, 237, 0.1)" : "rgba(6, 182, 212, 0.1)",
                        borderColor: step.color === "brand-purple" ? "rgba(124, 58, 237, 0.3)" : "rgba(6, 182, 212, 0.3)",
                      }}
                    >
                      <step.icon
                        className="w-8 h-8"
                        style={{ color: step.color === "brand-purple" ? "#7C3AED" : "#06B6D4" }}
                      />
                    </div>

                    <h4 className="text-lg font-semibold text-brand-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-brand-muted text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line */}
                  {index < engineSteps.length - 1 && (
                    <div className="hidden md:block absolute top-14 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-brand-purple/50 to-brand-cyan/50"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Features Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
          <FadeInStaggerItem>
            <div className="text-center p-6">
              <div className="text-4xl font-bold gradient-accent-text mb-2">24/7</div>
              <p className="text-brand-muted">Always-On Availability</p>
            </div>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <div className="text-center p-6">
              <div className="text-4xl font-bold gradient-accent-text mb-2">80%</div>
              <p className="text-brand-muted">Reduction in No-Shows</p>
            </div>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <div className="text-center p-6">
              <div className="text-4xl font-bold gradient-accent-text mb-2">10+</div>
              <p className="text-brand-muted">Hours Saved Weekly</p>
            </div>
          </FadeInStaggerItem>
        </FadeInStagger>
      </Section>

      {/* The Lab Section */}
      <Section id="lab">
        <FadeIn>
          <SectionHeader
            label="The Lab"
            title="The Labrynth Approach"
            description="We don't believe in one-size-fits-all. Every business maze is unique, and so is our solution."
          />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {labPillars.map((pillar) => (
            <FadeInStaggerItem key={pillar.title}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl gradient-accent mx-auto mb-6 flex items-center justify-center">
                  <pillar.icon className="w-8 h-8 text-brand-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-brand-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.4} className="mt-16">
          <div className="glow-card-cyan p-8 md:p-12 text-center">
            <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
              "We weave AI threads through your existing processes—no rip and replace.
              Just <span className="text-brand-cyan">intelligent enhancement</span> that
              feels like it was always there."
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* The Entry Section */}
      <Section id="entry" className="bg-brand-white/[0.02]">
        <FadeIn>
          <SectionHeader
            label="The Entry"
            title="Ready to Escape the Maze?"
            description="Tell us about the time thief stealing your hours. We'll show you the thread out."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="glow-card p-8 md:p-12 max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </FadeIn>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-brand-muted/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold gradient-accent-text">Labrynth</div>
          <p className="text-brand-muted text-sm">
            © {new Date().getFullYear()} Labrynth Automation. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
