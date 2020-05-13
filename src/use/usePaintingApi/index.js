
import React from 'react'
import Ripper from './ripper'
import './index.css'

function registerWorklet() {
  if ("paintWorklet" in CSS) {
    // 可使用本地文件地址，也可使用线上文件
    CSS.paintWorklet.addModule(`${process.env.PUBLIC_URL}/paintWorklet/headerHighlight.js`);
  }
}

registerWorklet()

export default function(){
  return <div>
    <h1 className="fancy">My Cool Header</h1>
    <Ripper></Ripper>
  </div>
}
