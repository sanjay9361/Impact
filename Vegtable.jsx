import { useState } from "react"


function Vegtable() {

  const [picture, photo] = useState([{

    img: "https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg  "
  },

  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg"
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-3.jpg"
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-4.jpg"
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-5.jpg"
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-6.jpg"
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-7.jpg"
  },
  {
    img: "https://preview.colorlib.com/theme/vegefoods/images/product-8.jpg"
  }


  ])


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


            <div className="col-md-3 mt-5 ">
              <div className="card" style={{ width: ' 15rem' }}>
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text"></p>
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