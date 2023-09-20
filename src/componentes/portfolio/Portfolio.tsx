import {useState} from 'react'
import Projeto  from '../projeto/Projeto'
import './Portfolio.css'
import Pessoa from '../../assets/img/download-removebg-preview.png'
type ProjetoType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}


function Portfolio(){
    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[]= [
        {
            id:1,
            titulo:'Voleibol NVC',
            descricao:'Este é um projeto de voleibol de Naviraí onde o time participa de vários jogos dentro e fora da cidade. Todo ano o time participa dos jogos da Conesul. ',
            imagem:'volei.jpg'
        },
        {
            id:2,
            titulo:'Estágio',
            descricao:'Esse estágio foi feito na Regrigeração do Gilmar, atuei na área administrativa.',
            imagem:'estagio.jpg'
        },
        {
            id:3,
            titulo:'Site da Barbie',
            descricao:'Site da barbie criado na matéria de Frameworks.',
            imagem:'barbie.png'
        },
        {
            id:4,
            titulo:'Aplicativo Gerel',
            descricao:'Criando um aplicativo para ajudar a melhorar o gerenciamento da Gerel sobre os eventos esportivos, incrições e campeonatos.',
            imagem:'gerel.png'
        },
        {
            id:5,
            titulo:'Site de Sapatos',
            descricao:'Nesse projeto foi criado um site onde vende varios modelos de sapatos.',
            imagem:'sapato.jpg'
        }
    ]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }
    return(
        <>
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
                        <p>Sejam bem-vidos ao meu portfolio.</p>
                    </li>
                </ul>
                <button className='button-saibamais'>Saiba mais sobre mim</button>
            </div>
            <div className='img-div-pessoa'>
                <img src={Pessoa}/>   
             </div>
        </main>
        <div className='div-content'>
        <div className='campo-pesquisa'>
            <p>Pesquise um projeto</p>
            <input type="text" className='input' placeholder='Pesquise um Projeto' onChange={TrataTexto} />
            <img className='img-lupa' src="lupa.png" alt="" />
            {
                (texto)?<p>Resultados Para:{texto}</p>:""
            } 
        </div>
            <div className='content'>
            {
                projetos.filter((projeto)=>projeto.titulo.toLocaleLowerCase().includes(texto)).map((projeto)=><Projeto key={projeto.id} titulo={projeto.titulo} descricao={projeto.descricao} imagem={projeto.imagem}/>)
            }
            </div>
        </div>  
        </>
    )
}
export default Portfolio