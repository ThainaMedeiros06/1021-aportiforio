import './Footer.css'
import Instagram from '../../assets/img/instagram (1).png'
import Facebook from '../../assets/img/facebook (1).png'
import Whatsapp from '../../assets/img/whatsapp (1).png'
import Snapchat from '../../assets/img/snapchat (1).png'
import Twitter from '../../assets/img/twitter (1).png'
import Github from '../../assets/img/github.png'
import Logo from '../../assets/img/logo-removebg-preview.png'

function Footer() {
    return(
        <footer>
             <div className='img-logo-div-footer'>
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
        <ul>
            <li>
                <a href="#">Instagram</a>
            </li>
            <li>
                <a href="#">Facebook</a>
            </li>
            <li>
                <a href="#">WhatsApp</a>
            </li>
            <li>
                <a href="#">Snapchat</a>
            </li>
            <li>
                <a href="#">twitter</a>
            </li>
            <li>
                <a href="#">GitHub</a>
            </li>
        </ul>
    </nav>
    <div className='icones-footer'>
        <img src={Instagram}/>
        <img src={Facebook}/>
        <img src={Whatsapp}/>
        <img src={Snapchat}/>
        <img src={Twitter}/>
        <img src={Github}/>
    </div>
        </footer>
    )
}
export default Footer