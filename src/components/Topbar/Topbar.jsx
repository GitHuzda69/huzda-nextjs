import Link from "next/link";
import Links from "./Links/Links";
import stlyes from "./Topbar.module.css";
import { auth } from "@/lib/auth";

export default async function Topbar() {
  const session = await auth();
  return (
    <div className={stlyes.container}>
      <Link href="/" className={stlyes.logo}>
        HZ
      </Link>
        <Links session={session} />
    </div>
  );
}
