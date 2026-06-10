import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactElement } from 'react';
export interface BaseButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    LeftIcon?: ReactElement;
    RightIcon?: ReactElement;
    isLoading?: boolean;
    htmlType?: "button" | "submit" | "reset";
}
export type ButtonProps = BaseButtonProps & {
    "aria-label"?: string;
    isIconButton?: boolean;
};
export declare const buttonVariants: (props?: ({
    type?: "primary" | "outlined" | "ghost" | null | undefined;
    variant?: "primary" | "secondary" | "danger" | "ngoSecondary" | "ngoPrimary" | "ngoOption" | null | undefined;
    size?: "small" | "regular" | "ngo-small" | "ngo-regular" | null | undefined;
    isIconButton?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
