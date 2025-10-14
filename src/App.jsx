import "./App.css";
import { Main } from "./components/layout/main/jsx/Main.jsx";
import {
  Navigate,
  createBrowserRouter as routerArray,
  RouterProvider,
} from "react-router-dom";
import { About } from "./components/routes/about/jsx/About.jsx";
import { Contact } from "./components/routes/contact/jsx/Contact.jsx";
import { Home } from "./components/routes/home/jsx/Home.jsx";
import { Login } from "./components/pages/login/jsx/Login.jsx";

const router = routerArray([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> }, // 👈 redirects / → /home
      { path: "home", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
