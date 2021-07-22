// Importing a CSS file
import "../css/landing.css";
import { headerbackground } from "./Objects";
// Importing Components
import Navtop from "./Navtop";
import Header from "./Header";

export default function Landing() {
  return (
    <section>
      <style scoped>{headerbackground}</style>
      <div className="backimage background">
        <Header />
        <Navtop />
      </div>
    </section>
  );
}
