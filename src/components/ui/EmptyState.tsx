export default function EmptyState({
  message,
  icon,
}: {
  message: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {icon && (
        <div className="mb-4 text-gov-grey-mid opacity-50">{icon}</div>
      )}
      <p className="text-gov-grey-mid font-body text-sm">{message}</p>
    </div>
  );
}
