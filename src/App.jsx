import Hero from "./ui/Hero"
import WhatYouGain from "./ui/WhatYouGain"
import Testimonial from "./ui/Testimonial"
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <WhatYouGain />
        <Testimonial/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App;
