import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../redux/auth/selectors";
import { logout } from "../redux/auth/operations";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {isSignedIn ? (
            <>
              <NavLink to="/contacts">Contacts</NavLink>

              <div>
                <span>Hi, {userData.name}</span>
                <button onClick={onLogout} type="button">
                  Log out
                </button>
              </div>
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
