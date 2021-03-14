
import React, { useState } from 'react';
import {database} from "./firebase";

function Home() {
    const [url,seturl] = useState("");


     
    function shorturlgenerator() {   // short url generator
      let  chart ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let  length =4;
        let result = ' ';
        const charactersLength = chart.length;
        for ( let i = 0; i < length; i++ ) {
            result += chart.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }

    const formHandler = async (event) => {
        event.preventDefault();  // to avoid page reloadd
        let ShorturlValue = shorturlgenerator();
        await database.collection("Storeurls").add({          // name of collection will be Storeurls and colums will be url and code
          Longurl: url,
          ShorturlValue: ShorturlValue,
        });
        alert("This is your URL - http://localhost:3000/wafer/"+ShorturlValue);
      };
    

  return (
    <div>

<p>exact</p>
<form onSubmit={formHandler}>
<input
                id="urlarea"
                type="text"
                name="url"
                value={url}
                placeholder="Enter Url"
                onChange={event => seturl(event.target.value)}
              />

<input
                id="buttonarea"
                type="submit"
                value="squiz it"
            
              />
</form>

    </div>
  );
}

export default Home;


