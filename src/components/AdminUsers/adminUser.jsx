import { getUsers } from "@/lib/api"
import styles from "./adminUser.module.css"
import Image from "next/image";

export default function AdminUser () {
    const user = getUsers();

    return (
        <div className={styles.container}>
            <h1>Users</h1>
            {user.map((u) => {
                <div className={styles.user} key={u._id}>
                    <div className={styles.detail}>
                        <Image src={u.img || "/noavatar.png"} alt="" width={50} height={50} />
                        <span>{u.username}</span>
                    </div>
                </div>
            })}
        </div>
    )
}