import Header from "./sellerHeader"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, Navigate } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./axios";
import Container from "react-bootstrap/esm/Container";
import useGeoLocation from "./useGeoLocation";
import "./SellerNewShop.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from "react";

const SellerNewShop = () => {

  const location = useGeoLocation();
  // const locationTwo = useLocation();
  const navigate = useNavigate();
  const [shopName, setShopName] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [items, setItems] = useState([]);
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("l"); 

  const categories = ["Cobler", "Cycle Repair", "Home Bakery", "Home Decor", "Thrift Store"];


  const handleChange = (event) => {
    setCategory(event.target.value);
    console.log(category);
  };

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated === "false") {
    return <Navigate to="/" replace></Navigate>
  }

  function makeList() {
    var strings = items.split(",");
    // console.log(strings);
    return strings;
  }
  const loggedInUser = localStorage.getItem("user");
  console.log(location.coordinates);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = await axios.post("/enter/location", {
        name: loggedInUser,
        contact: contact,
        longitude: location.loaded ? location.coordinates.lng : "",
        latitude: location.loaded ? location.coordinates.lat : "",
        businessName: shopName,
        address: address,
        category: category,
        description: desc,
        listOfItems: makeList(),
      });
      // console.log(data.name);
      navigate("/sellerhome");
      
      console.log(data.data);

    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
      <Header />
      <Container>
        <div className="heading"><h2>What are you Selling?</h2></div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicShopName">
            <Form.Label>Shop Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Shop Name" required="true" onChange={e => setShopName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicShopName">
            <Form.Label>Owner's Name</Form.Label>
            <Form.Control type="text" placeholder= {loggedInUser} readOnly="true" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicShopName">
            <Form.Label>Contact</Form.Label>
            <Form.Control type="number" placeholder="Enter Contact Number" required="true" onChange={e => setContact(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" required="true" onChange={e => setAddress(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" required="true" onChange={e => setDesc(e.target.value)} />
          </Form.Group>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                {categories.map((cat) => (
                  <MenuItem value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Items</Form.Label>
            <Form.Control type="text" placeholder="Enter Items You Sell" required="true" onChange={e => setItems(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default SellerNewShop
