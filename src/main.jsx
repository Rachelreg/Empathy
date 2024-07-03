import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/Accueil.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Jeux from "./pages/Jeux.jsx";
import JeuxDebut from "./pages/JeuxDebut.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/jeux",
        element: <Jeux/>
      },
      {
        path:"/jeuxdebut",
        element: <JeuxDebut/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
