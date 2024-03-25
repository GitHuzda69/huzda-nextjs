import Image from "next/image"
import styles from "./Transaction.module.css"

export function Transaction () {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transaction</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Date</td>
                        <td>Status</td>
                        <td>Amount</td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />John Doe
                            </div>
                        </td>
                        <td>14 Aug 2023</td>
                        <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
                        <td>$1.000</td>
                </tr>
                    <tr>
                        <td>
                        <div className={styles.user}>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />John Doe
                            </div>
                        </td>
                        <td>14 Aug 2023</td>
                        <td><span className={`${styles.status} ${styles.done}`}>Done</span></td>
                        <td>$5.000</td>
                </tr>
                    <tr>
                        <td>
                        <div className={styles.user}>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />John Doe
                            </div>
                        </td>
                        <td>14 Aug 2023</td>
                        <td><span className={`${styles.status} ${styles.cancelled}`}>Canceled</span></td>
                        <td>$2.500</td>
                </tr>
                    <tr>
                        <td>
                        <div className={styles.user}>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />John Doe
                            </div>
                        </td>
                        <td>14 Aug 2023</td>
                        <td><span className={`${styles.status} ${styles.progress}`}>Progress</span></td>
                        <td>$6.969</td>
                </tr>
                </tbody>
                </table>

        </div>
    )
}