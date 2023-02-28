import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import SignUp from "../../Pages/SignUp/SignUp";
import Update from "../../Pages/Update/Update";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/blogs',
                element: <Blog></Blog>
            },
            {
                path:'/services',
                element: <AllServices></AllServices>
            },
            {
                path:'/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader:({params}) =>
                fetch(`http://localhost:5000/allServices/${params.id}`),
            },
            {
                path:'/my-reviews',
                element: (
                    <PrivateRoutes>
                        <MyReview></MyReview>
                    </PrivateRoutes>
                ),
            },
            {
                path:'/add-service',
                element: (
                    <PrivateRoutes>
                        <AddService></AddService>
                    </PrivateRoutes>
                ),
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({ params }) =>
                  fetch(`http://localhost:5000/review/${params.id}`),
              },
        ]
    }
])

export default router;