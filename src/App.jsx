import Body from "./components/Body"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Modal from "./components/Modal"
import Navbar from "./components/Navbar"
import "./index.css"


const App = () => {

  return (
    <main className="main">
      <Navbar />
      <Hero />
      <Body />
      <Modal  />
      <Footer />
    </main>
  )
}

export default App