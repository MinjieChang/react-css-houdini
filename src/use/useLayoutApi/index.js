
import React from 'react'
import './index.css'

function registerWorklet() {
  if ('layoutWorklet' in CSS) {
    CSS.layoutWorklet.addModule(`${process.env.PUBLIC_URL}/layoutWorklet/masonry.js`);
  } else {
    document.body.innerHTML = 'You need support for <a href="https://drafts.css-houdini.org/css-layout-api/">CSS Layout API</a> to view this demo :(';
  }
}

registerWorklet()

const texts = [
  '1 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. Ius ei dicunt detracto elaboraret. Lorem ipsum dolor sit a',
  '2 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum',
  '3 Lorem ipsum dolor si',
  '4 Lorem ipsum dolor sit amet, consul disputando ne his',
  '5 Lorem ipsum',
  '6 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis definitionem an, et natum ocurreret cum, semper interpretaris cu mea. Eam saperet fierent luptatum no. I',
  '7  Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruisse ex vix. Vix stet honestatis defin',
  '8 Lorem ipsum dolor sit amet, consul dis',
  '9 Lorem ipsum dolor sit amet, consul disputando ne his, et vim accumsan ponderum. Rebum deseruis',
]


export default function(){
  return <div className='masonry'>
    {
      texts.map(text => <div className='text'>{text}</div>)
    }
  </div>
}
