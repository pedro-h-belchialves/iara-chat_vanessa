import Link from "next/link";

interface ContactButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  number: string;
}

export const ContactButton = ({
  name,
  number,
  ...props
}: ContactButtonProps) => {
  return (
    <Link href={`/${number}`}>
      <button
        type="button"
        {...props}
        className="flex flex-col px-4 py-2 bg-gray-900 w-full rounded-lg border border-gray-800 gap-2 items-center sm:items-start"
      >
        <h1 className="text-sm font-bold text-white">{name || ""}</h1>
        <p className="text-xs text-gray-600">{number}</p>
      </button>
    </Link>
  );
};
