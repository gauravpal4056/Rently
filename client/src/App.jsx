import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Login from './pages/auth/login'
import Nav from './component/navbar/nav'
import Home from './pages/home/home'
import { useSelector } from 'react-redux'
import Register from './pages/auth/register'
import ProductDetail from './pages/productDetail/productDetail'
import Create from './pages/create/create'

function App() {
  const user = useSelector(state => state.user)
  return (
    <>
      {/* <Nav/>
      <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<Nav />}>
            <Route index element={<Home/>} />
            <Route path="/product/:product_id" element = {<ProductDetail />} />
          <Route path="/create_product" element={<Create />} />
          </Route>
          <Route path="/login" element = {<Login />} />
          <Route path="/register" element = {<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
