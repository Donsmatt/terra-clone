import Hero from "./ui/Hero"
import WhatYouGain from "./components/WhatYouGain"
import Testimonial from "./components/Testimonial"
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <div>
      <main>
        <Homepage />
        <Hero />
        <WhatYouGain />
        <Testimonial/>
      </main>
      <footer></footer>
    </div>
  )
}

export default App;
