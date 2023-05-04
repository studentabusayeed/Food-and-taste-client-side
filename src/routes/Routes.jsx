import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Blog/Blog";
import ViewRecipe from "../pages/ViewRecipe/ViewRecipe";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/view-recipe/:id",
                element: <PrivateRoute><ViewRecipe></ViewRecipe></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-and-taste-server-side-studentabusayeed.vercel.app/food/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    }
]);

export default router;