import Footer from "../components/Footer";
import Navbot from "../components/Navbot";
import Insight from "../components/Insight";
import Header from "../components/Header";
import Navtop from "../components/Navtop";
import "../css/info.css";

export default function Info() {
  return (
    <div className="backgroundinfo">
      <Header />
      <Navtop />
      <Insight />
      <Navbot />
      <Footer />
    </div>
  );
}
