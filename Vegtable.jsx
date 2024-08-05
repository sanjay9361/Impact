import { createContext, useState } from "react"

import { Link } from "react-router-dom"
import NewPage from "./NewPage"

export const budget = createContext()
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


  const [isTrue, setTrue] = useState([])


  const [setTime, unpoint] = useState()

  function add(index) {
    console.log(index);
    
  const quant= picture[index].quantity += 1
    console.log(quant);
    unpoint(quant)
    
    
  }

  function decrement(index) {
    console.log(index);
    
  const quant= picture[index].quantity -= 1
    console.log(quant);
    unpoint(quant)
  }


  function myfunc(item) {
    isTrue.push(item);
    console.log(isTrue);

  }


  return (
    <>

      <div className="container">
        <div className="row justify-content-around">
          <div className="col-12 text-center">
            <i>Featured Products</i>
            <h1>Our Products</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>


          {picture.map((item,index) => (


            <div className="col-md-3 g-3 mt-5">

              <div className="card border-redious" style={{ width: ' 16rem' }} >
                <img src={item.img} className="card-img-top" />
                <div className="card-body">
                  <p className="card-text text-center" >{item.price}</p>
                  <button onClick={()=>add(index)} >+</button>
                  <span>{item.quantity}</span>
                  <button onClick={()=>decrement(index)} >-</button><br /><br />


                  <Link><button onClick={() => myfunc(item)}>ADD To</button></Link>
                </div>


              </div>





            </div>

          ))}
        </div>
      </div>
      {/* <NewPage className='d-none' isTrue={isTrue} picture={picture}/> */}


    </>
  )
}





export default Vegtable