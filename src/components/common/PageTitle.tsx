import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type PageTitleProps = HTMLAttributes<HTMLDivElement>;

export const PageTitle = ({
    children,
    className,
    ...props
}: PageTitleProps) => {
    return (
        <div
            className={cn("max-w-4xl mx-auto text-center mb-16", className)}
            {...props}
        >
            {children}
        </div>
    );
};

type PageSubtitleProps = HTMLAttributes<HTMLParagraphElement>;

export const PageSubtitle = ({
    children,
    className,
    ...props
}: PageSubtitleProps) => {
    return (
        <p
            className={cn("text-xl text-card-foreground/80", className)}
            {...props}
        >
            {children}
        </p>
    );
};

type PageTitleHeaderProps = HTMLAttributes<HTMLHeadingElement>;

export const PageTitleHeader = ({
    children,
    className,
    ...props
}: PageTitleHeaderProps) => {
    return (
        <h2
            className={cn(
                "text-4xl md:text-5xl font-bold text-card-foreground mb-6",
                className,
            )}
            {...props}
        >
            {children}
        </h2>
    );
};
