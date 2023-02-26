import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import SignUp from "../../Pages/SignUp/SignUp";
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
        ]
    }
])

export default router;