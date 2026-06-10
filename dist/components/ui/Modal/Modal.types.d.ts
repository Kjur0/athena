import { HTMLAttributes, ReactNode } from 'react';
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
    actions?: ReactNode;
    isOpen: boolean;
    isClosable?: boolean;
    isCloseOnOverlayClick?: boolean;
    onClose: () => void;
    dataTestId?: string;
}
export declare const overlayVariants: (props?: ({
    state?: "closed" | "open" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const modalVariants: (props?: ({
    state?: "closed" | "open" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const headerVariants: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
export declare const footerVariants: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
