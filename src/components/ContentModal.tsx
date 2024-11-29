import { useRef, useState } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../config"

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export const ContentModal = ({ open, onClose }) => {
    const titleRef = useRef<HTMLInputElement>()
    const linkRef = useRef<HTMLInputElement>()
    const [type, setType] = useState(ContentType.Youtube)

    async function addContent() {
        const title = titleRef.current?.value
        const link = linkRef.current?.value
        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            title,
            link,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        onClose()``
    }
    return <div>
        {open && <div>
            <div className="h-screen w-screen fixed top-0 left-0 opacity-60 bg-black flex justify-center"></div>
            <div className="h-screen w-screen fixed top-0 left-0 opacity-100 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end cursor-pointer">
                        <div onClick={onClose}>
                            <CrossIcon />
                        </div>
                    </div>
                    <div>
                        <Input reference={titleRef} placeholder="Title"/>
                        <Input reference={linkRef} placeholder="Link"/>
                    </div>
                    <div className="pb-2">
                        <h1>Types</h1>
                        <div className="flex justify-between">
                            <Button onClick={() => {setType(ContentType.Youtube)}} text="Youtube" variant={type == ContentType.Youtube ? "primary" : "secondary"}/>
                            <Button onClick={() => {setType(ContentType.Twitter)}} text="Twitter" variant={type == ContentType.Twitter ? "primary" : "secondary"}/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={addContent} variant="primary" text="Submit"/>
                    </div>
                </span>
            </div>         
                </div>
            </div>}
    </div>
}
