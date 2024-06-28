    import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/layout/Layout";
import NotFound from "../../widgets/NotFound/NotFound";
import HomePage from "../../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
        ]
    }
])