import React from 'react';
import { Card, CardContent } from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

import moment from "moment";

import './DailyStyle.scss'
const Daily=(props) => {
    const {
        daily: { name, daily, time },
        index,
        deleteDaily
     
      } = props;
      console.log(daily)
    return(
        <Card className="daily">
      <CardContent>
        <div className="daily__header">
          <h5>{name}</h5>
          <DeleteTwoToneIcon onClick={() =>deleteDaily(index)} />
       
        </div>

        <p>{daily}</p>
        <div className="daily__date-add-tweet">
          {moment(time).format("DD/MM/YYYY HH:mm")}
        </div>
      </CardContent>
    </Card> 
    )
}
export default Daily;