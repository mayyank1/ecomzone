"use client";
import { Card } from "flowbite-react";

export default function Products(prop) {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
          <Card
            className="max-w-sm mx-auto"
            renderImage={() => (
              <img
                className="w-full h-64 object-cover"
                src={prop.img}
                alt={prop.name}
              />
            )}
          >
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {prop.name}
              </h5>
            </a>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">${prop.price}</span>
              <a
                // href="#product"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 active:scale-105 transition duration-300"
              >
                Add to cart
              </a>
            </div>
          </Card>
        </div>
    </>
  );
}