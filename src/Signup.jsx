import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



function Signup() {
  const Navigate = useNavigate()

  const [money, heist] = useState({
    name: "",
    password: ''
  })
  const [theme, park] = useState({
    name: "",
    password: ''
  })

  const bat1 = (event) => {
    const { name, value } = event.target
    heist({ ...money, [name]: value })
    console.log(name, value);
    console.log(money);


  }

  function bat2() {
    park({
      name: money.name,
      password: money.password
    })

    let meet = document.getElementById("boy")
    let beet = document.getElementById("girl")
    let go = document.getElementById("errors1")
    let went = document.getElementById("errors2")

    if (money.name === '' && money.password === "") {
      Navigate('/Home')

    }

    if (money.name == null || money.name=='') {
      go.innerHTML = ("user enter your name please")
       go.style.color="red"
        went.innerHTML = ("user enter your went please")
       went.style.color="red"
    }
    else if(money.password==null || money.password==''){
      went.innerHTML = ("user enter your went please")
       went.style.color="red"
    }

    

    else if(money.name=="sanjay" && money.password=="123"){
      go.innerHTML=("Sorry this name is already used try another name")
      go.style.color="red"
      went.innerHTML=("Sorry this password is already used try another password")
       went.style.color="red"
    }
  }


  return (
    <div className="signincontainer">
      <div className="row justify-content-around mt-5">
        <>
          <div className="col-md-6 text-center">
            <Card id='bbb' style={{ width: '17rem' }}>

              <Card.Body>
                <Card.Title>Signup</Card.Title>
                <Card.Text>
                  <div id='boy'>
                    <h6>Enter your Name</h6>
                    <input type="text" name="name" value={money.name} placeholder='enter your name' onChange={bat1} />
                  </div>
                  <small id='errors1'></small>
                  <div id='girl'>
                    <h6>Enter your password</h6>
                    <input type="text" name="password" value={money.password} placeholder='enter your name' onChange={bat1} />
                  </div>
                  <small id='errors2'></small>
                </Card.Text>
                <Button variant="primary" onClick={bat2}>Sign in</Button>
              </Card.Body>
            </Card>
          </div>
        </>
      </div>
    </div>
  )


}


export default Signup