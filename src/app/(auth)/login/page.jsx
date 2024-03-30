import Topbar from "@/components/Topbar/Topbar";
import styles from "./Login.module.css";
import LoginForm from "@/components/loginForm/loginForm";
import { gitHubLogin } from "@/lib/actions";
import { GitHub, Google } from "@mui/icons-material";

export default async function LoginPage() {
  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form action={gitHubLogin}>
            <button className={styles.socialLogin}>
              <GitHub fontSize="medium" />
            </button>
            <button className={styles.socialLogin}>
              <Google fontSize="medium" />
            </button>
          </form>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
