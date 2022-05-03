import styles from "../styles/Menu.module.css";
import Head from "next/head";

export default function Menu() {
  
  return (
    <>
      <Head>
        <title>The Godfather || Menu</title>
      </Head>

      <div className={styles.container}>
        <h1>Menu page</h1>
      </div>
    </>    
  )
}