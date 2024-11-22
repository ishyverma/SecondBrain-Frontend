import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-500"
}

const sizeStyles = {
    "sm": "px-3 py-2 text-sm",
    "md": "px-4 py-[10px] text-md font-medium",
    "lg": "px-5 py-3 text-lg font-semibold"
}

const defaultStyles = "rounded-md my-1 mx-1 flex gap-1"

export const Button = ( props: ButtonProps ) => {
    return <div>
        <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="justify-self-start self-center">{props.startIcon}</div> : null}{props.text}{props.endIcon ? <div className="justify-self-start self-center">{props.endIcon}</div> : null}</button>
    </div>
}
