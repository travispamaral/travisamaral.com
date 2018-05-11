import React from 'react'

const date = new Date()

const styles = {
  position: 'fixed',
  bottom: '1rem',
  left: '0',
  right: '0',
  textAlign: 'center',
  fontSize: '12px'
}

function Footer() {
  return <footer className="footer" style={styles}>&copy; Travis Amaral | {date.getFullYear()}</footer>
}

export default Footer
