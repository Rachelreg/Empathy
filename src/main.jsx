import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/Accueil.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Jeux from "./pages/Jeux.jsx";
import JeuxDebut from "./pages/JeuxDebut.jsx";
import DialogueBeforeQuest1 from "./pages/DialogueBeforeQuest1.jsx";
import Question from "./components/Question.jsx";

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
      },
      {
        path:"/beforequest1",
        element:<DialogueBeforeQuest1/>
      },
      {
        path:"/question1",
        element:<Question/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
