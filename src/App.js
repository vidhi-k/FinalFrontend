import { Route,Routes} from "react-router-dom";
import BuyerLogin from './BuyerLogin';
import BuyerSignUp from './BuyerSignUp';
import Home from "./Home";
import Header from "./Header";
import SellerLogin from "./SellerLogin";
import SellerSignUp from "./SellerSignUp";
import Buyerhome from "./Buyerhome";
import BingMap from "./BingMap";
import SellerHome from "./SellerHome";
import SellerNewShop from "./SellerNewShop";
import SellerViewResult from "./SellerViewResult";
import SellerShop from "./SellerShop";
import Geolocation from "./Geolocation";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/buyerlogin" element={<BuyerLogin />}></Route>
      <Route path="/sellerlogin" element={<SellerLogin />}></Route>
      <Route path="/buyersignup" element={<BuyerSignUp />}></Route>
      <Route path="/sellersignup" element={<SellerSignUp />}></Route>
      <Route path="/header" element={<Header />}></Route>
      <Route path="/buyerhome" element={<Buyerhome />}></Route>
      <Route path="/buyerresults" element={<BingMap />}></Route>
      <Route path="/sellerhome" element={<SellerHome />}></Route>
      <Route path="/sellernewshop" element={<SellerNewShop />}></Route>
      <Route path="/sellerviewresult" element={<SellerViewResult />}></Route>
      <Route path="/sellershop" element={<SellerShop />}></Route>
      <Route path="/geolocation" element={<Geolocation />}></Route>
    </Routes>
  );
}

export default App;
