import Header from "./sellerHeader"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Button from 'react-bootstrap/Button';
import './Sellerhome.css';
import axios from "./axios.js";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const SellerHome = () => {

  const [shops, setShops] = useState([]);
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("user");
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  localStorage.setItem('shop', "");

  useEffect(() => {
    // console.log(loggedInUser);
    axios.get("/seller/shops")
      .then(response => {
        // console.log(response);
        setShops(response.data);
      })
  }, [])

  if (isAuthenticated === "false") {
    console.log(isAuthenticated);
    return <Navigate to="/" replace></Navigate>
  }
  
  const handleSubmit = async (event) => {
    navigate("/sellernewshop");
  }

    const handleClick = async (event) => {
    // console.log(event.target);
    navigate("/sellershop");
  }

  var finalShops = shops.filter((shop) => {
    return shop.name === loggedInUser;
  })
  // console.log(finalShops);

  return (

    <>
      <Header />
      <Container >
        <h1>Welcome! {loggedInUser}</h1>
        <div className="hehe"><h5>What are you looking for?</h5></div>
        {finalShops.map((shop) => (
          <div className="cards">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                  <a href="#" class="text-decoration-none" >{shop.businessName}</a> 
                  {localStorage.setItem('shop', shop.businessName)}
                </Card.Title>
                <Card.Text >
                  {shop.description}
                </Card.Text>
              </Card.Body>
              <div className="editbutton">
                <Fab size="medium" color="primary" aria-label="edit" onClick={(e) => handleClick(e)}>
                  {localStorage.setItem('shop', shop.businessName)}
                  <EditIcon />
                </Fab>
              </div>
            </Card>
          </div>
        ))}
        <Button variant="primary" type="submit" href="/sellernewshop" onClick={(e) => handleSubmit(e)}>
          Add New Shop
        </Button>
      </Container>
    </>
  )
}

export default SellerHome
