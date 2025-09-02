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
      <header style={{ position: 'relative' }}>
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

        <NavLink
          to={'/login'}
          style={{
            position: 'absolute',
            top: 0,
            right: 40,
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
            <i className="fas fa-user" style={{fontSize: 20, color: 'white'}} />
        </NavLink>
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