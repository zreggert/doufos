//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Map from "./components/Map";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Navbot from "./components/Navbot";
// Importing a CSS file
import "./css/pages.css";

export default function App() {
  return (
    <div>
      <Landing />
      <Navbot />
      <Footer />
    </div>
  );
}
