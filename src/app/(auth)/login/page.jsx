import styles from "./Login.module.css"
import LoginForm from "@/components/loginForm/loginForm";
import { gitHubLogin, login } from "@/lib/actions";

export default async function LoginPage() {
  return (
    <div className={styles.container} >
      <div className={styles.wrapper} >
      <form action={gitHubLogin}>
        <button className={styles.gitHubLogin}>Continue with GitHub</button>
      </form>
      <LoginForm />
      </div>
    </div>
  );
}
