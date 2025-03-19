import Link from "next/link";

export const ColoredLink = ({
  children,
  href,
}: {
  children: string;
  href: string;
}) => {
  return (
    <Link 
      className="text-blue-500 dark:text-retro-highlight underline hover:text-blue-700 dark:hover:text-purple-300 transition-colors" 
      href={href}
    >
      {children}
    </Link>
  );
};
