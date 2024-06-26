
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write" ;
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./appp.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path : "/",
        element: <Home />,
      },
      {
        path : "/post/:id",
        element: <Single />,
      },
      {
        path : "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "user/:id", // User profile route - Add this route
    element: <UserProfile />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
          <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
