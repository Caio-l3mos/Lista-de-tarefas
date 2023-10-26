import React, {useState} from 'react'
import {TextField, Button, Paper} from '@mui/material'

export default function Form ({handletarefas}) {


    const [text, setText] = useState(null)
    const [id, setId] = useState(0)

    
    const handlecreate = (text) =>{
        

        const objtarefa = { text:text, id:id};
        console.log(objtarefa)
        setId(id + 1);

        handletarefas(objtarefa)
        document.getElementById("outbasiclined-basic").value=null
    }

  return (
    <Paper style={{padding:"1em"}}>
        <div style={{display:"flex", justfyConentent: "Center"}}>
            
            <TextField id="outbasiclined-basic" label="Adicione uma tarefa"   onChange={(e)=> setText(e.target.value)}/>
            <Button variant="text" onClick={() => handlecreate(text)} style={{marginLeft:'3em', color:'#892cdc'}}> Adicionar</Button>
        </div>

       

    </Paper>
  )
}

