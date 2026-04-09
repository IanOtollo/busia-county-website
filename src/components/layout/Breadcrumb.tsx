import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-body text-sm">
      <ol className="flex items-center flex-wrap gap-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            )}
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-white/90 font-medium"
                aria-current={index === items.length - 1 ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
