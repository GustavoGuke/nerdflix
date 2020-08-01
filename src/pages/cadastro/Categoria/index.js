import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'


function CadastroCategoria(){
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  }
  const [categoria, setCategoria] = useState([])
  const [values, setValue] = useState(valoresIniciais);

  function setValues(chave, valor) {
    setValue({
      ...values,
      [chave]: valor
    })
  }

  function funcaoHandler(infoEvento){
    setValues(
      infoEvento.target.getAttribute('name'),
      infoEvento.target.value)
   // setValue(infoEvento.target.value)
  }


    return(
      <PageDefault>
        <h1> Cadastro de Categoria: {values.nome}</h1>

        <form  onSubmit={function handerSubmit(event){
          event.preventDefault()
          setCategoria([...categoria, values])

          setValue(valoresIniciais)
        }}>

          <FormField
            label="Nome categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={funcaoHandler}
          
          />
          <br></br>

          <FormField
            label="Descrição"
            type=""
            name="descricao"
            value={values.descricao}
            onChange={funcaoHandler}
          
          />

          <br></br>

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={funcaoHandler}

          />
           <button>
             cadastrar
           </button>
        </form>

        <ul>{categoria.map((categoria, indice) =>{
          return (

            <li key={`${categoria} ${indice}`}>
                {categoria.nome}
            </li>
          )
        
        
        })}</ul>


      <Link to="/">
       Ir para home
      </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria