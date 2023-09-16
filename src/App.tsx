import Articles from "./components/Articles"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </>
  )
}

export default App
