import React from 'react'
import './input.css'

function Hero() {
  return (
    <>
      <main className="min-h-screen bg-no-repeat bg-cover bg-center hero text-white flex flex-col items-center justify-between p-5 sm:pb-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-pre uppercase font-bold text-center">
          🔥 Big Sale on Summer Collection!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-center">
          Up to 50% off on selected items.
        </p>
        <button className="text-3xl sm:text-4xl md:text-5xl p-4 sm:p-6 shadow-2xl/80 md:hover:bg-red-500 active:scale-110 transition duration-300 rounded-full">
          Shop now!
        </button>
      </main>
    </>
  );
}

export default Hero