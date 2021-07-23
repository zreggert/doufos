//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Map from "./components/Map";
import Home from "./pages/Home";
import Info from "./pages/Info";
import SignupPage from "./pages/SignupPage";
// Importing a CSS file
import "./css/pages.css";

export default function App() {
  return (
    <div>
      <SignupPage />
    </div>
  );
}
