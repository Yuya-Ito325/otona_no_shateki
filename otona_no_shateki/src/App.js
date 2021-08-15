import React, {useState,} from 'react';
import Tail from './conponent/tail';
import { ImageDisplay } from './conponent/canvas';
import './App.css';
import axios from 'axios';

const App = () =>{

  const ApiFetch = () => {
    const endpoint = "otona-no-shateki.cognitiveservices.azure.com";
    const subscriptionKey = "516701fe02714176a2316949a335dcf8";
    const url = `https://${endpoint}/vision/v2.1/analyze?visualFeatures=Adult`;
    const target =
      "https://cdn.pixabay.com/photo/2019/07/22/08/03/bikini-4354470_960_720.jpg";
    axios({
      method: "post",
      url,
      data: {
        url: target,
      },
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": subscriptionKey,
      },
    }).then((response) => {
      console.log(response);
    });
  }
  
  return(
    <React.Fragment>
      <Tail/>
      <ImageDisplay/>
      <p>aaaaaaaaaaaaaaaaaa</p>
    </React.Fragment>
  )
}

export default App;
