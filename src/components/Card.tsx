import { ShareIcon } from "../icons/ShareIcon"

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardProps) => {
    return <div>
        <div className="rounded-md bg-white border border-gray-200 p-4 max-w-80">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center text-md">
                    <div className="text-gray-500">
                        <ShareIcon />
                    </div>
                    {title}
                </div>
                <div className="flex gap-2 items-center text-gray-500">
                    <div>
                        <a href={link} target="_blank">
                            <ShareIcon />
                        </a>
                    </div>
                    <div>
                        <ShareIcon />
                    </div>
                </div>
            </div>
            <div className="pt-4 min-h-48 min-w-72">
                {type === "youtube" && <iframe className="w-full" src={link.replace("watch","embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
            </div>
            
        </div>
    </div>
}   