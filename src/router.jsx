import { createHashRouter } from "react-router";
import FrontendLayout from "./layout/FrontendLayout";
import Home from "./views/front/Home";
import Products from "./views/front/Products";
import SingleProduct from "./views/front/SingleProduct";
import Cart from "./views/front/Cart"
import NotFound from "./views/front/NotFound";


const routers = [
  {
    path: '/',
    element: <FrontendLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'product',
        element: <Products />
      },
      {
        path: 'product/:id',  //產品詳情需取得id，寫法:id
        element: <SingleProduct />
      },
      {
        path: 'cart',
        element: <Cart />
      }    
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }  
]

export const router = createHashRouter(routers);