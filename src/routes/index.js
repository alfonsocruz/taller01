import { useRoutes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Directory from "../pages/Directory";
import NotFound from "../pages/NotFound";

const Router = () => {
    const routes = useRoutes([
        {
            path: "/sign-in",
            element: <SignIn />,
        },
        {
            path: "/sign-up",
            element: <SignUp />,
        },
        {
            path: "/directory",
            element: <Directory />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);

    return routes;
};

export default Router;