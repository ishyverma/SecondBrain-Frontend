import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  return (
    <>
      <Button variant='secondary' text='Add Content' size='sm' startIcon={<PlusIcon />} onClick={() => {}}/>
      <Button variant='secondary' text='Add Content' size='md' onClick={() => {}}/>
      <Button variant='secondary' text='Add Content' size='lg' onClick={() => {}}/>
    </>
  )
}

export default App
