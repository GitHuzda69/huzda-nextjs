"use client"

import styles from "./LoginForm.module.css";
import { useFormState} from "react-dom";
import { login } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function LoginForm () {
    const [state, formAction] = useFormState(login, undefined)
    return (
        <form action={formAction} className={styles.form}>
        <input type="text" placeholder="Enter username" name="username" />
        <input type="password" placeholder="Enter password" name="password" />
        <button>Login</button>
        {state?.error}
        <Link href={"/register"}>
            Doesn't have an account? <b>Register</b>
        </Link>
      </form>
    )
}