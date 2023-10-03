import './Header.css'
import Logo from '../../assets/img/logo-removebg-preview.png'
import LinkNav from '../linknav/Linknav'

function Header() {
    return(
        <header>
            <div className='img-logo-div-header'>
                <img src={Logo}/>
            </div>
    <nav>
        <ul>
            <li>
                <LinkNav url="/Home" texto='Home'/>
            </li>
            <li>
                <LinkNav url="/Sobre" texto='Sobre'/>
            </li>
            <li>
                <LinkNav url="/Projetos" texto='Projetos'/>
            </li>
            <li>
                <LinkNav url="/Contato" texto='Contato'/>
            </li>
        </ul>
    </nav>
</header>
    )
}
export default Header