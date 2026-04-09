export default function Badge({
  children,
  variant = "green",
}: {
  children: React.ReactNode;
  variant?: "green" | "red" | "grey" | "gold" | "blue";
}) {
  const variants = {
    green: "bg-gov-success/10 text-gov-success border-gov-success/20",
    red: "bg-gov-danger/10 text-gov-danger border-gov-danger/20",
    grey: "bg-gray-100 text-gov-grey-mid border-gray-200",
    gold: "bg-accent-gold/10 text-accent-gold border-accent-gold/20",
    blue: "bg-primary-blue/10 text-primary-blue border-primary-blue/20",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-body font-semibold rounded-gov border ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
