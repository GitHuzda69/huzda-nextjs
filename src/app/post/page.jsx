import Image from "next/image";
import styles from "./Post.module.css";

export default function Page () {
    return (
        <div  className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/navia.PNG" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Ypur Name" />
                    <input type="text" placeholder="Email Address" />
                    <textarea name="desc" id="desc" placeholder="Desc" cols="30" rows="10" />
                    <button>Post</button>
                </form>
            </div>
        </div>
    )
}