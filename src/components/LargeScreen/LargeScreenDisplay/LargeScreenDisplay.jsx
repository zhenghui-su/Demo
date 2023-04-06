import React from 'react';

import LargeScreenMap from '../LargeScreenMap/LargeScreenMap.jsx';
import LargeScreenIndustry from '../LargeScreenIndustry/LargeScreenIndustry.jsx';
import LargeScreenCity from '../LargeScreenCity/LargeScreenCity.jsx';
import LargeScreenEnergy from "../LargeScreenEnergy/LargeScreenEnergy.jsx";
import LargeScreenCarbonRadar from "../LargeScreenCarbonRadar/LargeScreenCarbonRadar.jsx";
import LargeScreenNewAQI from "../LargeScreenNewAQI/LargeScreenNewAQI.jsx";

import './LargeScreenDisplay.css';

export default function LargeScreenDisplay() {

  return <section className="main">
    <LargeScreenMap/>{/*地图*/}
    <LargeScreenIndustry/>{/*河流*/}
    <LargeScreenCity/>{/*城市碳排放*/}
    <LargeScreenEnergy/>{/*饼图加折线*/}
    <LargeScreenNewAQI/>{/*折线AQI*/}
    <LargeScreenCarbonRadar/>{/*雷达*/}
  </section>;
}
