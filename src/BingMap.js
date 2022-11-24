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
  // console.log(type);

  useEffect(() => {
    axios.get("/get/shops")
      .then(response => {
        // console.log(response.data);
        setPins(response.data);
      })
  })

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  // console.log(isAuthenticated);

  if (isAuthenticated === "false") {
    return <Navigate to="/" replace></Navigate>
  }

  const temp = pins.filter((pin) => {
    return pin.category === type;
  })

  // console.log(temp);

  const pushPins = [];
  const tempTwo = [];

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

    // console.log(tempTwo);

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
