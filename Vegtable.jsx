import { createContext, useState } from "react"
import "./Vegtable.css"
import { Link } from "react-router-dom"
import NewPage from "./NewPage"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Vegtable() {

  const [picture, photo] = useState([{



    img: "https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg  ",
    price: "$50",
    quantity: 1
  },

  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg",
    price: "$100",
    quantity: 1
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-3.jpg",
    price: "$10",
    quantity: 1
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-4.jpg",
    price: "$40",
    quantity: 1
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-5.jpg",
    price: "$60",
    quantity: 1
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-6.jpg",
    price: "$70",
    quantity: 1

  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-7.jpg",
    price: "$40",
    quantity: 1
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-8.jpg",
    price: "$30",
    quantity: 1
  }

  ])
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [isTrue, setTrue] = useState([])


  const [setTime, unpoint] = useState()

  function add(index) {
    console.log(index);

    const quant = picture[index].quantity += 1
    console.log(quant);
    unpoint(quant)


  }

  function decrement(index) {
    console.log(index);

    const quant = picture[index].quantity -= 1
    console.log(quant);
    unpoint(quant)
  }


  function myfunc(item) {
    isTrue.push(item);
    console.log(isTrue);

     toast.success("Added to cart");
  }

 

  function deleted(index) {
    const summa=[...isTrue]
    summa.splice(index, 1);
   setTrue(summa)

   toast.warning("Deleted to card ");

  }



  return (
    <>
    
      <Button variant="danger col-md-12 text-center" onClick={handleShow}>
      <i class="bi bi-bag-heart"></i><h1>Order Items</h1>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><i class="bi bi-shop"></i><br /><h1>Add To Card</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isTrue.map((item, index) => (


            <div className="col-md-3  mt-5 ">
              
              <div className="card border-redious-shadow" style={{ width: ' 19rem' }} >
                <img src={item.img} className="card-img-top img-fluid " />
                <div className="card-body">
                  <h4 className="card-text">{item.price}</h4><br />
                  <button className="color1" onClick={() => add(index)} >+</button>
                  <span className="color3">{item.quantity}</span>
                  <button className="color2" onClick={() => decrement(index)} >-</button><br /><br />


                  <button className="color4 text-center" onClick={() => deleted(index)} >delete</button>
                </div>


              </div>





            </div>

          ))}
        </Offcanvas.Body>
      </Offcanvas><br /><br />
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-12 text-center">
            <i>Featured Products</i>
            <h1>Our Products</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>


          {picture.map((item, index) => (


            <div className="col-md-3  mt-5 ">

              <div className="card border-redious-shadow" style={{ width: ' 19rem' }} >
                <img src={item.img} className="card-img-top img-fluid " />
                <div className="card-body">
                  <h4 className="card-text">{item.price}</h4><br />
                  <button className="color1" onClick={() => add(index)} >+</button>
                  <span className="color3">{item.quantity}</span>
                  <button className="color2" onClick={() => decrement(index)} >-</button><br /><br />


                  <button className="color4" onClick={() => myfunc(item)}>ADD To</button>
                  <ToastContainer />
                </div>


              </div>





            </div>

          ))}
        </div><br /><br /><br /><br />
      </div><br /><br />
      <NewPage isTrue={isTrue} />


    </>
  )
}





export default Vegtable