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
            descricao:'knforehfpqhpi4rfhrphf',
            imagem:''
        },
        {
            id:2,
            titulo:'Estágio',
            descricao:'knforehfpqhpi4rfhrphf',
            imagem:''
        },
        {
            id:3,
            titulo:'Site da Barbie',
            descricao:'knforehfpqhpi4rfhrphf',
            imagem:''
        },
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
        <div className='campo-pesquisa'>
            <p>Pesquise um projeto</p>
            <input type="text" className='input' placeholder='Pesquise um Projeto' onChange={TrataTexto} />
            <img className='img-lupa' src="lupa.png" alt="" />
            {
                (texto)?<p>Resultados Para:{texto}</p>:""
            }   
            {
                projetos.filter((projeto)=>projeto.titulo.toLocaleLowerCase().includes(texto)).map((projeto)=><Projeto key={projeto.id} titulo={projeto.titulo} descricao={projeto.descricao} imagem={projeto.imagem}/>)
            }
        </div>
        </>
    )
}
export default Portfolio