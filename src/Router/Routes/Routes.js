import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import ServiceDetails from "../../pages/Home/Services/ServiceDetails";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import ReviewPage from "../../pages/ReviewPage/ReviewPage";
import Reviews from "../../pages/Reviews/Reviews";
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
        // {
        //   path: '/ReviewPage/:id',
        //   element: <ReviewPage></ReviewPage>,

        // }
        {
          path: '/myReviews',
          element: <MyReviews></MyReviews>,
          loader: ()=> fetch('http://localhost:5000/reviews')
        }
      ]
    
    }
  ]);

  export default router;