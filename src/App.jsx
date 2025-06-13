import Hero from "./ui/Hero"
import WhatYouGain from "./components/WhatYouGain";
import Testimonial from "./components/Testimonial"

const App = () => {
  return (
    <div>
      <main>
        <Hero />
        <WhatYouGain />
        <Testimonial/>
      </main>
      <footer></footer>
    </div>
  )
}

export default App;
