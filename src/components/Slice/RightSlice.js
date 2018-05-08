import React from 'react'

let styles = {
  position: 'fixed',
  width: '100%',
  height: 'calc(50% + 100px)',
  bottom: '0',
  left: '0',
  transition: 'height .5s',
  background: 'linear-gradient(-12deg, #BCC1F7 30%, transparent 0)',
  zIndex: '-101',
}

function RightSlice() {
  return <div id="slice-right" style={styles}></div>
}

export default RightSlice
