import React from "react";
import { Image } from "react-bootstrap";


function ProfilePhoto(){
    return(
        <div>
             <Image src= 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' className='img-fluid rounded-circle' alt='...' style={{ background:'white', width: '160px',
             height: "160px", borderRadius: "50%", verticalAlign: "middle", padding:"5px", transform:"translate(2px,25px)"}} />
        </div>
    )
}

export default ProfilePhoto;