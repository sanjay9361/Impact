

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Signinpage.css"


const SignInpage = () => {
    const Navigate = useNavigate();

    const [ten, fifty] = useState({
        name: "",
        password: ''
    })

    const [bell, sell] = useState({
        name: "",
        password: ''
    })

    const setvalue = (event) => {
        const { name, value } = event.target;
        fifty({ ...ten, [name]: value })
        console.log(name, value);
        console.log(ten);


    }

    function direct() {
        sell({
            name: ten.name,
            password: ten.password
        })



        let balld = document.getElementById("ball")

        let batt = document.getElementById("bat")
        let useerror = document.getElementById("error1")
        let passerror = document.getElementById("error2")



        if (ten.name == null || ten.name == '') {
            useerror.innerHTML = ("user input the name box")
            useerror.style.color = "red"

            passerror.innerHTML = ("user input the  password box")
            passerror.style.color = "red"
        }
        else if (ten.password == null || ten.password == '') {
            passerror.innerHTML = ("user input the  password box")
            passerror.style.color = "red"
        }
        else if (ten.name == "sanjay" && ten.password == "123") {


            Navigate('/Home')

        }
        else if (ten.name != "sanjay" || ten.password != "123") {
            useerror.innerHTML = ("username invalid")
            useerror.style.color = "red"
            alert = (toast.warning("Wrong!"));
            passerror.innerHTML = ("userpassword invalid")
            passerror.style.color = "red"


        }



    }


    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);

    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, [])



    return (

        <div className="signincontainer">
            <div className="row justify-content-around mt-3">
                <>



              

                    <div className=" col-md-12 col-9 text-center">
                        <div id="bbb" className="card" >
                            <div className="card-body">
                                <h1 className="card-title">Login</h1><br />
                                <h6 className="card-subtitle mb-2 text-body-secondary">Fresh Fruites & Vegtables</h6><br />

                                <div>
                                    <div id="ball">
                                        <small className="one">Username</small><br />
                                        <i id="font" class="bi bi-person-fill"></i>
                                        <input className="vtv" type="text" name="name" placeholder="enter your name" value={ten.name} onChange={setvalue} />

                                    </div>
                                    <small id="error1"></small>
                                </div><br />

                                <div><br /><br />
                                    <div id="bat">
                                        <small className="one">Password</small><br />
                                        <i id="font" class="bi bi-person-fill-lock"></i>
                                        <input className="vtv" type="text" name="password" placeholder="enter your password" value={ten.password} onChange={setvalue} /><br />
                                    </div>
                                    <small id="error2"></small>
                                </div>


                                <br />
                                <h4><button className="vtv1 " onClick={direct}>Login </button><br />
                                    <br />


                                    <div className="row justify-content-center">
                                        <div className="col-md-2">
                                            <h4><i class="bi bi-facebook"></i></h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4><i class="bi bi-twitter"></i></h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4><i class="bi bi-google"></i></h4>
                                        </div>
                                    </div>
                                </h4>
                                <div >
                                <Link to={"/Signup"} >  <Button variant="primary">SignUp</Button></Link>
                                </div>


                            </div>
                        </div>
                        </div>
                    

                    <ToastContainer />



                </>
            </div>
        </div>
    )
}


export default SignInpage