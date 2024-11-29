import { useState } from 'react'
import '../App.css'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ContentModal } from '../components/ContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'

export function Dashboard() {
    const [openModal, setOpenModal] = useState(false)
    const {content} = useContent();
    return (
      <div className='p-4 bg-gray-100 min-h-screen'>
        <div>
          <Sidebar />
        </div>
        <div className='ml-72'>
          <ContentModal open={openModal} onClose={() => {
            setOpenModal(false)
          }}/>
          <div className='flex justify-end gap-4'>
            <Button onClick={() => setOpenModal(true)} variant='primary' text='Add Content' startIcon={<PlusIcon />}/>
            <Button onClick={async () => {
              const request = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                share: true
              }, {
                headers: {
                  "Authorization": localStorage.getItem("token")
                }
              })
              const shareUrl = `http://localhost:5173/share/${request.data.link}`;
              navigator.clipboard.writeText(shareUrl)
              .then(() => alert('Copied to clipboard'))

            }} variant='secondary' text='Share Brain' startIcon={<ShareIcon />}/>
          </div>
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
