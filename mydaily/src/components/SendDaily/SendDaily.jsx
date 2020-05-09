import React, {useState} from 'react';
import  './SendDailyStyle.scss'
import {Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import moment from 'moment'
import ModalContainer from '../ModalContainer/ModalContainer';
import FormSendDaily from '../FormSendDaily/FormSendDaily';
import {DAILY_STORAGE} from '../../util/contants'


const SendDaily =(props) => {
  const { setToastProps, allDaily} = props;
  //crear estado del modal si anda abierto
  const [isOpenModal, SendIsOpenModal] = useState(false)

  const ClickOpenModal =() => {
    SendIsOpenModal(!isOpenModal)
  }
  const ClosseModal =() => {
    SendIsOpenModal(false)
  }
  //para enviar el formulario
  const sendDailyii=(event, formValue) =>{
    //para que no se recarge  en el formulario
    event.preventDefault();
    const {name,daily} = formValue
    let allDailyArray =[];
    if(allDaily){
      allDailyArray= allDaily;
    }
    if(!name|| !daily){
      //console.log('todos los campos son obligatorias')
      setToastProps({
        open: true,
        text: "WARNING: Todos los campos son obligatorios!"
      });
    }else{
      formValue.time= moment();
      allDailyArray.push(formValue)
      localStorage.setItem(DAILY_STORAGE,JSON.stringify(allDailyArray));
      //console.log('enviado corretamente daily');
      setToastProps({
        open: true,
        text: "Daili subido correctamente :) buena suerte!."
      });
      ClosseModal() ;

      

    }
    allDailyArray = []

    console.log('tweet enviado ..')
    console.log(formValue)
  }
    return(
        <div className="send-daily">
      <Fab
        className="send-daily__open-form"
        color="primary"
        aria-label="add"
        onClick= {ClickOpenModal}
     
      >
        <AddIcon />
      </Fab>
        
        <ModalContainer isOpenModal= {isOpenModal} closeModal = {ClosseModal}>
         <FormSendDaily sendDailyii={sendDailyii}/>
        </ModalContainer>

        </div>
    )
}
export default SendDaily;