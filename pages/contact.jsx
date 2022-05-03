import styles from "../styles/Contact.module.css";
import Head from "next/head";

export default function contact() {
  
  return (
    <>
      <Head>
        <title>The Godfather || Contact</title>
      </Head>

      <div className={styles.container}>
        <h1>Contact page</h1>
      </div>
    </>    
  )
}