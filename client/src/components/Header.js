import "../css/header.css";
import { headerbackground } from "./Objects";
import Navtop from "./Navtop";

export default function Header() {
  return (
    <header>
      <style scoped>{headerbackground}</style>
      <div className="backimage background">
        <Navtop />
      </div>
    </header>
  );
}
