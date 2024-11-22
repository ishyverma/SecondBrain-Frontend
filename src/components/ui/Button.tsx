import { PlusIcon } from "../../icons/PlusIcon";

interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-500"
}

const sizeStyles = {
    "sm": "px-3 py-2 text-sm",
    "md": "px-4 py-[10px] text-md",
    "lg": "px-5 py-3 text-lg"
}

const defaultStyles = "rounded-md my-1 mx-1 flex"

export const Button = ( props: ButtonProps ) => {
    return <div>
        <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{props.text}{props.endIcon}</button>
    </div>
}
