import { ReactElement } from "react"

interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantColor = {
    "primary": "bg-purple-600 text-white cursor-pointer",
    "secondary": "bg-purple-200 text-purple-600 cursor-pointer"
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex gap-2 items-center justify-center cursor-pointer"

export const Button = ({ variant, text, startIcon, onClick, fullWidth, loading }: ButtonProps) => {
    return  <button onClick={onClick} className={`${variantColor[variant]} ${defaultStyles} ${fullWidth ? "w-full" : ""} ${loading? 'opacity-45' : ""} cursor-pointer`} disabled={loading}>
        {startIcon}
        {text}
    </button>
}