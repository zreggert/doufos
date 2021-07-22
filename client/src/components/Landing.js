import "../css/landing.css";
import { headerbackground } from "./Objects";
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
