import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
export interface InfoMessageProps extends React.ComponentProps<"div">, VariantProps<typeof infoMessageVariants> {
    children: ReactNode;
    LeftIcon?: ReactNode;
}
export declare const infoMessageVariants: (props?: ({
    variant?: "default" | "info" | "success" | "warning" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const infoMessageIconVariants: (props?: ({
    variant?: "default" | "info" | "success" | "warning" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const variantIconMap: {
    readonly default: string;
    readonly info: string;
    readonly success: string;
    readonly warning: string;
    readonly error: string;
};
