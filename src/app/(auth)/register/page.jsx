import Topbar from "@/components/Topbar/Topbar";
import styles from "./Register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";

export default function Register() {
  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
