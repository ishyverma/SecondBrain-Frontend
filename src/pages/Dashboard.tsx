import { useState } from 'react'
import '../App.css'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ContentModal } from '../components/ContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/Sidebar'

export function Dashboard() {
    const [openModal, setOpenModal] = useState(false)
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
            <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon />}/>
          </div>
          <div className='flex gap-4'>
            <Card type='twitter' link='https://x.com/100xDevs/status/1861756263824347210' title='First Tweet'/>
            <Card type='youtube' link='https://www.youtube.com/watch?v=ofHGE-85EIA' title='First Youtube Video'/>
          </div>
        </div>
      </div>
    )
}
