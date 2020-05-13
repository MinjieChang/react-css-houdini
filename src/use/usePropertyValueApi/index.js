import React from 'react'
import registerProperty from './usePropertyValue';
import './index.css'

registerProperty()

export default function(){
  return <div>
    <button className="registered">Background Registered</button>
    <button className="unregistered">Background Not Registered</button>
  </div>
}
