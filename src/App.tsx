import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import SectionFeatured from "./components/SectionFeatured";
import SectionFind from "./components/SectionFind";
import SectionTour from "./components/SectionTour";


export default function App() {
  return (
    <div>
      <Navbar />
      <SectionFind />
      <div className="hope">
      <SectionFeatured />
      <SectionTour />
      <Review />
      </div>
    </div>
  );
}
