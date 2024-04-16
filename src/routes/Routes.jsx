import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivetRoute from "./PrivetRoute";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/newDetails/:id',
                element: <PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]

    }
])

export default routes;