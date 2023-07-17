import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "./pages/profile/common/SidebarLayout";
import { customerRoutes } from "./routes/customerRoutes";
import { webRoutes } from "./routes/webRoutes";
import { taskerRoutes } from "./routes/taskerRoutes";
import NotFound from "./pages/404";
import { UserContext } from "./context/userContext";
import WebLayout from "./pages/WebLayout";
import "./assets/css/all-min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom.css";
// import "./assets/css/owl.carousel-min.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "./assets/css/developer.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {
  const prevUser = localStorage.getItem("user");
  const [user, updateUser] = useState(JSON.parse(prevUser) || {});

  useEffect(() => {
    if (user?.token) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const customerRoute = customerRoutes.map((route, index) => (
    <Route
      index={route.index}
      element={user?.email ? route.element : <Navigate to="/login" />}
      path={route.path}
      key={index}
    />
  ));

  const taskerRoute = taskerRoutes.map((route, index) => (
    <Route
      index={route.index}
      element={user?.email ? route.element : <Navigate to="/login" />}
      path={route.path}
      key={index}
    />
  ));

  const webRoute = webRoutes.map((route, index) => (
    <Route
      index={route.index}
      element={route.element}
      path={route.path}
      key={index}
    />
  ));

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={true}
        limit={3}
      />
      <BrowserRouter>
        <UserContext.Provider value={{ user, updateUser }}>
          <Routes>
            <Route path="/" element={<WebLayout />}>
              {webRoute}
              <Route path="profile" element={<DashboardLayout />}>
                {customerRoute}
              </Route>
              <Route path="tasker/profile" element={<DashboardLayout />}>
                {taskerRoute}
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
