import { Link } from "react-router-dom";

export default function NotFound(){
    return(
    <>
    <h1>Página não Encontrada</h1>
    <p>A URL digitada não foi encontrada</p>
    <hr />
    <Link to='/'>Voltar para a Home</Link>
    </>)
}