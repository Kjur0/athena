import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
export interface AvatarProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    fallback?: "initials" | "icon";
    name?: string;
    gender?: "male" | "female";
    color?: string;
    dataTestId?: string;
}
export declare const avatarVariants: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
