import Header from "./Header"
import Container from 'react-bootstrap/Container';
import TextField from '@mui/material/TextField';
import './buyerhome.css';
import Button from '@mui/material/Button';
import {Navigate, useLocation} from 'react-router-dom';
const Buyerhome = () => {
  // const location = useLocation();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if(!isAuthenticated){
    return <Navigate to="/" replace></Navigate>
  }
  const loggedInUser = localStorage.getItem("user");
  // console.log(loggedInUser);
  // const currUser = location.state.user.name;
  // console.log(location.state.user.name);
  
  return (
    <>
      <Header />
      <Container  className="name" >
      <h1>Welcome! {loggedInUser} </h1>
      <div className="hehe"><h5>What are you looking for?</h5></div>
      {/* <TextField id="outlined-basic" label="Search" variant="outlined" />
      <Button className="hoho" variant="primary" type="submit" href="/buyerresults">Search</Button> */}
       <Button className="button" variant="outlined" size="small" href="/buyerresults" style={{margin:7}}>
          Cobler
        </Button>
        <Button className="button" variant="outlined" size="small" style={{margin:7}}>
          Shop
        </Button>
        <Button className="button" variant="outlined" size="small" style={{margin:7}}>
          Hawker
        </Button>
        <Button className="button" variant="outlined" size="small" style={{margin:7}}>
          Other
        </Button>
      </Container>
    </>
  )
}

export default Buyerhome
