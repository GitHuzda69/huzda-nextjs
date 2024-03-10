import { register } from "@/lib/actions";
import styles from "./Register.module.css";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={register} className={styles.form}>
          <input type="text" placeholder="Enter username" name="username" />
          <input type="text" placeholder="Enter displayname" name="displayname" />
          <input type="email" placeholder="Enter Email" name="email" />
          <input type="password" placeholder="Enter Password" name="password" />
          <input type="password" placeholder="Enter Password again" name="passwordRepeat" />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}
