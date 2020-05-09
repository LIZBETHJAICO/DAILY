import React,{useState, useEffect} from 'react';

import { Container, Snackbar } from '@material-ui/core';
import Header from './components/Header/Header';
import SendDaily from './components/SendDaily/SendDaily'
import ListDaily from './components/ListDaily/ListDaily'

import {DAILY_STORAGE} from './util/contants'


function App() {
    const [toastProps, setToastProps] = useState({
        open: false,
        text: null
      });
      //tener en una arrau todos los dailis 

  const [allDaily, setAllDaily] = useState([]);
  const [reloadDailys, setReloadDailys] = useState(false);

  useEffect(()=>{
  const AllDailySorage = localStorage.getItem(DAILY_STORAGE);
  const allDailysArray = JSON.parse(AllDailySorage);
  setAllDaily(allDailysArray)
  setReloadDailys(false)
  },[reloadDailys] )
  console.log(allDaily);
  const deleteDaily =(index) => {
      allDaily.splice(index,1);
      setAllDaily(allDaily);
      localStorage.setItem(DAILY_STORAGE, JSON.stringify(allDaily))
      setReloadDailys(true)
     
  }
  
    return ( <div className = "App">
        <Container 
        className = 'container-dayli'
        maxWidth = {false}>
         <Header />
        <SendDaily setToastProps={setToastProps} allDaily={allDaily}/>
        <ListDaily allDaily={allDaily} deleteDaily={deleteDaily}/>
        <Snackbar
        anchorOrigin ={{
            vertical:'top',
            horizontal:'right'
        }}
        open={toastProps.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toastProps.text}</span>}

        
        />
        </Container>
            </div>
    );
}

export default App;