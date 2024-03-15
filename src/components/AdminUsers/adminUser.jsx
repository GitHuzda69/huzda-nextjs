import { getUsers } from "@/lib/api"
import styles from "./adminUser.module.css"
import Image from "next/image";
import { deleteUser } from "@/lib/actions";

export default async function AdminUser() {
    const users = await getUsers();

    return (
        <div className={styles.container}>
            <h1>Users</h1>
            {users.map((u) => (
                <div className={styles.user} key={u._id}>
                    <div className={styles.detail}>
                        <Image src={u.img || "/noavatar.png"} alt="" width={50} height={50} />
                        <span>{u.username}</span>
                    </div>
                    <form action={deleteUser}>
                        <button className={styles.userButton}>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    )
} 
