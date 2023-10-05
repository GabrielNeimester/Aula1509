
//import { Link } from "react-router-dom";
//import ButtonFatec from "../../components/ButtonFatec";
//import Header from "../../components/Header";
import CardsHome from "../../components/CardsHome";
import Layout from "../../components/Layout";

export default function Home() {//precisa ter letra maiuscula no nome da function, se deixar minuscula pode quebrar htlm

  return (
      <Layout>
        <CardsHome></CardsHome>
      </Layout>
      
  )
}

