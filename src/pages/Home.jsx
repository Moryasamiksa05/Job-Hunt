import React from "react";

import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import TESTIMONIALS from "./TESTIMONIALS";
import CallToAction from "./CallToAction";




export default function Home() {
  return (
    <div className="pb-10">

      {/* HERO SECTION */}

      <HeroSection/>
 
      {/* FEATURES SECTION */}

      <FeatureSection/>
      
     
      {/* TESTIMONIALS SECTION */}
      <TESTIMONIALS/>

      {/* CALL TO ACTION */}
      <CallToAction/>
      
    </div>
  );
}

