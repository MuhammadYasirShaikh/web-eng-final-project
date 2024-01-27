// AllProducts.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Cart from './Cart'; // Import the Cart component
import img from '../assets/images/Frame 33.png';
import img2 from '../assets/images/Frame 34.png';
import img3 from '../assets/images/Frame 38.png';
import stars from '../assets/images/Frame 39.png';
import stars2 from '../assets/images/Frame 40.png';
import stars3 from '../assets/images/Frame 41.png';
import img4 from '../assets/images/Frame 71.png';
import img5 from '../assets/images/Frame 72.png';
import img6 from '../assets/images/Frame 73.png';
import img7 from '../assets/images/s1.png';
import img8 from '../assets/images/Frame 32.png';
import img9 from '../assets/images/Frame 71.png';


export default function AllProducts() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <>
      <div className="container-fluid">
        <h5 className='mx-5'>Home/<span style={{ color: "#000000" }}>All Products</span></h5>
        <h1 className='mx-5 my-5'>All Products</h1>
        <Container className="d-flex justify-content-end">
          <Row>
            <Col xs="auto">
              <p className="mr-3">Showing 1-10 of 100 products Sort by:</p>
            </Col>
            <Col xs="auto">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#fff", color: "#000", border: "none", marginTop: '-10px' }}>
                  Most Popular
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
        <div className="container-fluid">
  <div className="mx-3 row">
    <div className="col-lg-4 col-md-6 col-sm-12">
     
        <ProductCard
          img={img}
          title="Baby Crochet Design"
          stars={stars}
          price={145}
          addToCart={() => addToCart({ id: 1, name: 'Baby Crochet Design', price: 145 })}
        />
     
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
        <ProductCard
          img={img2}
          title="Balochi Doch"
          stars={stars2}
          price={180}
          addToCart={() => addToCart({ id: 2, name: 'Balochi Doch', price: 180 })}
        />
     </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
        <ProductCard
          img={img3}
          title="Crochet Dress"
          stars={stars3}
          price={120}
          addToCart={() => addToCart({ id: 3, name: 'Crochet Dress', price: 120 })}
        />
     </div>
    {/* Add more ProductCard components as needed */}
  </div>
</div>

        <div className="container-fluid my-5">
  <div className="mx-3 row">
    <div className="col-lg-4 col-md-6 col-sm-12">
      <ProductCard img={img4} title="Applique Chaddar" stars={stars} price={240} addToCart={() => addToCart({ id: 4, name: 'Baby Crochet Design', price: 145 })} />
    </div>
    <div className="col-lg-4 col-md-6 col-md-6 col-sm-12">
      <ProductCard img={img5} title="Embroidered Dress" stars={stars2} price={180} addToCart={() => addToCart({ id: 5, name: 'Balochi Doch', price: 180 })} />
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
      <ProductCard img={img6} title="Hand-Embroidered Dress" stars={stars3} price={130} addToCart={() => addToCart({ id: 6, name: 'Crochet Dress', price: 120 })} />
    </div>
    {/* Add more ProductCard components as needed */}
  </div>
  {/* ... Your existing code ... */}
</div>
        <div className="container-fluid my-5">
  <div className=" mx-3 row">
    <div className=" col-lg-4 col-md-6 col-sm-12 ">
      <ProductCard img={img7} title="Applique Dress" stars={stars} price={212} addToCart={() => addToCart({ id: 7, name: 'Baby Crochet Design', price: 145 })} />
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
      <ProductCard img={img8} title="Applique Dress" stars={stars2} price={145} addToCart={() => addToCart({ id: 8, name: 'Balochi Doch', price: 180 })} />
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
      <ProductCard img={img9} title="Ajrak Dress" stars={stars3} price={80} addToCart={() => addToCart({ id: 9, name: 'Crochet Dress', price: 120 })} />
    </div>
    {/* Add more ProductCard components as needed */}
  </div>
</div>

        <div className="container-fluid mt-5">
          {/* Cart summary section */}
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </>
  );
}

const ProductCard = ({ img, title, stars, price, addToCart }) => (
  <div className="col-lg-4 col-md-6 col-sm-12">
    <Card className="" style={{ width: '18rem', border: 'none' }}>
      <Card.Img className="mx-3" variant="top" src={img} />
      <Card.Body style={{ marginLeft: 'none' }}>
        <Card.Title>{title}</Card.Title>
        <img varient="down" src={stars} alt="Stars" />
        <Card.Text style={{ width: '700px', height: '32.4px' }} className="fw-bold">
          ${price}
        </Card.Text>
        <Button style={{ width: '270px' }} className="gradient-container" onClick={addToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  </div>
);
