import React, { useState, useEffect } from 'react'


const SingleColor = ({ rgb, weight, type, hex }) => {
  const color = rgb.join(',');
  const hexCode = `#${hex}`.toLocaleUpperCase()
  // console.log(hex);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setCopied(false)
    }, 2000);
    return (() => {
      clearTimeout(timeout);
    })
  })
  const [copied, setCopied] = useState(false)
  return (
    <div style={{ background: `rgb(${color})`, color: type === 'shade' ? 'whitesmoke' : 'black', cursor: 'pointer' }} className="squares" onClick={() => { window.navigator.clipboard.writeText(this.state.textToCopy); setCopied(true) }} >
      <p>{weight}%</p>
      <p>{hexCode.toLocaleUpperCase()}</p>
      {copied && <p style={{ color: 'green' }}>color copied</p>}
    </div>
  )
}

export default SingleColor
