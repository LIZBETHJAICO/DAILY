import React from 'react';
import './LisDailyStyle.scss';
import {Grid } from '@material-ui/core'
import Daily from '../Daily/Daily'
const ListDaily =(props) =>{
    const {allDaily, deleteDaily} = props
    console.log(allDaily,'probando')
    if(!allDaily || allDaily.length===0){
        return(
            <div className='list-daily-empty'>
           <h2>NO hay Dailys el día de hoy </h2>
            </div>
        );
    }

    return (
           //<div className='list-daily'> List Dailys....</div>
        <Grid container spacing={3} className="list-dailys">
          {allDaily.map((daily, index) => (
            <Grid key={index} item xs={4}>
             <Daily daily={daily} index={index} deleteDaily={deleteDaily}  />

           
            </Grid>
          ))}
        </Grid>
      );
}

export default ListDaily;