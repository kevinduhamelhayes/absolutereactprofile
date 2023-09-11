import Body from "./components/Body"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
//import Modal from "./components/Modal"
import Navbar from "./components/Navbar"
import Span from "./components/Span"

const App = () => {
  return (
    <main className="main">
      <Navbar />
      <Hero />
      <Span />
      <Body />
      <Footer />
    </main>
  )
}

export default App
