import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-0.5 md:px-1 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
