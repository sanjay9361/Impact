import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import NewPage from './NewPage.jsx';
import './Vegtable.css';
import NewPage from './NewPage';

function Menu() {
  const [picture, setPicture] = useState([
    { img: "https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg", name: "Bell Pepper", price: 50, quantity: 1 },
    { img: "https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg", name: "Strawberry", price: 100, quantity: 1 },
    { img: "https://preview.colorlib.com/theme/vegefoods/images/product-3.jpg", name: "Green Beans", price: 10, quantity: 1 },
    { img: "https://preview.colorlib.com/theme/vegefoods/images/product-4.jpg", name: "Purple Cabbage", price: 40, quantity: 1 },
    { img: "https://preview.colorlib.com/theme/vegefoods/images/product-5.jpg", name: "Tomato", price: 60, quantity: 1 },
    { img: "https://preview.colorlib.com/theme/vegefoods/images/product-6.jpg", name: "Broccoli", price: 70, quantity: 1 },
    { img: "https://preview.colorlib.com/theme/vegefoods/images/product-7.jpg", name: "Carrots", price: 40, quantity: 1 },
    { img: "https://preview.colorlib.com/theme/vegefoods/images/product-8.jpg", name: "Fruit Juice", price: 30, quantity: 1 }
  ]);

  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const add = (index) => {
    setPicture(pictures => {
      const newPictures = [...pictures];
      newPictures[index].quantity += 1;
      return newPictures;
    });
  };

  const decrement = (index) => {
    setPicture(pictures => {
      const newPictures = [...pictures];
      if (newPictures[index].quantity > 1) {
        newPictures[index].quantity -= 1;
      }
      return newPictures;
    });
  };

  const addToCart = (item) => {
    setCart(cart2 => {
      const newCart = [...cart2, item];
      setTotal(total2 => total2 + item.price);
      toast.success("Added to cart");
      return newCart;
    });
  };

  const removeFromCart = (index) => {
    setCart(cart2 => {
      const newCart = cart2.filter((_, i) => i !== index);
      setTotal(total2 => total2 - cart2[index].price);
      toast.warning("Removed from cart");
      return newCart;
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="bi bi-bag-heart"></i>
        <h1>Order Items</h1>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <i className="bi bi-shop"></i>
            <br />
            <h1>Add To Cart</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map((item, index) => (
            <div key={index} className="col-md-3 mt-5">
              <div className="card border-redious-shadow" style={{ width: '17rem' }}>
                <img src={item.img} className="card-img-top img-fluid" alt={item.name} />
                <div className="card-body">
                  <h2>{item.name}</h2>
                  <h4 className="card-text">{item.price}</h4>
                  <br />
                  <button className="color1" onClick={() => add(index)}>+</button>
                  <span className="color3">{item.quantity}</span>
                  <button className="color2" onClick={() => decrement(index)}>-</button>
                  <br />
                  <br />
                  <button className="color4 text-center" onClick={() => removeFromCart(index)}>Delete</button>
                </div>
              </div>
              <br />
            </div>
          ))}
          <h6>Total Amount: {total}</h6>
        </Offcanvas.Body>
      </Offcanvas>

      <br />
      <br />
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-12 text-center">
            <i>Featured Products</i>
            <h1>Our Products</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
          {picture.map((item, index) => (
            <div key={index} className="col-md-3 mt-5">
              <div className="card border-redious-shadow" style={{ width: '17rem' }}>
                <img src={item.img} className="card-img-top img-fluid" alt={item.name} />
                <div className="card-body">
                  <h2>{item.name}</h2>
                  <h4 className="card-text">{item.price}</h4>
                  <br />
                  <button className="color1" onClick={() => add(index)}>+</button>
                  <span className="color3">{item.quantity}</span>
                  <button className="color2" onClick={() => decrement(index)}>-</button>
                  <br />
                  <br />
                  <button className="color4" onClick={() => addToCart(item)}>ADD TO CART</button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <NewPage isTrue={cart} />
    </>
  );
}

export default Menu;
