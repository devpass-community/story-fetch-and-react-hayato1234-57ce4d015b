import React from 'react'

export default function Container({ children }) {
  return (
    <div className='container'>
      <header>
        <h1>Evercode Inc. 🐈</h1>
        <h4>Here a random fact about cats:</h4>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
