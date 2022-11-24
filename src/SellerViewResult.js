import React from "react";
import BingMapsReact from "bingmaps-react";
import Card from 'react-bootstrap/Card';
import call from './call.png';
import './SellerViewResult.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
const api_key = process.env.REACT_APP_SECRET_KEY;
function sellerviewresult() {
  const pushPin = {
    center: {
      latitude: 15.3911,
      longitude: 73.8782,
    },
    options: {
      title: "GOA",
    },
  }
  const pushPins = [pushPin];
  return (
    <>
    <Navbar className='heade' bg="light" variant="light">
    <h3>Looking for Customers for Shop 1</h3>
    </Navbar>
    <div className="map">
    <BingMapsReact
       bingMapsKey="Aii34A2mdkyAxpDWkr7FXNAMrBz-1OWElTrJfjqpslPFm2odJHeyziXBkRscsD1p"
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
      <div className="hehe"><h5>Nearby Customers</h5></div>
      <br/>
      <Card>
      <Card.Body>
        <Card.Title>Customer 1</Card.Title>
        <img src={call} width={40} height={40}/>
      </Card.Body>
    </Card>
    </Container>
    </>
  );
}
export default sellerviewresult;
