import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../widgets/layout/Layout';
import NotFound from '../../widgets/NotFound/NotFound';
import HomePage from '../../Pages/HomePage/HomePage';
import Filters from '../../features/Filters/ul/Filters';
import CompanyPage from '../../Pages/AboutCompany/CompanyPage';
import InfoPage from '../../Pages/InfoPage/InfoPage';
import AdminLayout from '../../widgets/layout/AdminLayout';
import AdminMainDashboard from '../../features/AdminMainDashboard/AdminMainDashboard';
import AdminRealEstate from '../../features/AdminRealEstate/AdminRealEstate';
import AdminSettings from '../../features/AdminSettings/AdminSettings';
import Profile from '../../features/Profile/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/watch',
        element: <Filters />,
      },
      {
        path: '/AboutCompany',
        element: <CompanyPage />,
      },
      {
        path: '/info',
        element: <InfoPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'main-dashboard',
        element: <AdminMainDashboard />,
      },
      {
        path: 'real-estate',
        element: <AdminRealEstate />,
      },
      {
        path: 'settings',
        element: <AdminSettings />,
      },
      {
        path:'/admin/profile',
        element:<Profile/>
      }
    ],
  },
]);
