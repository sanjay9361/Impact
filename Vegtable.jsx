import { useState } from "react"


function Vegtable() {

  const [picture, photo] = useState([{



    img: "https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg  ",
    price: "$50"
  },

  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg",
    price: "$100"
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-3.jpg",
    price: "$10"
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-4.jpg",
    price: "$40"
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-5.jpg",
    price: "$60"
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-6.jpg",
    price: "$70"
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-7.jpg",
    price: "$40"
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-8.jpg",
    price: "$30"
  }


  

  ])


  const [isTrue, setTrue] = useState([])



  function add() {
    photo(picture+1)
  }

  function decrement() {
    photo(picture-1)
  }


  function myfunc(item){
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


          {picture.map(item => (


            <div className="col-md-3 mt-5">
              <div className="card" style={{ width: ' 15rem' }} >
                <img src={item.img} className="card-img-top"  />
                <div className="card-body">
                  <p className="card-text text-center" >{item.price}</p>
                  <button onClick={add} >+</button>
                  <button onClick={decrement} >-</button><br /><br />


                  <button onClick={()=>myfunc(item)}>submit</button>
                </div>


              </div>  



            </div>

          ))}
        </div>
      </div>

    </>
  )




}




export default Vegtable