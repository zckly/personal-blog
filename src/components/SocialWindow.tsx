import clsx from "clsx";
import Link from "next/link";

const SocialLink = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <Link href={href} target="_blank">
      <button className={clsx("btn w-full", className)}>{children}</button>
    </Link>
  );
};

export const SocialWindow = () => {
  return (
    <div className="window min-w-[360px] md:col-span-1 md:min-w-0">
      <div className="title-bar">
        <h1 className="title">socials</h1>
      </div>
      <div className="separator"></div>
      <div className="modeless-dialog flex flex-col gap-y-2 p-4">
        <SocialLink
          href="https://twitter.com/wenquai"
          className="text-[#1DA1F2]"
        >
          twitter
        </SocialLink>
        <SocialLink href="https://github.com/zckly" className="text-[#333]">
          github
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/zckly/"
          className="text-[#0A66C2]"
        >
          linkedin
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/@wenquai"
          className="text-[#FF0000]"
        >
          youtube
        </SocialLink>
      </div>
    </div>
  );
};
