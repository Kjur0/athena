import { VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';
export interface BadgeProps extends ComponentProps<"span">, VariantProps<typeof badgeVariants> {
    LeftIcon?: ReactNode;
    isDismissible?: boolean;
    onDismiss?: () => void;
    dataTestId?: string;
}
export declare const badgeVariants: (props?: ({
    type?: "default" | "info" | "success" | "warning" | "error" | null | undefined;
    variant?: "primary" | "secondary" | "outlined" | "ghost" | null | undefined;
    size?: "small" | "big" | "regular" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
