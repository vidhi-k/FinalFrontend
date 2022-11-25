import React, { useState } from "react";
import BingMapsReact from "bingmaps-react";
import axios from "./axios";
import Card from 'react-bootstrap/Card';
import call from './call.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import './BuyerResults.css';
const api_key = process.env.REACT_APP_SECRET_KEY;

function BingMap() {

  const location = useLocation();
  const [pins, setPins] = useState([]);
  const type = location.state.user.shops;
 
  //getting data of shops
  useEffect(() => {
    axios.get("/get/shops")
      .then(response => {
        setPins(response.data);
      })
  })

  //using local storage to prevent direct access of this page
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isAuthenticated === "false") {
    return <Navigate to="/" replace></Navigate>
  }

  //filtering relevant shops
  const temp = pins.filter((pin) => {
    return pin.category === type;
  })

  const pushPins = [];
  const tempTwo = [];

  //push pins for map
  Promise.all(temp.map((t) => (
    pushPins.push({
      center: {
        latitude: t.latitude,
        longitude: t.longitude
      },
      options: {
        title: t.businessName,
      },
    }),

    tempTwo.push({
      name: t.businessName,
      desc: t.description,
      contact: t.contact
    })
  )));

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
        {tempTwo.map((pushp) => (
          <Card>
            <Card.Body>
              <Card.Title>{pushp.name}</Card.Title>
              <Card.Text>
                {pushp.desc}
              </Card.Text>
              <img src={call} width={40} height={40} />
            </Card.Body>
          </Card>
        ))}

      </Container>
    </>
  );
}
export default BingMap;
