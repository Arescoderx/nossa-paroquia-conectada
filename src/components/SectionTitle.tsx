interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
    </div>
  );
}
