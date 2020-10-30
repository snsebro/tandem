import React from 'react'

export default function ProgressBar(props) {
  const { completed } = props

  const containerStyles = {
    height: 6,
    width: '80%',
    backgroundColor: '#EBEBEB',
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#1D1A2A',
    borderRadius: 'inherit',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span></span>
      </div>
    </div>
  )
}
