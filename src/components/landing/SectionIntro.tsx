type SectionIntroProps = {
  label: string;
  title: string;
  text?: string;
};

export function SectionIntro({ label, title, text }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <p>{label}</p>
      <h2>{title}</h2>
      {text ? <span>{text}</span> : null}
    </div>
  );
}
