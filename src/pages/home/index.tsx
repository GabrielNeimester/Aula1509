
import { Link } from "react-router-dom";
import ButtonFatec from "../../components/ButtonFatec";
import Header from "../../components/Header";

export default function Home() {//precisa ter letra maiuscula no nome da function, se deixar minuscula pode quebrar htlm

  return (
    <>
      <Header/>
      <h1>Home</h1>
      <h2>Bem-Vindo ao +Tarefas</h2>
      <p>O +Tarefas é um projeto desenvolvido que visa facilitar suas rotinas do dia-a-dia cadastrando clique no botão abaixo para começar a usá-lo</p>
      <Link to='/tarefas'><ButtonFatec type='submit' label='Ir para lista de Tarefas'/></Link>
      
    </>
  )
}

