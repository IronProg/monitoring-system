import {
  createBrowserRouter,
} from "react-router";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Funcionalidades from "../pages/Funcionalidades";
import Sobre from "../pages/Sobre";
import Usabilidade from "../pages/Usabilidade";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "funcionalidades", element: <Funcionalidades /> },
      { path: "sobre", element: <Sobre /> },
      { path: "contato", element: <Contato /> },
      { path: "usabilidade", element: <Usabilidade /> },
      { path: "cadastro", element: <Cadastro /> },
      { path: "login", element: <Login /> },
    ],
  }
]);

export default router;