export function formatDate(dateString: string, locale: string = "en"): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "sw" ? "sw-KE" : "en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-KE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatFileSize(sizeKb: number): string {
  if (sizeKb >= 1024) {
    return `${(sizeKb / 1024).toFixed(1)} MB`;
  }
  return `${sizeKb} KB`;
}

export function isClosingSoon(dateString: string): boolean {
  const closing = new Date(dateString);
  const now = new Date();
  const diffDays = Math.ceil(
    (closing.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );
  return diffDays >= 0 && diffDays <= 7;
}

export function isPastDeadline(dateString: string): boolean {
  const closing = new Date(dateString);
  const now = new Date();
  return closing.getTime() < now.getTime();
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, "") + "...";
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    general: "bg-primary-green",
    agriculture: "bg-primary-green",
    health: "bg-primary-blue",
    infrastructure: "bg-primary-blue",
    governance: "bg-primary-green",
    education: "bg-primary-blue",
  };
  return colors[category] || "bg-primary-green";
}

export function sanitizeSearchQuery(query: string): string {
  return stripHtml(query).trim().substring(0, 200);
}
