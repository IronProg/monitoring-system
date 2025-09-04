import { NavLink, Outlet } from "react-router";
import { useAuth } from "../providers/AuthProvider";

const NAV_ROUTES = [
  { path: '/', title: 'Home' },
  { path: '/funcionalidades', title: 'Funcionalidades' },
  { path: '/sobre', title: 'Sobre' },
  { path: '/contato', title: 'Fale Conosco' },
  { path: '/usabilidade', title: 'Usabilidade' },
  { path: '/cadastro', title: 'Cadastre-se' },
];

export default function Layout() {
  const { loggedUser, logout } = useAuth();

  const visibleRoutes = loggedUser
    ? NAV_ROUTES.filter(route => route.path !== '/cadastro')
    : NAV_ROUTES;

  return (
    <>
      <header style={{ position: 'relative' }}>
        <nav>
          <ul>
            {visibleRoutes.map(route => (
              <li key={route.path}>
                <NavLink to={route.path}>
                  {route.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {loggedUser && loggedUser.userName ? (
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 40,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ marginRight: '10px', color: 'white' }}>
              Olá, {loggedUser.userName}
            </span>
            <button
              onClick={logout}
              style={{
                background: 'none',
                color: 'white',
                padding: '5px',
                border: 0,
                cursor: 'pointer',
              }}
            >
              <i class="fa-solid fa-right-from-bracket" />
            </button>
          </div>
        ) : (
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
            <i className="fas fa-user" style={{ fontSize: 20, color: 'white' }} />
          </NavLink>
        )}
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <p> 2025 Sistema de Monitoramento Agrícola. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
