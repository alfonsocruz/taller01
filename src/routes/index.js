import { useRoutes } from "react-router-dom";

import { AlreadyLoggedIn, PublicRoute, ProtectedRoute } from "./middlewares";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Directory from "../pages/Directory";
import NotFound from "../pages/NotFound";

const Router = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <AlreadyLoggedIn />,
        },
        {
            path: "/sign-in",
            element: <PublicRoute><SignIn /></PublicRoute>,
        },
        {
            path: "/sign-up",
            element: <PublicRoute><SignUp /></PublicRoute>,
        },
        {
            path: "/directory",
            element: <ProtectedRoute><Directory /></ProtectedRoute>,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);

    return routes;
};

export default Router;