
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type PageSectionProps = HTMLAttributes<HTMLElement>;

export const PageSection = ({
    children,
    className,
    ...props
}: PageSectionProps) => {
    return (
        <section
            className={cn("py-16 md:py-24 lg:py-32", className)}
            {...props}
        >
            <div className="container px-4 md:px-6">{children}</div>
        </section>
    );
};
