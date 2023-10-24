import React, {useState} from 'react'
import Form from '../Components/Form';
import ItemLista from '../Components/ItemLista';
import { Container, List } from '@mui/material';

export default function Home() {

    const [tarefas, setTarefas] = useState([]);
   

    const handletarefas = (tarefa) => {
       
        setTarefas([...tarefas, tarefa]);
    }

    const deleteTarefa = (id) => {
       var newlist = tarefas.filter((tarefa)=> tarefa.id !== id)
       setTarefas(newlist);
    }

    const edicaotarefa = (id, newTxt) => {
      
      var arrayTarefas = [...tarefas];
      
      for(var i in arrayTarefas){
        if(arrayTarefas[i].id ===id){
          arrayTarefas[i].text = newTxt;
        }
      }
    }
  return (
    <Container maxWidth="xs" style={{marginTop: "1em"}}>
      <Form handletarefas={handletarefas}/>
        <List  sx={{ marginTop:"1em" }}>

        {tarefas.map((tarefa) => (

            <div key={tarefa.id} style={{marginTop: "1em"}}>
              <ItemLista edicaotarefa={edicaotarefa} tarefa={tarefa} deleteTarefa={deleteTarefa}/>
            </div>
           
        ))}
     
      </List>
      </Container>
  )
}
