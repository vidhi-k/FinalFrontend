import Header from "./sellerHeader"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate, Navigate} from "react-router-dom";
import axios from "./axios";
import Container from "react-bootstrap/esm/Container";
import "./SellerNewShop.css";
const SellerShop = () => {

  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  function makeList() {
    var strings = items.split(",");
    // console.log(strings);
    return strings;
  }

  const loggedInUser = localStorage.getItem("user");
  const loggedInShop = localStorage.getItem("shop");
  // console.log(loggedInShop);

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated === "false") {
    return <Navigate to="/" replace></Navigate>
  }

  const handleSubmit = async (event) => {
    try {
        event.preventDefault();
        const data = await axios.patch("/updateList", {
            nameA: loggedInUser,
            shopName: loggedInShop,
            newItem: makeList()
        });
        // console.log(data.name);
        // if(data.status === 200){
        //     console.log("success");
        // }
        console.log(data.data);
        navigate("/sellerhome");

    } catch (error) {
        console.log(error);
    }       
}

  return (
   <>
   <Header />
    <Container>
    <div className="heading"><h2>Selling something new?</h2></div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicShopName">
        <Form.Label>Owner's Name</Form.Label>
        <Form.Control type="text" placeholder = {loggedInUser} readOnly="true" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicShopName">
        <Form.Label>Shop Name</Form.Label>
        <Form.Control type="text" placeholder={loggedInShop} readOnly="true"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>New Items</Form.Label>
        <Form.Control type="text" placeholder="New Items" onChange={e => setItems(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" href="/sellerhome" onClick={(e) => handleSubmit(e)}>
        Add
      </Button>
    </Form>
    </Container>
    </>
  )
}

export default SellerShop
