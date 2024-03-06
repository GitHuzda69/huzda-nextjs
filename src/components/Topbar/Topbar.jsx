import Link from "next/link"
import Links from "./Links/Links";
import stlyes from "./Topbar.module.css";

export default function Topbar() {
  return (
    <div className={stlyes.container}>
      <Link  href="/" className={stlyes.logo}>HZ</Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
