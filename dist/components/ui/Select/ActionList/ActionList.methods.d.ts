import { Content, Item, Root, Trigger } from '@radix-ui/react-dropdown-menu';
import { ComponentProps } from 'react';
export declare function DropdownMenu({ ...props }: ComponentProps<typeof Root>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuTrigger({ ...props }: ComponentProps<typeof Trigger>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuContent({ className, sideOffset, align, ...props }: ComponentProps<typeof Content>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuItem({ className, inset, variant, ...props }: ComponentProps<typeof Item> & {
    inset?: boolean;
    variant?: "default" | "danger";
}): import("react/jsx-runtime").JSX.Element;
