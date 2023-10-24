import * as React from 'react';
import { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Paper } from '@mui/material';
import EditTarefa from './EditTarefa';
export default function ItemLista({tarefa, deleteTarefa, edicaotarefa}) {
  const [abrirDialogo, setAbrir] = useState(false)


    const dialogHandle = () => {
      setAbrir(!abrirDialogo)
    }


    
  return (
        <>
        <EditTarefa edicaotarefa={edicaotarefa} open={abrirDialogo} dialogHandle={dialogHandle} tarefa={tarefa}/>
        <Paper style={{padding: " 0.5em 0em"}}>
       
          <ListItem 
           
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTarefa(tarefa.id)}>
                <DeleteForeverIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  
                  tabIndex={-1}
                  disableRipple
                  
                />
              </ListItemIcon>
              <ListItemText  primary={tarefa.text} onClick={dialogHandle}/>
            </ListItemButton>
          </ListItem>
          </Paper>
          </>
        );
      }
   
 





