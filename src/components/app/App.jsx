import { Outlet } from "react-router-dom";

import Header from "/src/components/header/Header.jsx";
import Footer from "/src/components/footer/Footer.jsx"


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div id="detail">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
