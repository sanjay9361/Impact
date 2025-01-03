import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Nav.css"
import { useState } from "react";
import NextPage from "./NextPage";

function Navbar1() {



  return (

    <>
      <section className="container-fluid2">
        <div className="row justify-content-around">
          <div className=" col-12 col-md-3 order-md-1 order-2 text-center">
          <Navbar.Brand href="#home" id="nav">VEG FOODS</Navbar.Brand>

          </div>


          <div className=" col-12 col-md-6 order-md-2 order-1 text-center" style={{fontSize:"30px"}} >
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to={"/Home"} > <Nav.Link href="#home">Home</Nav.Link></Link>

           <Link to={"/Vegtable"}> <Nav.Link href="#link">Shopping Items</Nav.Link> </Link>
            <NavDropdown title="History" id="basic-nav-dropdown">
            <Link to={"/NextPage"}> <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item></Link>
           
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



          </div>
         </div>

      </section>
    </>
  )


}

export default Navbar1