import { useState } from 'react'
import HeaderBar from './components/HeaderBar/HeaderBar'
import PostSection from './components/PostSection/PostSection'
import SubredditsBar from './components/SubredditsBar/SubredditsBar'
import './App.css'

function App() {
  

  return (
    <div className='grid grid-cols-[1fr_350px] grid-rows-[auto_1fr] min-h-screen gap-4 bg-stone-200'>
      <header className='col-span-2 bg-stone-50 shadow-xl p-8 rounded'>
        <HeaderBar />
      </header>
      <main className='overflow-y-auto bg-stone-200 rounded'> 
        <PostSection />
      </main>
      <aside className='p-4 bg-stone-50 rounded shadow-xl'>
        <SubredditsBar />
      </aside>
      
    </div>
  )
}

export default App

// NEED TO UPDATE NODE BEFORE ADDING TAILWIND ETC!!!!
// stone in <main> is just to see the sections clearly. 