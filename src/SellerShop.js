import Header from "./sellerHeader"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useLocation} from "react-router-dom";
import axios from "./axios";
import Container from "react-bootstrap/esm/Container";
import "./SellerNewShop.css";
const SellerShop = () => {
  const [items, setItems] = useState([]);
  function makeList() {
    var strings = items.split(",");
    // console.log(strings);
    return strings;
  }
  const handleSubmit = async (event) => {
    try {
        event.preventDefault();
        const data = await axios.post("/enter/location", {
            listOfItems: makeList()
        });
        // console.log(data.name);
        // if(data.status === 200){
        //     console.log("success");
        // }
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
        <Form.Label>Owner's Name</Form.Label>
        <Form.Control type="text" placeholder = "Enter the Point Of Contact" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicShopName">
        <Form.Label>Shop Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Shop Name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="" placeholder="Enter Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description"/>
      </Form.Group>  
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Items</Form.Label>
        <Form.Control type="text" placeholder="Enter Items You Sell" onChange={e => setItems(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Allow location" />
      </Form.Group>
      <Button variant="primary" type="submit" href="/sellerhome" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </Form>
    </Container>
    </>
  )
}

export default SellerShop
