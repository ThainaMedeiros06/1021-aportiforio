import './Portfolio.css'
import Pessoa from '../../assets/img/download-removebg-preview.png'

function Portfolio(){
    return(
        <main>
            <div className='div-saibamais'>
                <ul>
                    <li>
                        <p>Olá pessoas,</p>
                    </li>
                    <li>
                        <h1 className='Titulo1'>Me chamo Thainá Medeiros</h1>
                    </li>
                    <li>
                        <p>Sejam bem-vidas ao meu portfolio.</p>
                    </li>
                </ul>
                <button className='button-saibamais'>Saiba mais sobre mim</button>
            </div>
            <div className='img-div-pessoa'>
                <img src={Pessoa}/>   
             </div>
        </main>
    )
}
export default Portfolio