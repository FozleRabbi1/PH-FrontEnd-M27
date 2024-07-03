import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import { adminRoutes } from "./admin.routes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: adminRoutes,
  },
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Registration /> },
]);

export default routes;










// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Login from "../pages/Login";
// import Registration from "../pages/Registration";
// import About from "../pages/About";
// import Contract from "../pages/Contract";
// import { adminRoutes3 } from "./admin.routes";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     children: [
//       { path: "about", element: <About /> },
//       { path: "contract", element: <Contract /> },
//     ],
//   },
//   {
//     path: "/admin",
//     element: <App></App>,
//     // element: <AdminLayout />,  // ===============================>>> just for testing
//     children: adminRoutes3,
//   },
//   { path: "/login", element: <Login /> },
//   { path: "/registration", element: <Registration /> },
// ]);

// export default routes;
