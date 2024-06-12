import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const Layout = ({ children }) => {
  const isSignedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {isSignedIn ? (
            <>
              <NavLink to="/contacts">Contacts</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
