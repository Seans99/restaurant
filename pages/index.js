import Image from 'next/image'
import Head from "next/head";
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'

export default function Home({ pizzaList }) {

  return (
    <>
    <Head>
    <title>The Godfather || Home</title>
      </Head>
      
    <div>
      <Featured />
        <PizzaList pizzaList={pizzaList}/>
    </div>
    </>
    
  )
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      pizzaList: data, 
    }
  }
}
