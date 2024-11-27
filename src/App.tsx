import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <div className='p-4'>
      <div className='flex justify-end gap-4'>
        <Button variant='primary' text='Add Content' startIcon={<PlusIcon />}/>
        <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon />}/>
      </div>
      <div className='flex gap-4'>
        <Card type='twitter' link='https://x.com/100xDevs/status/1861756263824347210' title='First Tweet'/>
        <Card type='youtube' link='https://www.youtube.com/watch?v=ofHGE-85EIA' title='First Youtube Video'/>
      </div>
    </div>
  )
}

export default App
