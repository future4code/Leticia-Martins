import React from 'react'
import HomePage from './HomePage/HomePage'
import {useState, useEffect} from 'react'

export default function App () {
  const [idProfile, setIdProfile ] = useState("Id")
    
  return (
    <div>
      <HomePage/>
    </div>
  )
}


