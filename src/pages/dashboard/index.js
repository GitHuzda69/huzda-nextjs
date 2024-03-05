'use client';

import styles from "@/styles/Dashboard.module.css"
import Head from "next/head";
import Link from 'next/link';

export default function Dashboard () {
    return (
        <>
        <Head>
            <title>
                Dashboad Pages
            </title>
        </Head>
        <div className={styles.container}>
        <div className={styles.content}>
            <h1>Halaman Utama</h1>
            <Link href="/" className={""}>Rumah</Link>
            <p>Isi halaman utama Anda di sini...</p>
        </div>
        </div>
        </>
    )
}