import { Outlet } from "react-router-dom";

import ScrollToTop from "/src/components/scrollToTop/ScrollToTop.jsx";
import Header from "/src/components/header/Header.jsx";
import Footer from "/src/components/footer/Footer.jsx"


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div id="detail">
          <ScrollToTop />
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
