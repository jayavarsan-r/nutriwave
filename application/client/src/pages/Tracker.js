import React from 'react'
import Tracker1 from './Tracker1'
import Sidebar from '../components/Sidebar'

function Tracker() {
  return (
    <div className='flex'>
        <Sidebar/>
        <Tracker1/>
    </div>
  )
}

export default Tracker