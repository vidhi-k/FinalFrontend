import React from "react";
import Card from 'react-bootstrap/Card';
import Header from "./Header";
import './SellerViewResult.css';
import Container from 'react-bootstrap/Container';
import { Navigate } from "react-router-dom";
import axios from "./axios";
import { useEffect, useState } from "react";

function Sellerviewresult() {

  const [shops, setShops] = useState([]);
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const loggedInUser = localStorage.getItem("user");
  const loggedInShop = localStorage.getItem("shop");

  useEffect(() => {
    // console.log(loggedInUser);
    axios.get("/seller/shops")
      .then(response => {
        // console.log(response);
        setShops(response.data);
      })
  });


  console.log(shops);

  if (isAuthenticated === "false") {
    return <Navigate to="/" replace></Navigate>
  }

  const finalShop = shops.filter((shop) => {
    return shop.name === loggedInUser && shop.businessName === loggedInShop;
  })

  // console.log(finalShop); 


  return (
    <>
      <Header></Header>

      <div className='header_name' bg="light" variant="light">
        <h3>{loggedInShop}</h3>
      </div>

      <Container>
        <Card className="text-align-left">
          <Card.Body>
            <Card.Title>Owner's Name </Card.Title>
            <Card.Text>
              {loggedInUser}
            </Card.Text>
            <Card.Title>Contact</Card.Title>
            <Card.Text>
              {finalShop[0].contact}
            </Card.Text>
            <Card.Title>Address</Card.Title>
            <Card.Text>
              {finalShop[0].address}
            </Card.Text>
            <Card.Title>Description</Card.Title>
            <Card.Text>
              {finalShop[0].description}
            </Card.Text>
            <Card.Title>Items</Card.Title>
            <Card.Text>
              {finalShop[0].listOfItems}

            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
export default Sellerviewresult;
