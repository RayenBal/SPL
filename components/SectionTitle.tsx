type Props = { title: string; subtitle?: string };

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-foreground/80">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded" />
    </div>
  );
}


