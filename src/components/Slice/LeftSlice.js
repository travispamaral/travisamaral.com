import React from 'react'

let styles = {
  position: 'fixed',
  width: '100%',
  height: 'calc(50% + 100px)',
  bottom: '0',
  left: '0',
  transition: 'height .5s',
  background: 'linear-gradient(15deg, #DEE0FB 21%, transparent 0)',
  zIndex: '-100'
}

function LeftSlice() {
  return <div id="left-right" style={styles}></div>
}

export default LeftSlice
