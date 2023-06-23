import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SectionFeatured from "./components/SectionFeatured";
import SectionFind from "./components/SectionFind";


export default function App() {
  return (
    <div>
      <Navbar />
      <SectionFind />
      <SectionFeatured />
    </div>
  );
}
