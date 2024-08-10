import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/layout/Layout";
import NotFound from "../../widgets/NotFound/NotFound";
import HomePage from "../../Pages/HomePage/HomePage";
import Filters from "../../features/Filters/ui/Filters";
import CompanyPage from "../../Pages/AboutCompany/CompanyPage";
import InfoPage from "../../Pages/InfoPage/InfoPage";
import AdminLayout from "../../widgets/layout/AdminLayout";
import AdminMainDashboard from "../../features/AdminMainDashboard/AdminMainDashboard";
import AdminRealEstate from "../../features/AdminRealEstate/AdminRealEstate";
import AdminHeadings from "../../features/AdminHeadings";
import AdminSettings from "../../features/AdminSettings/AdminSettings";
import SignIn from "../../features/Sign-In/Sign-In";
import PenModal from "../../features/AdminRealEstate/components/PenModal";
import AddHeading from "../../features/AdminHeadings/ui/AddHeading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/watch",
        element: <Filters />,
      },
      {
        path: "/AboutCompany",
        element: <CompanyPage />,
      },
      {
        path: "/info/:id",
        element: <InfoPage />,
      },
    ],
  },
  {
    path: "/admin/sign-in",
    element: <SignIn />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <AdminMainDashboard />,
      },
      {
        path: "headings",
        element: <AdminHeadings />,
      },
      {
        path: "headings-add",
        element: <AddHeading />,
      },
      {
        path: "real-estate",
        element: <AdminRealEstate />,
      },
      {
        path: "settings",
        element: <AdminSettings />,
      },
      {
        path: "house-edit/:houseId",
        element: <PenModal />,
      },
      {
        path: "house-add",
        element: <PenModal />,
      },
    ],
  },
]);
