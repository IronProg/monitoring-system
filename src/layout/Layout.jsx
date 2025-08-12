import { NavLink, Outlet } from "react-router"

const NAV_ROUTES = [
  { path: '/', title: 'Home'},
  { path: '/funcionalidades', title: 'Funcionalidades'},
  { path: '/sobre', title: 'Sobre'},
  { path: '/contato', title: 'Fale Conosco'},
  { path: '/usabilidade', title: 'Usabilidade'},
  { path: '/cadastro', title: 'Cadastre-se'},
]

export default function Layout() {

  return (
    <>
      <header>
        <nav>
          <ul>
            { NAV_ROUTES.map(route => (
              <li key={route.path}>
                <NavLink to={route.path}>
                  { route.title }
                </NavLink>
              </li>
            )) }
          </ul>
        </nav>
      </header>


       <main className="container">
          <Outlet />
        </main>

      <footer>
        <p> 2025 Sistema de Monitoramento Agrícola. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}