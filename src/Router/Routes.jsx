import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Error from "../components/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import MyListings from "../pages/MyListings/MyListings";
import Orders from "../pages/Orders/Orders";
import CategoryFilteredProducts from "../pages/CategoryFilteredProducts/CategoryFilteredProducts";
import AddListings from "../pages/AddListings/AddListings";
import PetsNSupplies from "../pages/PetsNSupplies/PetsNSupplies";
import ListingDetails from "../pages/ListingDetails/ListingDetails";


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
                path: '/pets-supplies',
                Component: PetsNSupplies,
            },
            {
                path: '/category-filtered-product/:categoryName',
                element: <CategoryFilteredProducts></CategoryFilteredProducts>
            },
            {
                path: '/listing/:id',
                element: <PrivateRoute>
                    <ListingDetails></ListingDetails>
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
                path: '/add-listings',
                element: <PrivateRoute>
                    <AddListings></AddListings>
                </PrivateRoute>,
            },
            {
                path: '/my-listings',
                element: <PrivateRoute>
                    <MyListings></MyListings>
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