import { BrainIcon } from "../icons/BrainIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SideBarItem } from "./SidebarItem"

export const Sidebar = () => {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center gap-4">
            <div className=" text-purple-600">
                <BrainIcon />
            </div>
            Brainly
        </div>
        <div className="pt-8 flex flex-col gap-2">
            <SideBarItem text="Twitter" icon={<TwitterIcon />}/>
            <SideBarItem text="Youtube" icon={<YoutubeIcon />}/>
        </div>
    </div>
}