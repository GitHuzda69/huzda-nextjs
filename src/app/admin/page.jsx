import { Suspense } from "react"
import styles from "./admin.module.css"
import AdminPost from "@/components/adminPosts/adminPost"
import AdminPostForm from "@/components/AdminPostForm/adminPostForm";
import AdminUser from "@/components/AdminUsers/adminUser";
import AdminUserForm from "@/components/AdminUserForm/adminUserForm";
import { auth } from "@/lib/auth";

export default async function Page() {

  const session = await auth()

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPost />
          </Suspense>
        </div>
        <div className={styles.col}>
            <AdminPostForm userId={session?.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUser />
          </Suspense>
        </div>
        <div className={styles.col}>
            <AdminUserForm userId={session?.user.id} />
        </div>
      </div>
    </div>
  );
}
