import styles from "./Register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
       <RegisterForm />
      </div>
    </div>
  );
}
