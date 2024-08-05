

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"




const SignInpage=()=>{
   const Navigate= useNavigate();
    const[ten,fifty]=useState({
        name:"",
        password:''
       })
    
    const [bell,sell]=useState({
        name:"",
        password:''
    })
    
    const setvalue=(event)=>{
        const{name,value}=event.target;
        fifty({...ten,[name]:value})
        console.log(name,value);
        console.log(ten);
        
        
    }
    
    function direct(){
        sell({
            name:ten.name,
            password:ten.password
        })
     Navigate('/Home')
    
     
    }
    
    
    
    
        
    return(

    <>
    
    <div className="col-12 text-center">
        
        <input type="text" name="name" placeholder="enter your name" value={ten.name} onChange={setvalue} />
        <input type="text" name="password" placeholder="enter your password" value={ten.password} onChange={setvalue} />
       <button onClick={direct}>SignInpage</button>
    </div>
    
    


    

        








        </>
           )
        }
    

export default SignInpage