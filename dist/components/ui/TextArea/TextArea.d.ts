export interface TextAreaProps extends Omit<React.ComponentProps<"textarea">, "onChange"> {
    className?: string;
    value?: string;
    characterLimitVisibility?: boolean;
    characterLimit?: number;
    label?: string;
    disabled?: boolean;
    isRequired?: boolean;
    isError?: boolean;
    errorText?: string;
    helper?: React.ReactNode;
    onChange: (value: string) => void;
    placeholder?: string;
    dataTestId?: string;
}
export declare function TextArea({ className, isError, label, disabled, errorText, helper, isRequired, value, onChange, characterLimit, characterLimitVisibility, dataTestId, ...props }: TextAreaProps): import("react/jsx-runtime").JSX.Element;
export default TextArea;
