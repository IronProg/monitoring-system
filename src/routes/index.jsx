import {
  createBrowserRouter,
} from "react-router";
import Layout from "../layout/Layout";
import Contato from "../pages/Contato";
import Funcionalidades from "../pages/Funcionalidades";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Sobre from "../pages/Sobre";
import Usabilidade from "../pages/Usabilidade";
import Orcamento from "../pages/Orcamento";
import Cadastro from "../pages/Cadastro";

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
      { path: "orcamento", element: <Orcamento /> },
      { path: "cadastro", element: <Cadastro /> },
      { path: "login", element: <Login /> },
    ],
  }
]);

export default router;