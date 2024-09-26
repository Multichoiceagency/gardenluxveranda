import Image from "next/image";
import Hero from "./components/hero/page";
import React from 'react'
import GardenInformatie from "./components/GardenInformatie";
import About from "./components/about/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <GardenInformatie />
      <About />
    </div>
  )
}
