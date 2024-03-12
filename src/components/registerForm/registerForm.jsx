"use client"
import styles from "./registerForm.module.css"
import { useFormState} from "react-dom";
import { register } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function RegisterForm () {
    const [state, formAction] = useFormState(register, undefined)
    const router = useRouter();
    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router])

    return (
        <div>
             <form action={formAction} className={styles.form}>
          <input type="text" placeholder="Enter username" name="username" />
          <input type="text" placeholder="Enter displayname" name="displayname" />
          <input type="email" placeholder="Enter Email" name="email" />
          <input type="password" placeholder="Enter Password" name="password" />
          <input type="password" placeholder="Enter Password again" name="passwordRepeat" />
          <button>Register</button>
          {state?.error}
          <Link href={"/login"}>
          Already have an account? <b>Login</b>
          </Link>
        </form>
            </div>
    )
}