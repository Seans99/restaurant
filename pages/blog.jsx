import styles from "../styles/Blog.module.css";
import Head from "next/head";

export default function Blog() {
  
  return (
    <>
      <Head>
        <title>The Godfather || Blog</title>
      </Head>

      <div className={styles.container}>
        <h1>Blog page</h1>
      </div>
    </>    
  )
}