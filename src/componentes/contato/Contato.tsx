import { useState } from 'react';
import './Contato.css'

function Contato(){

    const [contatoTexto, setContatoTexto]=useState("")

    function TrataContatoTexto(e:React.ChangeEvent<HTMLInputElement>){
        setContatoTexto(e.target.value)
    }

    return(
        <div className='contato'>
      <form>
        <div className="form-info">
          <label>Nome:</label>
          <div className="nomeForm">
            <input type="text" placeholder='Nome' onChange={TrataContatoTexto}/>
            <input type="text" placeholder='Sobrenome' onChange={TrataContatoTexto}/>
            </div>

            <label>E-mail:</label>
            <input className='input-n' type='email' placeholder='E-mail' onChange={TrataContatoTexto}/>

            <label>Endereço:</label>
            <input className='input-n' type='text' placeholder='Endereço' onChange={TrataContatoTexto}/>

            <label>Telefone:</label>
            <input className='input-n' type='tel' placeholder='Telefone' onChange={TrataContatoTexto}/>
            </div>
            <button>Enviar</button>
            <div className="contatoTexto-digitado">
             {contatoTexto && <p>{contatoTexto}</p>}
            </div>
            </form>
      </div>
    )
}

export default Contato