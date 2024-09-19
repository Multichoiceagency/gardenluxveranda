import Image from "next/image";
import Hero from "./components/hero/page";
import React from 'react'
import GardenTransformationSection from "./components/(home)/GardenTransformationSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <GardenTransformationSection />
    
    </div>
  )
}
