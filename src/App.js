import React, { useEffect, useRef, useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  // console.log(new Values('#262223').all(10));
  useEffect(() => {
    const timeout = setTimeout(() => {
      seterror(false)
    }, 2000);
    return (() => {
      clearTimeout(timeout)
    })
  })
  const [color, setcolor] = useState(new Values('#EF9021').all(10))
  const [error, seterror] = useState(false)
  const [colorCode, setColorCode] = useState('')
  const inpt = useRef()
  const count = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(Number(count.current.value));

      setcolor(new Values(colorCode).all(Number(count.current.value) || 10))
      inpt.current.style.outline = '1px solid rgba(0, 148, 247, 0.603)'
    } catch (error) {
      seterror(true);
      console.log(error.message + 'something went wrong');
    }

  }

  return (
    <section>
      <h2>Generate colors</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="color-inp">
          <label htmlFor="color" style={{ color: error && `crimson` }} >{error ? `Invalid color code` : `Color code:`}</label>
          <input ref={inpt} type="text" placeholder='#EF9021' onChange={(e) => setColorCode(e.target.value)} />
        </div>
        <button className='btn'>Go</button>
        <div className="count-colors">
          <input ref={count} type="text" style={{ borderRadius: 5 + 'px' }} placeholder='How many colors? eg: 25' />
        </div>
      </form>
      <div className="colors">
        {color.map((item, index) => {
          return <SingleColor key={index} index={index} {...item} hex={item.hex} />
        })}

      </div>
    </section>
  )
}

export default App
