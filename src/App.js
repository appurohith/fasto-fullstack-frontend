import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import {ToastContainer, toast} from 'react-toastify'
import { useState, useEffect } from "react"
import Home from "./Components/Home"
import Dasbord from "./Components/Dasbord"
import Register from "./Components/Register"
import Login from "./Components/Login"
import AdminHome from './Components/AdminComponent/Admin-Home';
import AdminNavbar from './Components/Navbar/AdminNavbar';
import AddCategory from './Components/AdminComponent/Category/AddCategory';
import MyCart from './Components/MyCart';
import Orders from './Components/orders';
import CustomerProfile from './Components/UserProfile/CustomerProfile';
import AddProduct from './Components/AdminComponent/Product/AddProduct';
import Cart from './Components/CustomerComponent/cart';
import UserProfile from './Components/UserProfile/UserProfile';
import UserSideBar from './Components/UserProfile/UserSideBar';
import { useDispatch, useSelector } from "react-redux";
import { startGetProduct } from './actions/productAction';
import AddAddress from './Components/Location/AddAddress';
import DisplayAddress from './Components/Location/DisplayAddress';
import {startGetCategory} from "./actions/categoryAction"
import { startGetUserCart } from './actions/cartAction';
import ForgotPassword from './Components/UserProfile/ForgotPassword';
import ResetPassword from './Components/UserProfile/ResetPassword';
import Success from './Components/Payment/Success';
import Cancel from './Components/Payment/Cancel';
import MapComponent from './Components/CustomerComponent/map';
import { startGetAddress } from './actions/addressAction';
import GetDelivery from './Components/AdminComponent/GetDelivery';





function App(){
  const dispatch = useDispatch();

  const[isLoggedIn,SetIsLoggedIn] = useState(false)

  useEffect(() => {
    dispatch(startGetCategory())
  },[dispatch])

  useEffect(() => {
    dispatch(startGetUserCart());
}, [dispatch])

useEffect(() => {
  dispatch(startGetProduct());
}, [dispatch]);

useEffect(() => {
  dispatch(startGetAddress())
})

  const handleLogin = () => {
    SetIsLoggedIn(!isLoggedIn)
  }

  return(
  
    <BrowserRouter>
      <div className='app'>
       <AdminNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dasbord/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path='/admin' element={<AdminHome/>}/>
        <Route path='/addcategories' element={<AddCategory/>}/>
        <Route path='/mycart' element={<MyCart/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/customerprofile' element={<CustomerProfile/>}/>
        <Route path='/addproducts' element={<AddProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/update-profile' element={<UserProfile/>}/>
        <Route path='/usersidebar' element={<UserSideBar/>}/>
        <Route path='/display-address' element={<DisplayAddress/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path="/resetPassword/:id/:token" element={<ResetPassword/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/cancel" element={<Cancel/>}/>
        <Route path='/map' element={<MapComponent/>} />
        <Route path='/delivery' element={<GetDelivery/>} />
      </Routes>

    </div>
    <ToastContainer/>
    </BrowserRouter>
 
  )
}

export default App