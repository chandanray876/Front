import TaskerDashboard from "../pages/profile/tasker/Dashboard";
import EditTaskerProfile from "../pages/profile/tasker/Edit";

export const taskerRoutes = [
  { index: true, element: <TaskerDashboard /> },
  { path: "tasker/profile", element: <TaskerDashboard /> },
  { path: "edit_profile", element: <EditTaskerProfile /> },
];
