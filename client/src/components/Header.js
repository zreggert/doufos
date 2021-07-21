import "../css/header.css";
import { headerbackground } from "./Objects";

export default function Header() {
  return (
    <header>
      <style scoped>{headerbackground}</style>
      <div className="backimage background"></div>
    </header>
  );
}
