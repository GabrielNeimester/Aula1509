
import ButtonFatec from "../../components/ButtonFatec";
import InputFatec from "../../components/InputFatec";
import Header from "../../components/Header";

export default function Contatos() {//precisa ter letra maiuscula no nome da function, se deixar minuscula pode quebrar htlm

  return (
    <>
      <Header/>
      <InputFatec type='text' placeholder='Digite se Nome' defaultValue='Gabriel'/>
      <InputFatec type='text' placeholder='Digite seu E-mail' defaultValue='teste@email.com'/>
      <InputFatec type='text' placeholder='Digite seu Telefone' defaultValue='1234578910'/>
      <ButtonFatec type='submit' label='Enviar'/>
      <hr />
      
    </>
  )
}