import { Suspense } from "react"
import styles from "./admin.module.css"
import AdminPost from "@/components/adminPosts/adminPost"
import AdminPostForm from "@/components/AdminPostForm/adminPostForm";
import AdminUser from "@/components/AdminUsers/adminUser";
import AdminUserForm from "@/components/AdminUserForm/adminUserForm";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPost />
          </Suspense>
        </div>
        <div className={styles.col}>
            <AdminPostForm />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUser />
          </Suspense>
        </div>
        <div className={styles.col}>
            <AdminUserForm />
        </div>
      </div>
    </div>
  );
}
