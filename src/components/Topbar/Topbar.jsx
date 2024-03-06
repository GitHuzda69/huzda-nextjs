import Links from "./Links/Links";
import stlyes from "./Topbar.module.css";

export default function Topbar() {
  return (
    <div className={stlyes.container}>
      <div className={stlyes.logo}>HZ</div>
      <div>
        <Links />
      </div>
    </div>
  );
}
