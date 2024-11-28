import { ReactElement } from "react";

export const SideBarItem = ({ text, icon }: {
    text: string;
    icon: ReactElement
}) => {
    return <div className="flex gap-2 text-gray-700 cursor-pointer">   
        <div className="text-gray-700">
           {icon}
        </div> 
        <div>
            {text}
        </div>
    </div>
}