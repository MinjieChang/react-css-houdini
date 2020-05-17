import React from 'react'
import './index.css'

function registerProperty(){
  window.CSS.registerProperty({
    name: '--registered',
    syntax: '<color>',
    inherits: false,
    initialValue: 'red',
  });
  // window.CSS.registerProperty({
  //   name: '--unregistered',
  //   syntax: '<color>',
  //   inherits: false,
  //   initialValue: 'red',
  // });
}

registerProperty()

export default function(){
  return <div>
    <button className="registered">Background Registered</button>
    <button className="unregistered">Background Not Registered</button>
  </div>
}
