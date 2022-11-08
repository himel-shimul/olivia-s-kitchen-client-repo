import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import ServiceDetails from "../../pages/Home/Services/ServiceDetails";
import Login from "../../pages/Login/Login";
import SIgnUp from "../../pages/SIgnUp/SIgnUp";

const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
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
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
      ]
    
    }
  ]);

  export default router;