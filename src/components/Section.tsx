import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {label && (
        <span className="text-brand-purple text-sm font-semibold tracking-widest uppercase mb-4 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-brand-muted max-w-2xl mx-auto text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
