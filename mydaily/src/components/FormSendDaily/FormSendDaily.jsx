import React ,{useState}from 'react';
import {FormControl, FormGroup, TextField, Button} from '@material-ui/core';

import './FormSendDailyStyle.scss'
const FormSendDaily =(props) =>
{
    const {sendDailyii}= props;
    // esta funcion se ejecutara en el onsubmit
    const [formValue, setFormValue] =useState({
      name :'', 
      daily:'' 
    })
    const onFormChange =(e)=>{
     setFormValue({
         ...formValue,
         [e.target.name] : e.target.value

     })
    }
    return(
        <div className='form-send-daily'>
            <h2 className='form-send-daily__title'>TU DAILY DE HOY ES:</h2>
            <form 
            className= 'form-send-daily__form' 
            onSubmit={(event) => sendDailyii(event, formValue)}
            onChange={onFormChange}>
            <FormControl>
                <FormGroup>
                    <TextField 
                    className='form-send-daily__form-name'
                    type='text'
                    name='name'
                    placeholder='nombre del proyecto'
                    margin='normal'/>

                    
                </FormGroup>
                <FormGroup>
                    <TextField
                    className='form-send-daily__form-textarea'
                    name ='daily'
                    multiline
                    rows ='6'
                    placeholder='escribe tu daily de hoy ..'/>
                </FormGroup>
                <FormGroup>
                    <Button   type ="submit">Subir Daily</Button>
                </FormGroup>
            </FormControl>
            </form>

        </div>
    )
}
export default FormSendDaily;