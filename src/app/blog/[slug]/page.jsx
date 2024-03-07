import Image from "next/image"
import styles from "./singlePost.module.css"

export default function singlePost () {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/nilou_1.png" fill alt="" className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title} >Title</h1>
                <div className={styles.detail}>
                    <Image src="/iura.PNG" alt="" width={50} height={50} className={styles.avatar} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle} >Author</span>
                        <span className={styles.detailValue} >Shuu Iura</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle} >Published</span>
                        <span className={styles.detailValue} >01.01.24</span>
                    </div>
                </div>
                <div className={styles.content}>
                    lorea asindjaisdn asodnjasu asununsdaasnio iaso iomasiomasiodimasoi aomsasiom asonasd uasn dasundmasd ians ndasnodasiomdiomasd
                </div>
            </div>
        </div>
    )
}