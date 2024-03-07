import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

export default function PostCard () {
    return (
        <div className={styles.container}> 
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/nilou_1.png" fill className={styles.img} />
                </div>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.date}>01.01.24</p>
                <p className={styles.desc}>Lorem ipsum dolor si amet yadf kaskjso asoems masdlk asj iasasmma nsnnsr.  kasdosa i asidjias maA aja d</p>
                <Link href="/blog/post" className={styles.links} >Read More...</Link>
            </div>
        </div>
    )
}