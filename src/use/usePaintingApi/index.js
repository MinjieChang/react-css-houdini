
import React, { useState } from 'react'
import Ripper from './ripper'
import Mask from './mask'
import './index.css'

function registerWorklet() {
  if ("paintWorklet" in CSS) {
    // 可使用本地文件地址，也可使用线上文件
    CSS.paintWorklet.addModule(`${process.env.PUBLIC_URL}/paintWorklet/headerHighlight.js`);
  }
}

registerWorklet()

export default function(){
  const [showRipper, toggleRipper] = useState(false)
  const [showMask, toggleMask] = useState(false)
  return <div>
    <h1 className="fancy">My Cool Header</h1>
    <div>
      <span onClick={() => toggleRipper(!showRipper)}>clickMe Ripper</span>
      <span onClick={() => toggleMask(!showMask)}>clickMe Mask</span>
    </div>
    {showRipper && <Ripper></Ripper>}
    {showMask && <Mask></Mask>}
  </div>
}
