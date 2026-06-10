import { Content, Provider, Trigger } from '@radix-ui/react-tooltip';
import { ComponentProps } from 'react';
export declare const TooltipProvider: ({ delayDuration, ...props }: ComponentProps<typeof Provider>) => import("react/jsx-runtime").JSX.Element;
export declare const TooltipRoot: import('react').FC<import('@radix-ui/react-tooltip').TooltipProps>;
export declare const TooltipTrigger: ({ ...props }: ComponentProps<typeof Trigger>) => import("react/jsx-runtime").JSX.Element;
export declare const TooltipContent: ({ className, sideOffset, children, ...props }: ComponentProps<typeof Content>) => import("react/jsx-runtime").JSX.Element;
