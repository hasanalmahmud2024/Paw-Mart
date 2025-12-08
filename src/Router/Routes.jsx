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


const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch("/services.json"),
            },
            {
                path: '/services',
                Component: Services,
                loader: () => fetch("/services.json"),
            },
            {
                path: '/services/:id',
                element: <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>,
                loader: () => fetch("/services.json"),
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
                Component: AddService,
            },
        ]
    },
    {
        path: '/*',
        Component: Error
    }
])

export default router