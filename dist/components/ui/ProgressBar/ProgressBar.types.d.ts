import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressBarVariants>, VariantProps<typeof progressBarFillVariants> {
    value: number;
    dataTestId?: string;
}
export declare const progressBarVariants: (props?: ({
    size?: "small" | "regular" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const progressBarFillVariants: (props?: ({
    variant?: "default" | "info" | "success" | "warning" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
