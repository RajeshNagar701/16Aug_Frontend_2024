import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Index from "./website/pages/Index";
import About from "./website/pages/About";
import Contact from "./website/pages/Contact";
import Shop from "./website/pages/Shop";
import Single_shop from "./website/pages/Single_shop";
import Header from "./website/component/Header";
import Footer from "./website/component/Footer";


import Admin_login from "./admin/pages/Admin_login";
import Dashboard from "./admin/pages/Dashboard";
import Add_categories from "./admin/pages/Add_categories";
import Manage_categories from "./admin/pages/Manage_categories";
import Add_product from "./admin/pages/Add_product";
import Manage_product from "./admin/pages/Manage_product";
import Manage_order from "./admin/pages/Manage_order";
import View_cart from "./admin/pages/View_cart";
import Manage_customer from "./admin/pages/Manage_customer";
import Manage_contact from "./admin/pages/Manage_contact";

function App() {
  return (
    <div>
      <BrowserRouter>
      
         <Routes>
           <Route path='/' element={<Index/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/contact' element={<Contact/>}></Route>
           <Route path='/shop' element={<Shop/>}></Route>
           <Route path='/single_shop' element={<Single_shop />}></Route>

          
           <Route path='/admin-login' element={<Admin_login/>}></Route>
           <Route path='/dashboard' element={<Dashboard/>}></Route>

           <Route path='/add_categories' element={<Add_categories/>}></Route>
           <Route path='/manage_categories' element={<Manage_categories/>}></Route>

           <Route path='/add_product' element={<Add_product />}></Route>
           <Route path='/manage_product' element={<Manage_product />}></Route>

           <Route path='/manage_order' element={<Manage_order />}></Route>
           <Route path='/view_cart' element={<View_cart />}></Route>
           <Route path='/manage_customer' element={<Manage_customer />}></Route>
           <Route path='/manage_contact' element={<Manage_contact />}></Route>

         </Routes>
         
         
      </BrowserRouter>
    </div>
  );
}

export default App;
