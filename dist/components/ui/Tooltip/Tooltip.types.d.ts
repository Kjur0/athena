import { HTMLAttributes, ReactNode } from 'react';
export type TooltipSide = "top" | "right" | "bottom" | "left";
export type TooltipAlign = "start" | "center" | "end";
export interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, "content"> {
    children: ReactNode;
    content: ReactNode;
    side?: TooltipSide;
    align?: TooltipAlign;
    delay?: number;
    dataTestId?: string;
    open?: boolean;
}
