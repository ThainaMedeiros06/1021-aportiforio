import './Header.css'
import Logo from '../../assets/img/logo-removebg-preview.png'

function Header() {
    return(
        <header>
            <div className='img-logo-div-header'>
                <img src={Logo}/>
            </div>
    <nav>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Sobre</a>
            </li>
            <li>
                <a href="#">Projetos</a>
            </li>
            <li>
                <a href="#">Contato</a>
            </li>
        </ul>
    </nav>
</header>
    )
}
export default Header