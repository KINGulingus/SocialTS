import preloader from "../../../assets/images/preloader.gif";
import React from "react";


let Preloader = () => {
   return <div style={{backgroundColor: 'black'}}>
        <img src={preloader}/>
    </div>
}

export default Preloader;