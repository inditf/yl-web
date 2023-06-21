import { RouterProvider, createHashRouter, Navigate } from "react-router-dom";
import { useToken } from "../provider/tokenProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

const Routes = () => {
    const { token } = useToken();
    // 路由配置
    const routesForPublic = [
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/",
            element: < Navigate to='/login' />,
        },
        // {
        //     path: "/home",
        //     element: <Home />,
        // },
    ];
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/home",
                    element: <Home />,
                },
                {
                    path: "/profile",
                    element: <div>routes For Token</div>,
                },
            ],
        },
    ];
    const routesForNotAuthenticatedOnly = [
        {
            path: "/profile",
            element: <div>routes For Not Token</div>,
        },
    ];


    const router = createHashRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,

    ]);

    return <RouterProvider router={router} />;

};


export default Routes;

