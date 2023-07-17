import CustomerDashboard from "../pages/profile/customer/Dashboard";
import EditProfile from "../pages/profile/customer/Edit";

export const customerRoutes = [
  { index: true, element: <CustomerDashboard /> },
  { path: "profile", element: <CustomerDashboard /> },
  { path: "edit_profile", element: <EditProfile /> },
];
