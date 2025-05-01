import React from 'react'
import NavComponent from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Products from './components/products.jsx'
import {Foot} from './components/footer.jsx'

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-400">
      <NavComponent />
      <main className="pt-15 sm:pt-14 md:pt-14"> {/* Add padding top to account for fixed navbar */}
        <Hero />
        <Products />
        <Foot />
      </main>
    </div>
    </>
  )
}

export default App
