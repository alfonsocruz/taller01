import { useRoutes } from "react-router-dom";
import { Routes } from "./routes";

import App from "@src/App";

const Router = () => {
    const routes = useRoutes([
        {
            path: "*",
            element: <App />,
        },
        ...Routes,
    ]);

    return routes;
};

export default Router;