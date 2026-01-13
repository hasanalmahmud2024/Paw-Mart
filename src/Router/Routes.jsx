import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Profile from "../pages/Profile/Profile";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Error from "../components/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import AddService from "../pages/AddService/AddService";
import MyServices from "../pages/MyServices/MyServices";
import Orders from "../pages/Orders/Orders";


const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/services',
                Component: Services,
            },
            {
                path: '/service-details/:id',
                element: <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>,
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>,
            },
            {
                path: '/login',
                Component: Login,
            }, 
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/reset-password',
                Component: ResetPassword,
            },
            {
                path: '/add-services',
                element: <PrivateRoute>
                    <AddService></AddService>
                </PrivateRoute>,
            },
            {
                path: '/my-services',
                element: <PrivateRoute>
                    <MyServices></MyServices>
                </PrivateRoute>,
            },
            {
                path: '/my-orders',
                element: <PrivateRoute>
                    <Orders></Orders>
                </PrivateRoute>,
            },
        ]
    },
    {
        path: '/*',
        Component: Error
    }
])

export default router