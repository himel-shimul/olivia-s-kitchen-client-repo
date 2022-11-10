import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import ErorPage from "../../pages/ErorPage/ErorPage";
import Home from "../../pages/Home/Home/Home";
import AddServices from "../../pages/Home/Services/AddServices";
import AllServices from "../../pages/Home/Services/AllServices";
import ServiceDetails from "../../pages/Home/Services/ServiceDetails";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import SIgnUp from "../../pages/SIgnUp/SIgnUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      // errorElement:<ErorPage></ErorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SIgnUp></SIgnUp>
        },
        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`https://olivias-kitchen-server.vercel.app/services/${params.id}`)
        },
        {
          path: '/allServices',
          element: <AllServices></AllServices>,
          loader: ()=> fetch('https://olivias-kitchen-server.vercel.app/allServices')
        },
        {
          path: '/myReviews',
          element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute> ,
          loader: ()=> fetch('https://olivias-kitchen-server.vercel.app/reviews')
        },
        {
          path: '/addservice',
          element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
        }
      ]
    
    }
  ]);

  export default router;