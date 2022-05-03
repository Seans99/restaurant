import styles from "../styles/Events.module.css";
import Head from "next/head";

export default function Events() {
  
  return (
    <>
      <Head>
        <title>The Godfather || Events</title>
      </Head>

      <div className={styles.container}>
        <h1>Events page</h1>
      </div>
    </>    
  )
}