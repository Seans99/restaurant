import styles from "../styles/ProductList.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function ProductList({pizzas}) {
  
  return (
    <>
      <Head>
        <title>The Godfather || Products</title>
      </Head>
    <div className={styles.container}>
      <h1>LIST OF PIZZAS</h1>
        {pizzas.map((pizza) => (
        <Link href={`/product/${pizza._id}`}>
          <div className={styles.card}>
              <Image className={styles.img} src={pizza.img} alt="" width="300" height="300" />
            <div className={styles.info}>
              <h1 className={styles.title}>{pizza.title}</h1>
              <p clasName={styles.price}>${pizza.prices[0]}</p>
              <p className={styles.desc}>{pizza.desc}</p>
            </div>          
          </div>  
        </Link>              
      ))}   
    </div>
    </>    
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();
  return {
    props: {
      pizzas: data, 
    }
  }
}