import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux";


export default function Navbar() {

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/image/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>  
          <Link href="/">
            <li className={styles.listItem}>Homepage</li>
          </Link> 
          <Link href="productList">
            <li className={styles.listItem}>Products</li>
          </Link>
          <Link href="/menu">
            <li className={styles.listItem}>Menu</li>
          </Link>
            <h1 className={styles.navTitle}>The Godfather</h1>
          <Link href="/events">
            <li className={styles.listItem}>Events</li>
          </Link>
          <Link href="/blog">
            <li className={styles.listItem}>Blog</li>
          </Link>
          <Link href="/contact">
            <li className={styles.listItem}>Contact</li>
          </Link>          
        </ul>
      </div>
      <Link href="/cart">
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/image/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>      
    </div>
  )
}