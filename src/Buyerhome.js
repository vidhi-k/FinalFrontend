import Header from "./Header"
import Container from 'react-bootstrap/Container';
import './buyerhome.css';
import Button from '@mui/material/Button';
import {Navigate, useNavigate} from 'react-router-dom';

const Buyerhome = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log(isAuthenticated);

  if(isAuthenticated === "false"){
    return <Navigate to="/" replace></Navigate>
  } 

  const loggedInUser = localStorage.getItem("user");

  const categories = ["Cobler", "Cycle Repair", "Home Bakery", "Home Decor", "Thrift Store"];

  const handleSubmit = async (event) => {
    console.log(event.target.value);
    const shops = event.target.value;
    navigate("/buyerresults", {state: {user: {shops}}});
  }


  return (
    <>
      <Header />
      <Container  className="name" >
      <h1>Welcome! {loggedInUser} </h1>
      <div className="hehe"><h5>What are you looking for?</h5></div>
      {/* <TextField id="outlined-basic" label="Search" variant="outlined" />
      <Button className="hoho" variant="primary" type="submit" href="/buyerresults">Search</Button> */}
      {categories.map((cat) => (
        <Button className="button" variant="outlined" size="small" value={cat} style={{margin:7}} onClick={(e) => handleSubmit(e)} >
          {cat}
        </Button>
      ))}
      </Container>
    </>
  )
}

export default Buyerhome
