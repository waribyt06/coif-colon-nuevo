interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
}

// Reusable section header — establishes consistent visual hierarchy across
// every section (eyebrow chip → title → supporting lead).
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-lg leading-relaxed text-ink-700">{lead}</p>
      )}
    </div>
  );
}
