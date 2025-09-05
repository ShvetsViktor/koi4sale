import Hero from "/src/components/hero/Hero.jsx";
import Footer from "/src/components/footer/Footer.jsx";
import About1 from "../about1/About1";
import Contact from "../contact/Contact";
import Testimonial from "../testimonial/Testimonial";
import Video from "../testimonial copy/Video";

function App() {
  return (
    <div className='app'>
      <Hero />
      <About1 />
      {/* <Testimonial /> */}
      {/* <Video /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
