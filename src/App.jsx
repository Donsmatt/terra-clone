import Hero from "./ui/Hero"
import WhatYouGain from "./ui/WhatYouGain"
import Testimonial from "./ui/Testimonial"
import Navbar from "./ui/Navbar";

const App = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <WhatYouGain />
        <Testimonial/>
      </main>
      <footer></footer>
    </div>
  )
}

export default App;
