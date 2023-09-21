import './App.css'
import ButtonFatec from './components/ButtonFatec'
import InputFatec from './components/InputFatec'

function App() {//precisa ter letra maiuscula no nome da function, se deixar minuscula pode quebrar htlm

  return (
    <>
      <InputFatec type='text' placeholder='Digite se Nome' value='Gabriel'/>
      <InputFatec type='text' placeholder='Digite seu E-mail' value='teste@email.com'/>
      <InputFatec type='text' placeholder='Digite seu Telefone' value='1234578910'/>
      <ButtonFatec type='submit' label='Enviar'/>
    </>
  )
}

export default App
