import Breadcrumb from "@/components/layout/Breadcrumb";

interface PageHeroProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  variant?: "green" | "navy";
}

export default function PageHero({
  title,
  breadcrumbs,
  variant = "green",
}: PageHeroProps) {
  const bgClass =
    variant === "navy" ? "bg-primary-blue" : "bg-primary-green";

  return (
    <section className={`${bgClass} hero-pattern`}>
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <Breadcrumb items={breadcrumbs} />
        <h1 className="text-3xl lg:text-4xl font-display font-bold text-white mt-4">
          {title}
        </h1>
      </div>
    </section>
  );
}
