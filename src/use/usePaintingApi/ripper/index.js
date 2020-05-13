import React from 'react'
import './index.css'

function registerWorklet() {
  if ("paintWorklet" in CSS) {
    CSS.paintWorklet.addModule(`${process.env.PUBLIC_URL}/paintWorklet/ripple.js`);
  }
}

function listen() {

  const button = document.querySelector(".ripple");
  const top = button.getBoundingClientRect().top;
  let start = performance.now();
  let x, y;

  document.querySelector(".ripple").addEventListener("click", (evt) => {
    button.classList.add("animating");
    [x, y] = [evt.clientX, evt.clientY - top];
    start = performance.now();
    requestAnimationFrame(function raf(now) {
      const count = Math.floor(now - start);
      button.style.cssText = `--ripple-x: ${x}; --ripple-y: ${y}; --animation-tick: ${count};`;
      if (count > 1000) {
        button.classList.remove("animating");
        button.style.cssText = `--animation-tick: 0`;
        return;
      }
      requestAnimationFrame(raf);
    });
  });
}

function start(){
  registerWorklet()
}
start()

export default class Ripper extends React.Component {
  componentDidMount() {
    listen();
  }

  render() {
    return (<button className="ripple">click me</button>)
  }
}
