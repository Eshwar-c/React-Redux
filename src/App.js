import {Route,Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About'
import { Navbar } from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeturedProducts from './components/FeturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import Admin from './components/Admin';
import UserDetails from './components/UserDetails';

function App() {
  return (
  <>
  <Navbar />
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='about' element={<About />}></Route>
    <Route path='order-summary' element={<OrderSummary />}/>
    <Route path='*' element={<NoMatch/>}/>
    <Route path='products'element={<Products />}>
      <Route index element={<FeturedProducts/> } />

      <Route path='featured' element={<FeturedProducts />} />
      <Route path='new' element={<NewProducts />}/>
      </Route>
    <Route path='users' element={<Users />}>
      <Route path='users/:userId' element={<UserDetails />} />
      <Route path='users/admin' element={<Admin />} />
    </Route>
      

   </Routes>
  </>
  
  )
}

export default App;
