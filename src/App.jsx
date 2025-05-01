import React from 'react'
import NavComponent from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Products from './components/products.jsx'
import {Foot} from './components/footer.jsx'
import chain from './assets/chain.jpg'
import shoe from './assets/shoe.jpg'
import shirt from './assets/t-shirt.jpg'
import jeans from './assets/jeans.jpg'

const products = [
  {name:"Men's Silver chain",img:chain,price:299},
  {name:"Adidas Shoe",img:shoe,price:199},
  {name:"Rounded neck T-Shirt",img:shirt,price:29},
  {name:"Blue Denim Jeans",img:jeans,price:59}
]

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-400">
      <NavComponent />
      <main className="pt-15 sm:pt-14 md:pt-14"> {/* Add padding top to account for fixed navbar */}
        <Hero />
       
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
              <Products 
                name={item.name}
                img={item.img}
                price={item.price}
                key = {item.name}
              />
          ))}
        </div>

        
        <Foot />
      </main>
    </div>
    </>
  )
}

export default App
