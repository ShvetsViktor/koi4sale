import Header from "/src/components/header/Header.jsx";
import HomePage from "/src/pages/HomePage";
import Footer from "/src/components/footer/Footer.jsx"


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App
