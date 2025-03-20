import Link from "next/link";

export const ColoredLink = ({
  children,
  href,
}: {
  children: string;
  href: string;
}) => {
  return (
    <Link className="text-blue-500 underline" href={href}>
      {children}
    </Link>
  );
};
