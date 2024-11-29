import { useParams } from "react-router-dom"
import { useShare } from "../hooks/useShare"
import { Card } from "../components/Card"
import { Sidebar } from "../components/Sidebar"

export function Share() {
    const { shareId } = useParams()
    const content = useShare(shareId)
    return (
        <div className='p-4 bg-gray-100 min-h-screen'>
          <div>
            <Sidebar />
          </div>
          <div className='ml-72'>
            <div className='flex gap-4 flex-wrap'>
              {content.map(({link, type, title}) => <Card
              type={type}
              link={link}
              title={title}/>
              )}
            </div>
          </div>
        </div>
      ) 
}