import { useState } from 'react'

import AppHeader from "/src/components/appHeader/AppHeader.jsx"
import AppFooter from "/src/components/appFooter/AppFooter.jsx"
import HeroBanner from "/src/components/heroBanner/HeroBanner.jsx";
import Carousel from "/src/components/carousel/Carousel.jsx";

function App() {
  return (
    <div className='app'>
      <header><AppHeader /></header>
      <main>
        <HeroBanner />
        <Carousel />
        <section>section 3</section>
      </main>
      <footer><AppFooter /></footer>
    </div>
  )
}

export default App
