import { useState } from 'react'

import AppHeader from "/src/components/appHeader/AppHeader.jsx"
import AppFooter from "/src/components/appFooter/AppFooter.jsx"

function App() {
  return (
    <div className='app'>
      <AppHeader />
      <main>
        <>
          First Component<br />
          Second Component<br />
          Third Component
        </>
      </main>
      <AppFooter />
    </div>
  )
}

export default App
