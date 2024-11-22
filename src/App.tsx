import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
      <Button variant='primary' text='Add Content' size='sm' startIcon={<PlusIcon size='sm' />} endIcon={<ShareIcon size='sm'/>} onClick={() => {}}/>
      <Button variant='primary' text='Add Content' size='md' startIcon={<PlusIcon size='md'/>} endIcon={<ShareIcon size='md'/>} onClick={() => {}}/>
      <Button variant='primary' text='Add Content' size='lg' startIcon={<PlusIcon size='lg'/>} endIcon={<ShareIcon size='lg'/>} onClick={() => {}}/>
    </>
  )
}

export default App
