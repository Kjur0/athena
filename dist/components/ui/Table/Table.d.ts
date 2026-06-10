import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const tableContainerVariants: (props?: ({
    isMobileScrollable?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const tableCellVariants: (props?: ({
    align?: "center" | "right" | "left" | null | undefined;
    variant?: "body" | "header" | null | undefined;
    mobileFullWidth?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TableColumn<T> {
    key: string;
    header: React.ReactNode;
    render?: (row: T) => React.ReactNode;
    width?: string | number;
    align?: VariantProps<typeof tableCellVariants>["align"];
}
export interface TablePagination {
    page: number;
    totalPages: number;
    totalElements: number;
    onChange: (page: number) => void;
}
export interface TableProps<T> extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tableContainerVariants> {
    columns: TableColumn<T>[];
    data: T[];
    getRowKey: (row: T) => string;
    isSelectable?: boolean;
    selectedRowKeys?: string[];
    onSelectedRowKeysChange?: (keys: string[]) => void;
    actions?: (row: T) => React.ReactNode;
    pagination?: TablePagination;
    emptyState?: React.ReactNode;
    dataTestId?: string;
}
declare function Table<T>({ columns, data, getRowKey, isSelectable, selectedRowKeys, onSelectedRowKeysChange, actions, pagination, emptyState, isMobileScrollable, dataTestId, className, ...props }: TableProps<T>): import("react/jsx-runtime").JSX.Element;
export { Table };
export default Table;
