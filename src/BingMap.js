import React, { useState } from "react";
import BingMapsReact from "bingmaps-react";
import axios from "./axios";
import Card from 'react-bootstrap/Card';
import call from './call.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import './BuyerResults.css';
const api_key = process.env.REACT_APP_SECRET_KEY;

function BingMap() {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    axios.get("/get/shops")
      .then(response => {
        // console.log(response.data);
        setPins(response.data);
      })
  })

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  
  if(!isAuthenticated){
    return <Navigate to="/" replace></Navigate>
  }

  const pushPins = [];

  pins.forEach((pin) => (
    pushPins.push({
      center: {
        latitude: pin.latitude,
        longitude: pin.longitude
      },
      options: {
        title: pin.businessName,
      },
    })
  ));

  // const pushPins = [pushPin];
  return (
    <>
    <Navbar className='heade' bg="light" variant="light">
    <h3>Looking for Shops</h3>
    </Navbar>
    <div className="map">
    <BingMapsReact
      bingMapsKey={api_key}
      height={500}
      mapOptions={{
        navigationBarMode: "square",
      }}
      pushPins={pushPins}
      viewOptions={{
        center: { latitude: 15.3911, longitude: 73.8782 },
        mapTypeId: "Aerial",
      }}
    />
    </div>
    <Container>
      <div className="hehe"><h5>Nearby Shops</h5></div>
      <Card>
      <Card.Body>
        <Card.Title>Shop 1</Card.Title>
        <Card.Text>
                Description.......
        </Card.Text>
        <img src={call} width={40} height={40}/>
      </Card.Body>
    </Card>
    </Container>
    </>
  );
}
export default BingMap;
