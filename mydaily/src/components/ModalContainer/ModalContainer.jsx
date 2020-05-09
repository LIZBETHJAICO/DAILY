import React from 'react';
import './ModalContainerStyle.scss'
import {Modal} from '@material-ui/core'
const ModalContainer =(props) => 
{
    const{isOpenModal, closeModal, children} =props
    console.log(props)
    return(
      
       <Modal className='modal-container'
       open= {isOpenModal}
       onClose={closeModal}
       closeAfterTransition>
             <div>{children}</div>
       </Modal>
       
    )
}
export default ModalContainer;