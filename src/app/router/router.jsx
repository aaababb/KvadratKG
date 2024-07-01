    import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/layout/Layout";
import NotFound from "../../widgets/NotFound/NotFound";
import HomePage from "../../Pages/HomePage/HomePage";
import CompanyPage from "../../Pages/AboutCompany/CompanyPage";
import InfoPage from "../../Pages/InfoPage/InfoPage";

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
            {
                path: '/AboutCompany',
                element: <CompanyPage/>
            },
            {
                path:"/info",
                element:<InfoPage/>
            }
        ]
    }
])