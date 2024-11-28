import { useState } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"

export const ContentModal = ({ open, onClose }) => {
    return <div>
        {open && <div className="h-screen w-screen fixed top-0 left-0 bg-black opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end cursor-pointer">
                        <div onClick={onClose}>
                            <CrossIcon />
                        </div>
                    </div>
                    <div>
                        <Input placeholder="Title"/>
                        <Input placeholder="Link"/>
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" text="Submit"/>
                    </div>
                </span>
            </div>         
        </div>}
    </div>
}
