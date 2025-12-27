import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../../lib/context/AuthContext';

export default function BaseLayout() {
  const { token, userName } = useAuth();

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/employees" className="btn btn-ghost text-xl">
            daisyUI
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
