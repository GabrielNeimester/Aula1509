import { Link } from "react-router-dom"
import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.Header}>
            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/tarefas'>Tarefas</Link>
            <Link to='/contatos'>Contatos</Link>
            
        </header>
    )
}

export default Header