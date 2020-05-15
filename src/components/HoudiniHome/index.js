import React from 'react'
import './index.css'

function registerProperty(){
  window.CSS.registerProperty({
    name: '--my-len',
    syntax: '<number>',
    inherits: false,
    initialValue: Math.random(),
  });
  window.CSS.registerProperty({
    name: '--my-saturation',
    syntax: '<number>',
    inherits: false,
    initialValue: Math.random(),
  });
}
registerProperty()

function setProp(value) {
  document.querySelector('.home').style.setProperty('--my-len', value);
  document.querySelector('.home').style.setProperty('--my-saturation', value);
  // console.log(document.querySelector('.home').classList)
}

export default function(){
  return <div>
    <h2 className="home">点亮我</h2>
    <span onClick={() => setProp(Math.random())}>click me</span>
  </div>
}